import React, { useEffect } from "react";
import { translations, type Language } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Download, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import fittings from "@/assets/fittings3.png";
import fittings_webp from "@/assets/fittings3_webp.webp";

interface FittingsProps {
  language?: Language;
}

const Fittings: React.FC<FittingsProps> = ({ language = "en" }) => {
  const t = translations[language];

  useEffect(() => {
    document.title = `${t.products.fittings.title} - JUNIMETAL DEVELOPMENT`;
    
    const setMeta = (selector: string, attr: "name" | "property", content: string) => {
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attr}='${selector}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, selector);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMeta("description", "name", t.products.fittings.description);
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
              <h1 className="text-4xl font-bold mb-4">{t.products.fittings.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {t.products.fittings.subtitle}
              </p>
              <p className="text-muted-foreground mb-8">
                {t.products.fittings.description}
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
                <source srcSet={fittings_webp} type="image/webp" />
                <img
                  src={fittings}
                  alt="Precision-engineered pipe fittings for industrial applications"
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
                    <TableCell>{t.products.fittings.specifications.materials.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t.products.sizes}</TableCell>
                    <TableCell>{t.products.fittings.specifications.sizes.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t.products.pressureClass}</TableCell>
                    <TableCell>{t.products.fittings.specifications.pressureRating.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t.products.standards}</TableCell>
                    <TableCell>{t.products.fittings.specifications.standards.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Types</TableCell>
                    <TableCell>{t.products.fittings.specifications.types.join(", ")}</TableCell>
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
                {t.products.fittings.applications.map((app, index) => (
                  <Badge key={index} variant="secondary">{app}</Badge>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t.products.features}</h3>
              <ul className="space-y-2">
                {t.products.fittings.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-sidebar-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Types of Fittings */}
        <section className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Types of Fittings Available</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.products.fittings.specifications.types.map((type, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">{type}</h3>
                  <p className="text-sm text-muted-foreground">
                    Available in all materials and pressure ratings
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-sidebar-primary/10 to-sidebar-primary/5">
            <h2 className="text-2xl font-semibold mb-4">Need Custom Fittings?</h2>
            <p className="text-muted-foreground mb-6">
              Our engineering team can design and manufacture custom fittings to meet your specific requirements.
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

export default Fittings;