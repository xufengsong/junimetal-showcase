import React, { useEffect, useState } from "react";
import { translations, type Language } from "@/utils/translations";
import heroImage from "@/assets/hero-industrial-night.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
} from "lucide-react";

import materials4 from "@/assets/materials4.png";
import materials4_webp from "@/assets/materials4_webp.webp";

import heated_pipe3 from "@/assets/heated_pipe3.png";
import heated_pipe3_webp from "@/assets/heated_pipe3_webp.webp";

import cryogenic3 from "@/assets/cryogenic3.png";
import cryogenic3_webp from "@/assets/cryogenic3_webp.webp";

import custom_design4 from "@/assets/custom4.png";
import custom_design4_webp from "@/assets/custom4_webp.webp"

import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wrench, Cog, Layers, Snowflake, ShieldCheck, Hammer, BadgeCheck, Users, Globe } from "lucide-react";
import { productCategories } from "@/data/productCategories";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");
  
  const t = translations[language];
  
  useEffect(() => {
    // Force dark theme for sleek black UI and smooth scrolling
    document.documentElement.classList.add("dark", "scroll-smooth");
    document.documentElement.lang = language;

    // SEO: Title, Description, Canonical, OpenGraph, Twitter based on selected language
    const title = t.seo.title;
    const description = t.seo.description;

    document.title = title;

    const setMeta = (selector: string, attr: "name" | "property", content: string) => {
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attr}='${selector}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, selector);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMeta("description", "name", description);
    setMeta("og:title", "property", title);
    setMeta("og:description", "property", description);
    setMeta("og:type", "property", "website");
    const ogImageUrl = `${window.location.origin}${heroImage}`;
    setMeta("og:image", "property", ogImageUrl);
    setMeta("twitter:card", "name", "summary_large_image");
    setMeta("twitter:title", "name", title);
    setMeta("twitter:description", "name", description);
    setMeta("twitter:image", "name", ogImageUrl);

    let linkCanonical = document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", `${window.location.origin}${window.location.pathname}`);

    // JSON-LD Organization schema
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "JUNIMETAL DEVELOPMENT",
      url: window.location.origin,
      slogan: t.seo.slogan,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office #804, 25, Yeonmujang 5 Ga-Gil, Seongdong-Gu",
        addressLocality: "Seoul",
        addressCountry: "KR",
      },
      department: [
        {
          "@type": "Organization",
          name: "Warehouse (Busan)",
          address: {
            "@type": "PostalAddress",
            streetAddress: "32, Garisae 2-ro 13 Beon-gil, Gangseo-gu",
            addressLocality: "Busan",
            addressCountry: "KR",
          },
        },
      ],
      sameAs: [],
    } as const;

    const existingLd = document.getElementById("org-json-ld");
    if (existingLd) existingLd.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "org-json-ld";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }, [language, t]);

  const navItems = [
    { href: "#about", label: t.nav.aboutUs },
    { href: "#products", label: "Our Products" },
    // { href: "#offerings", label: t.nav.productsServices },
    { href: "#expertise", label: t.nav.ourExpertise },
    { href: "#visits", label: t.visits.title },
    { href: "#contact", label: t.nav.contactUs },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
        {t.hero.skipToContent}
      </a>

      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <div className="h-7 w-7 rounded-sm bg-sidebar-primary" aria-hidden />  This is the blue box before JUNIMETAL DEVELOPMENT */}
            <span 
              className="text-lg font-semibold tracking-wide"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              JUNIMETAL DEVELOPMENT (JMDU)
            </span>
          </div>
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-secondary rounded-md border border-transparent hover:border-border hover:shadow-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
              <SelectTrigger className="w-[120px] h-8">
                <Globe className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
                {/* <SelectItem value="ko">한국어</SelectItem>
                <SelectItem value="ja">日本語</SelectItem> */}
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="ru">Русский</SelectItem>
              </SelectContent>
            </Select>
            <div className="md:hidden">
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                {t.nav.contactUs}
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main id="content">
        {/* Hero Section */}
        <section
          aria-label="Hero"
          className="relative isolate min-h-[100svh] overflow-hidden"
        >
          <img
            src={heroImage}
            alt="Night view of an illuminated industrial plant with pipes and towers"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90" />

          <div className="relative z-10 container flex min-h-[100svh] flex-col items-start justify-center gap-6 py-24">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              {t.hero.title}
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button asChild variant="accent" size="xl">
                <a href="#offerings">{t.hero.exploreOfferings}</a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#contact">{t.hero.getInTouch}</a>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-t border-border w-full bg-gradient-to-r from-black via-[#0a0f2c] to-[#0a1a3c] shadow-lg"
        >
          <div className="container py-12 text-left">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              {t.about.heading}
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-3xl text-lg font-semibold text-gray-100 leading-relaxed">
              {t.about.subheading}
            </p>

            {/* Body */}
            <div className="mt-8 space-y-6 max-w-3xl text-gray-300 leading-relaxed">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
              <p>{t.about.paragraph4}</p>
            </div>
          </div>
        </section>

        {/* Our Products Section */}
        <section id="products" className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold tracking-tight">
              Our Products
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              Explore our main product categories.???
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productCategories.map((category) => (
                <Card
                  key={category.id}
                  className="overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                >
                  <CardHeader>
                    <CardTitle>{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                    <Button asChild className="mt-4 w-full">
                      <Link to={`/products#${category.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline">
                <Link to="/products">
                  More Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        {/* doubao support */}
        <section id="expertise" className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container">
            <header className="mb-10 text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">{t.expertise.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{t.expertise.subtitle}</p>
            </header>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Materials Card */}
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <picture>
                    <source srcSet={materials4_webp} type="image/webp"></source>
                    <img 
                      src={materials4}
                      alt="Various metal materials including carbon steel, alloy steel and stainless steel" 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-medium">{t.expertise.materials_title}</h3>
                </div>
                <div className="p-6">
                  <ul className="grid list-disc gap-2 pl-5 text-muted-foreground sm:grid-cols-2">
                    {
                      t.expertise.materials.map((item) => <li key={item}>{item}</li>)
                    }
                  </ul>
                </div>
              </Card>

              {/* Heat Treatment Card */}
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <picture>
                    <source srcSet={heated_pipe3} type="imgage/webp"></source>
                    <img 
                      src={heated_pipe3_webp}
                      alt="Industrial heat treatment process for metals" 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-medium">{t.expertise.heat_title}</h3>
                </div>
                <div className="p-6">
                  <ul className="grid list-disc gap-2 pl-5 text-muted-foreground sm:grid-cols-2">
                    {/* {["Stress Relief", "Quenching", "Corrosion-Resistant Annealing"].map((item) => (
                      <li key={item}>{item}</li>
                    ))} */}
                    {
                      t.expertise.heat.map((item) => <li key={item}>{item}</li>)
                    }
                  </ul>
                </div>
              </Card>

              {/* Cryogenic Service Card */}
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <picture>
                    <source srcSet={cryogenic3_webp} type="image/webp"></source>
                    <img 
                      src={cryogenic3}
                      alt="Cryogenic testing equipment for materials" 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />            
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <Snowflake className="text-sidebar-primary" />
                    <h3 className="text-xl font-medium">{t.expertise.cryogenic_title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                    {/* <li>In-house validation of cryogenic capabilities by testing @ -196°C</li>
                    <li>Tightness testing with helium</li> */}
                    {
                      t.expertise.cryogenic.map((item) => <li key={item}>{item}</li>)
                    }
                  </ul>
                </div>
              </Card>

              {/* Custom Designs Card */}
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <picture>
                    <source srcSet={custom_design4_webp} type="image/webp"></source>
                    <img 
                      src={custom_design4}
                      alt="Custom metal forging components and designs" 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <ShieldCheck className="text-sidebar-primary" />
                    <h3 className="text-xl font-medium">{t.expertise.custom_design_title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-3 text-muted-foreground">
                    {t.expertise.custom_design_subtitle}
                  </p>
                  <ul className="grid list-disc gap-2 pl-5 text-muted-foreground sm:grid-cols-2">
                    {
                      t.expertise.custom_design.map((item) => <li key={item}>{item}</li>)                    
                    }
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Visits Section */}
        <section className="scroll-mt-24 border-t border-border py-16 md:py-24 bg-gradient-to-br from-background to-background/50">
          <div className="container">
            <header className="mb-10 text-center">
              <h2 className="text-3xl font-semibold md:text-4xl mb-4">{t.visits.title}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.visits.subtitle}</p>
            </header>

            {/* Previous Visits Carousel */}
            <div className="mb-12">
              <h3 className="text-xl font-medium mb-6 text-center">{t.visits.visitsCarousel}</h3>
              <div className="relative overflow-hidden rounded-lg bg-card/20 backdrop-blur-sm p-4">
                <div className="flex animate-scroll-left space-x-6 will-change-transform">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-80 h-48 bg-gradient-to-br from-muted/50 to-muted/20 rounded-lg border border-border/50 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                    >
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="text-sm font-medium">Site Visit {i + 1}</h4>
                        <p className="text-xs text-muted-foreground mt-1">Industrial Facility</p>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={`duplicate-${i}`}
                      className="flex-shrink-0 w-80 h-48 bg-gradient-to-br from-muted/50 to-muted/20 rounded-lg border border-border/50 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                    >
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="text-sm font-medium">Site Visit {i + 1}</h4>
                        <p className="text-xs text-muted-foreground mt-1">Industrial Facility</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Partner Companies Carousel */}
            <div>
              <h3 className="text-xl font-medium mb-6 text-center">{t.visits.partnersCarousel}</h3>
              <div className="relative overflow-hidden rounded-lg bg-card/20 backdrop-blur-sm p-4">
                <div className="flex animate-scroll-right space-x-6 will-change-transform">
                  {['Total', 'Chevron', 'Saipem', 'Subsea 7', 'Technip', 'Shell', 'BP', 'Equinor', 'Petrobras', 'TechnipFMC', 'Aker Solutions', 'McDermott'].map((company, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-60 h-32 bg-gradient-to-br from-card to-card/50 rounded-lg border border-border flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                      <div className="text-center p-4">
                        <div className="text-lg font-semibold text-foreground">{company}</div>
                        <div className="text-xs text-muted-foreground mt-2">Trusted Partner</div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {['Total', 'Chevron', 'Saipem', 'Subsea 7', 'Technip', 'Shell', 'BP', 'Equinor', 'Petrobras', 'TechnipFMC', 'Aker Solutions', 'McDermott'].map((company, i) => (
                    <div
                      key={`duplicate-${i}`}
                      className="flex-shrink-0 w-60 h-32 bg-gradient-to-br from-card to-card/50 rounded-lg border border-border flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                      <div className="text-center p-4">
                        <div className="text-lg font-semibold text-foreground">{company}</div>
                        <div className="text-xs text-muted-foreground mt-2">Trusted Partner</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer id="contact" className="scroll-mt-24 border-t border-border bg-card/40 py-16">
          <div className="container grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">{t.contact.title}</h2>
              <p className="text-muted-foreground">
                {t.contact.subtitle}
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild variant="accent">
                  <a href="mailto:jmd@jmd.by-works.com">jmd@jmd.by-works.com</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#offerings">{t.hero.exploreOfferings}</a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">{t.contact.offices.seoul.title}</h3>
              <address className="not-italic text-sm text-muted-foreground">
                {t.contact.offices.seoul.address}
              </address>
              <h3 className="mb-3 mt-6 text-lg font-medium">{t.contact.offices.busan.title}</h3>
              <address className="not-italic text-sm text-muted-foreground">
                {t.contact.offices.busan.address}
              </address>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">{t.footer.office_location}</h3>
              <div className="overflow-hidden rounded-md border">
                <iframe
                  title="Map of JUNIMETAL DEVELOPMENT Seoul Office"
                  src="https://www.google.com/maps?q=Office%20%23804%2C%2025%2C%20Yeonmujang%205%20Ga-Gil%2C%20Seongdong-Gu%2C%20Seoul%2C%20South%20Korea&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full"
                />
              </div>
            </div>
          </div>
          <div className="container mt-10 border-t border-border py-6 text-center text-sm text-muted-foreground">
            © 2025 JUNIMETAL DEVELOPMENT. {t.footer.allRightsReserved}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
