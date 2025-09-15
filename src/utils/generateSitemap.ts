// ============================================================================
// UTILITY FUNCTION (Improvement 1: XML Escaping)
// ============================================================================
/**
 * Escapes special characters in a string for use in XML content.
 * @param unsafe The string to escape.
 * @returns The escaped string.
 */
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&"']/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      case "'": return '&apos;';
    }
    return c;
  });
}

// ============================================================================
// INTERFACES
// ============================================================================
interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: string;
  alternates?: Array<{
    hreflang: string;
    href: string;
  }>;
}

interface ImageSitemap {
  loc: string; // Page URL
  images: Array<{
    loc: string; // Image URL
    caption?: string;
    title?: string;
    license?: string;
  }>;
}

// ============================================================================
// SITEMAP GENERATOR CLASS (Refactored for Scalability)
// ============================================================================
export class SitemapGenerator {
  private baseUrl: string;
  private urls: SitemapURL[] = [];
  private images: ImageSitemap[] = [];
  private readonly sitemapUrlLimit: number = 45000; // Keep under Google's 50k limit

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  addURL(url: SitemapURL): void {
    this.urls.push({
      ...url,
      loc: url.loc.startsWith('http') ? url.loc : `${this.baseUrl}${url.loc}`
    });
  }

  addImageSitemap(imageSitemap: ImageSitemap): void {
    this.images.push({
      ...imageSitemap,
      loc: imageSitemap.loc.startsWith('http') ? imageSitemap.loc : `${this.baseUrl}${imageSitemap.loc}`,
      images: imageSitemap.images.map(img => ({
        ...img,
        loc: img.loc.startsWith('http') ? img.loc : `${this.baseUrl}${img.loc}`
      }))
    });
  }

  /**
   * (Improvement 2: Paginated Sitemaps)
   * Generates one or more sitemap files from the added URLs.
   * Returns a map of filenames to their XML content.
   */
  generateSitemaps(): { [filename: string]: string } {
    const sitemaps: { [filename: string]: string } = {};
    if (this.urls.length === 0) return sitemaps;

    for (let i = 0; i * this.sitemapUrlLimit < this.urls.length; i++) {
      const chunk = this.urls.slice(i * this.sitemapUrlLimit, (i + 1) * this.sitemapUrlLimit);
      const filename = this.urls.length > this.sitemapUrlLimit
        ? `sitemap-pages-${i + 1}.xml`
        : `sitemap-pages.xml`;

      const urlElements = chunk.map(url => {
        let urlXml = `  <url>\n    <loc>${escapeXml(url.loc)}</loc>\n`;
        if (url.lastmod) urlXml += `    <lastmod>${url.lastmod}</lastmod>\n`;
        if (url.changefreq) urlXml += `    <changefreq>${url.changefreq}</changefreq>\n`;
        if (url.priority) urlXml += `    <priority>${url.priority}</priority>\n`;

        if (url.alternates && url.alternates.length > 0) {
          url.alternates.forEach(alt => {
            urlXml += `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${escapeXml(alt.href)}" />\n`;
          });
        }
        urlXml += `  </url>`;
        return urlXml;
      }).join('\n');

      sitemaps[filename] = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlElements}
</urlset>`;
    }
    return sitemaps;
  }

  /**
   * Generates one or more image sitemap files.
   */
  generateImageSitemaps(): { [filename: string]: string } {
    const sitemaps: { [filename: string]: string } = {};
    if (this.images.length === 0) return sitemaps;

    for (let i = 0; i * this.sitemapUrlLimit < this.images.length; i++) {
      const chunk = this.images.slice(i * this.sitemapUrlLimit, (i + 1) * this.sitemapUrlLimit);
      const filename = this.images.length > this.sitemapUrlLimit
        ? `sitemap-images-${i + 1}.xml`
        : `sitemap-images.xml`;

      const urlElements = chunk.map(page => {
        let urlXml = `  <url>\n    <loc>${escapeXml(page.loc)}</loc>\n`;
        page.images.forEach(image => {
          urlXml += `    <image:image>\n`;
          urlXml += `      <image:loc>${escapeXml(image.loc)}</image:loc>\n`;
          if (image.caption) urlXml += `      <image:caption><![CDATA[${image.caption}]]></image:caption>\n`;
          if (image.title) urlXml += `      <image:title><![CDATA[${image.title}]]></image:title>\n`;
          if (image.license) urlXml += `      <image:license>${escapeXml(image.license)}</image:license>\n`;
          urlXml += `    </image:image>\n`;
        });
        urlXml += `  </url>`;
        return urlXml;
      }).join('\n');

      sitemaps[filename] = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlElements}
</urlset>`;
    }
    return sitemaps;
  }

  /**
   * Generates a sitemap index file referencing all generated sitemap files.
   * @param sitemapFilenames - An array of all sitemap filenames to include in the index.
   */
  generateSitemapIndex(sitemapFilenames: string[]): string {
    const lastmod = new Date().toISOString().split('T')[0];
    const sitemapElements = sitemapFilenames.map(filename => `  <sitemap>
    <loc>${this.baseUrl}/${filename}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapElements}
</sitemapindex>`;
  }
}

