import React, { useEffect } from "react";
import { translations, type Language } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Download, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import flanges from "@/assets/flanges7.png";
import flanges_webp from "@/assets/flanges7_webp.webp";

interface FlangesProps {
  language?: Language;
}

const Flanges: React.FC<FlangesProps> = ({ language = "en" }) => {
  const t = translations[language];

  useEffect(() => {
    document.title = `${t.products.flanges.title} - JUNIMETAL DEVELOPMENT`;
    
    const setMeta = (selector: string, attr: "name" | "property", content: string) => {
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attr}='${selector}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, selector);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMeta("description", "name", t.products.flanges.description);
  }, [language, t]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-lg font-semibold tracking-wide">
              JUNIMETAL DEVELOPMENT
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm">
              <a href="tel:+82-2-123-4567">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">{t.products.flanges.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {t.products.flanges.subtitle}
              </p>
              <p className="text-muted-foreground mb-8">
                {t.products.flanges.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-sidebar-primary hover:bg-sidebar-primary/90">
                  <Mail className="h-4 w-4 mr-2" />
                  {t.products.requestQuote}
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  {t.products.downloadDatasheet}
                </Button>
              </div>
            </div>
            <div className="relative">
              <picture>
                <source srcSet={flanges_webp} type="image/webp" />
                <img
                  src={flanges}
                  alt="High-performance flanges for critical industrial applications"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </picture>
            </div>
          </div>
        </section>

        {/* Specifications Table */}
        <section className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">{t.products.specifications}</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Parameter</TableHead>
                    <TableHead className="font-semibold">Specification</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">{t.products.materials}</TableCell>
                    <TableCell>{t.products.flanges.specifications.materials.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t.products.sizes}</TableCell>
                    <TableCell>{t.products.flanges.specifications.sizes.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t.products.pressureClass}</TableCell>
                    <TableCell>{t.products.flanges.specifications.pressureRating.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t.products.standards}</TableCell>
                    <TableCell>{t.products.flanges.specifications.standards.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Types</TableCell>
                    <TableCell>{t.products.flanges.specifications.types.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Facing</TableCell>
                    <TableCell>{t.products.flanges.specifications.facing.join(", ")}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
        </section>

        {/* Applications and Features */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t.products.applications}</h3>
              <div className="flex flex-wrap gap-2">
                {t.products.flanges.applications.map((app, index) => (
                  <Badge key={index} variant="secondary">{app}</Badge>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t.products.features}</h3>
              <ul className="space-y-2">
                {t.products.flanges.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-sidebar-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Standards Comparison */}
        <section className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">International Standards Compliance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">ANSI/ASME</h3>
                <p className="text-sm text-muted-foreground mb-2">B16.5, B16.47 Series A & B</p>
                <p className="text-xs text-muted-foreground">American standard for pipe flanges</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">DIN/EN</h3>
                <p className="text-sm text-muted-foreground mb-2">EN 1092-1, DIN 2633</p>
                <p className="text-xs text-muted-foreground">European standard specifications</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">JIS</h3>
                <p className="text-sm text-muted-foreground mb-2">JIS B2220</p>
                <p className="text-xs text-muted-foreground">Japanese Industrial Standard</p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-sidebar-primary/10 to-sidebar-primary/5">
            <h2 className="text-2xl font-semibold mb-4">Need Subsea-Qualified Flanges?</h2>
            <p className="text-muted-foreground mb-6">
              We specialize in subsea and high-pressure applications with full material traceability and testing.
            </p>
            <Button size="lg" className="bg-sidebar-primary hover:bg-sidebar-primary/90">
              <Mail className="h-4 w-4 mr-2" />
              {t.products.requestQuote}
            </Button>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Flanges;