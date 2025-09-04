import React, { useEffect } from "react";
import { translations, type Language } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Download, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import pipe6 from "@/assets/pipe6.png";
import pipe6_webp from "@/assets/pipe6_webp.webp";
import pipe3 from "@/assets/pipe3.png";
import pipeAndTube from "@/assets/pipeAndTube.png";

interface PipesTubesProps {
  language?: Language;
}

const PipesTubes: React.FC<PipesTubesProps> = ({ language = "en" }) => {
  const t = translations[language];

  useEffect(() => {
    document.title = `${t.products.pipestubes.title} - JUNIMETAL DEVELOPMENT`;
    
    const setMeta = (selector: string, attr: "name" | "property", content: string) => {
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attr}='${selector}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, selector);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMeta("description", "name", t.products.pipestubes.description);
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
              <h1 className="text-4xl font-bold mb-4">{t.products.pipestubes.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {t.products.pipestubes.subtitle}
              </p>
              <p className="text-muted-foreground mb-8">
                {t.products.pipestubes.description}
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
                <source srcSet={pipe6_webp} type="image/webp" />
                <img
                  src={pipe6}
                  alt="High-quality pipes and tubes for industrial applications"
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
                    <TableCell>{t.products.pipestubes.specifications.materials.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Diameters</TableCell>
                    <TableCell>{t.products.pipestubes.specifications.diameters.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t.products.pressureClass}</TableCell>
                    <TableCell>{t.products.pipestubes.specifications.pressureRating.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t.products.standards}</TableCell>
                    <TableCell>{t.products.pipestubes.specifications.standards.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Wall Thickness</TableCell>
                    <TableCell>{t.products.pipestubes.specifications.wallThickness.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lengths</TableCell>
                    <TableCell>{t.products.pipestubes.specifications.lengths.join(", ")}</TableCell>
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
                {t.products.pipestubes.applications.map((app, index) => (
                  <Badge key={index} variant="secondary">{app}</Badge>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t.products.features}</h3>
              <ul className="space-y-2">
                {t.products.pipestubes.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-sidebar-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Additional Images Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Product Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src={pipe3}
              alt="Various pipe specifications and sizes"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src={pipeAndTube}
              alt="Pipe and tube inventory"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <div className="flex items-center justify-center bg-muted rounded-lg h-48">
              <span className="text-muted-foreground">Additional Product Images</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-sidebar-primary/10 to-sidebar-primary/5">
            <h2 className="text-2xl font-semibold mb-4">Ready to Order?</h2>
            <p className="text-muted-foreground mb-6">
              Contact our team for detailed specifications, pricing, and delivery information.
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

export default PipesTubes;