// ============================================================================
// DYNAMIC CONTENT SIMULATION (Improvement 3 & 4)
// ============================================================================
const mockApi = {
  getPages: async () => [
    { path: '/', changefreq: 'weekly' as const, priority: '1.0', lastModified: '2025-09-08' },
    { path: '/products', changefreq: 'weekly' as const, priority: '0.9', lastModified: '2025-09-07' },
    { path: '/about', changefreq: 'monthly' as const, priority: '0.8', lastModified: '2025-08-15' },
    { path: '/contact', changefreq: 'monthly' as const, priority: '0.8', lastModified: '2025-08-10' },
    { path: '/expertise', changefreq: 'monthly' as const, priority: '0.7', lastModified: '2025-09-01' }
  ],
  getProductCategories: async () => [
    { slug: 'pipes-tubes', lastModified: '2025-09-06' },
    { slug: 'valves', lastModified: '2025-09-05' },
    { slug: 'fittings', lastModified: '2025-09-04' },
    { slug: 'flanges', lastModified: '2025-09-03' },
    { slug: 'fasteners', lastModified: '2025-09-02' },
    { slug: 'custom-solutions', lastModified: '2025-09-01' }
  ],
  getImagePages: async () => [
    {
      loc: '/',
      images: [
        { loc: '/hero-industrial-night.jpg', caption: 'Night view of illuminated industrial plant', title: 'Industrial Plant - JUNIMETAL' },
        { loc: '/assets/materials4.png', caption: 'High-quality carbon, alloy, and stainless steel', title: 'Metal Materials - JUNIMETAL' },
        { loc: '/assets/heated_pipe3.png', caption: 'Industrial heat treatment process for metals', title: 'Heat Treatment - JUNIMETAL' }
      ]
    }
  ]
};

// ============================================================================
// MAIN GENERATION FUNCTION
// ============================================================================

/**
 * Generates all sitemap files for JMDU.
 * @returns An object where keys are filenames and values are the XML content.
 */
export async function generateJunimetalSitemaps(baseUrl: string): Promise<{ [filename: string]: string }> {
  const generator = new SitemapGenerator(baseUrl);

  // Note: The ISO 639-1 code for Chinese is 'zh', not 'ch'. Using the standard 'zh'.
  const languages = ['en', 'zh', 'es', 'ru'];

  // 1. Fetch main pages
  const mainPages = await mockApi.getPages();
  mainPages.forEach(page => {
    const alternates = languages.map(lang => ({
      hreflang: lang,
      href: `${baseUrl}${lang === 'en' ? '' : `/${lang}`}${page.path === '/' ? '' : page.path}`
    }));
    alternates.push({ hreflang: 'x-default', href: `${baseUrl}${page.path === '/' ? '' : page.path}` });

    // Add default 'en' version
    generator.addURL({
      loc: page.path,
      lastmod: page.lastModified,
      changefreq: page.changefreq,
      priority: page.priority,
      alternates
    });

    // Add other language versions
    languages.filter(lang => lang !== 'en').forEach(lang => {
      generator.addURL({
        loc: `/${lang}${page.path === '/' ? '' : page.path}`,
        lastmod: page.lastModified,
        changefreq: page.changefreq,
        priority: page.priority,
        alternates
      });
    });
  });

  // 2. Fetch product category pages
  const productCategories = await mockApi.getProductCategories();
  productCategories.forEach(category => {
    generator.addURL({
      loc: `/products/${category.slug}`,
      lastmod: category.lastModified,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });

  // 3. Fetch images for image sitemap
  const imagePages = await mockApi.getImagePages();
  imagePages.forEach(page => {
    generator.addImageSitemap(page);
  });

  // 4. Generate all the sitemap files
  const pageSitemaps = generator.generateSitemaps();
  const imageSitemaps = generator.generateImageSitemaps();
  const allSitemaps = { ...pageSitemaps, ...imageSitemaps };

  // 5. Generate the sitemap index file
  const sitemapIndex = generator.generateSitemapIndex(Object.keys(allSitemaps));
  
  return {
    'sitemap.xml': sitemapIndex, // The index file is usually named sitemap.xml
    ...allSitemaps
  };
}

// Example of how to run this and log the files:
async function run() {
  const baseUrl = 'https://www.junimetal.com';
  const sitemapFiles = await generateJunimetalSitemaps(baseUrl);

  for (const filename in sitemapFiles) {
    console.log(`\n`);
    console.log(sitemapFiles[filename]);
  }
}

run();