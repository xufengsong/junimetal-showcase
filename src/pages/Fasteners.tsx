import React, { useEffect } from "react";
import { translations, type Language } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Download, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import valves from "@/assets/valves3.png";
import valves_webp from "@/assets/valves3_webp.webp";

interface FastenersProps {
  language?: Language;
}

const Fasteners: React.FC<FastenersProps> = ({ language = "en" }) => {
  const t = translations[language];

  useEffect(() => {
    document.title = `${t.products.fasteners.title} - JUNIMETAL DEVELOPMENT`;
    
    const setMeta = (selector: string, attr: "name" | "property", content: string) => {
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attr}='${selector}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, selector);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMeta("description", "name", t.products.fasteners.description);
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
              <h1 className="text-4xl font-bold mb-4">{t.products.fasteners.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {t.products.fasteners.subtitle}
              </p>
              <p className="text-muted-foreground mb-8">
                {t.products.fasteners.description}
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
                <source srcSet={valves_webp} type="image/webp" />
                <img
                  src={valves}
                  alt="Industrial valves, fasteners and gaskets for complete piping solutions"
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
                    <TableHead className="font-semibold">Component</TableHead>
                    <TableHead className="font-semibold">Specification</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Fastener Materials</TableCell>
                    <TableCell>{t.products.fasteners.specifications.fastenerMaterials.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Gasket Types</TableCell>
                    <TableCell>{t.products.fasteners.specifications.gasketTypes.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Valve Types</TableCell>
                    <TableCell>{t.products.fasteners.specifications.valveTypes.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t.products.standards}</TableCell>
                    <TableCell>{t.products.fasteners.specifications.standards.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t.products.sizes}</TableCell>
                    <TableCell>{t.products.fasteners.specifications.sizes.join(", ")}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
        </section>

        {/* Product Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Product Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Fasteners</h3>
              <ul className="space-y-2 text-sm">
                <li>• High-tensile bolts</li>
                <li>• Stud bolts & nuts</li>
                <li>• Machine screws</li>
                <li>• Washers & threaded rod</li>
                <li>• Custom fasteners</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Gaskets</h3>
              <ul className="space-y-2 text-sm">
                <li>• Spiral wound gaskets</li>
                <li>• RTJ ring gaskets</li>
                <li>• Sheet gaskets</li>
                <li>• O-rings & seals</li>
                <li>• Custom gasket solutions</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Valves</h3>
              <ul className="space-y-2 text-sm">
                <li>• Ball valves</li>
                <li>• Gate valves</li>
                <li>• Globe valves</li>
                <li>• Check valves</li>
                <li>• Butterfly valves</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Applications and Features */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t.products.applications}</h3>
              <div className="flex flex-wrap gap-2">
                {t.products.fasteners.applications.map((app, index) => (
                  <Badge key={index} variant="secondary">{app}</Badge>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t.products.features}</h3>
              <ul className="space-y-2">
                {t.products.fasteners.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-sidebar-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-sidebar-primary/10 to-sidebar-primary/5">
            <h2 className="text-2xl font-semibold mb-4">Complete System Solutions</h2>
            <p className="text-muted-foreground mb-6">
              Let us provide a complete package of fasteners, gaskets, and valves for your project - saving time and ensuring compatibility.
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

export default Fasteners;