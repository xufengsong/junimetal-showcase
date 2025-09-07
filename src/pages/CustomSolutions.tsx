import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Download, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import custom4 from "@/assets/custom4.png";
import custom4_webp from "@/assets/custom4_webp.webp";

const CustomSolutions = () => {
  useEffect(() => {
    document.title = "Custom Solutions - JUNIMETAL DEVELOPMENT";
    
    const setMeta = (selector: string, attr: "name" | "property", content: string) => {
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attr}='${selector}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, selector);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMeta("description", "name", "Custom engineering solutions and specialized piping components designed to meet unique project requirements.");
  }, []);

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
              <h1 className="text-4xl font-bold mb-4">Custom Solutions</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Engineered solutions for unique project requirements
              </p>
              <p className="text-muted-foreground mb-8">
                Our engineering team specializes in developing custom piping solutions, special forgings, and unique components tailored to your specific project needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Mail className="h-4 w-4 mr-2" />
                  Request a Quote for This Product
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Engineering Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <picture>
                <source srcSet={custom4_webp} type="image/webp" />
                <img
                  src={custom4}
                  alt="Custom engineered solutions and special forgings"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </picture>
            </div>
          </div>
        </section>

        {/* Specifications Table */}
        <section className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Capabilities & Services</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Service</TableHead>
                    <TableHead className="font-semibold">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Materials</TableCell>
                    <TableCell>Stainless Steel, Carbon Steel, Duplex, Super Duplex, Nickel Alloys</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Standards</TableCell>
                    <TableCell>ASME, ASTM, API, ISO, EN, JIS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Services</TableCell>
                    <TableCell>Design, Engineering, Manufacturing, Testing, Certification</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Applications</TableCell>
                    <TableCell>Oil & Gas, Chemical Processing, Power Generation, Marine, Industrial</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
        </section>

        {/* Engineering Process */}
        <section className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Our Engineering Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">1</div>
                <h3 className="font-semibold mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">Understanding your specific requirements and constraints</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">2</div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">Engineering design with 3D modeling and stress analysis</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">3</div>
                <h3 className="font-semibold mb-2">Prototype</h3>
                <p className="text-sm text-muted-foreground">Rapid prototyping and testing validation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">4</div>
                <h3 className="font-semibold mb-2">Production</h3>
                <p className="text-sm text-muted-foreground">Full-scale manufacturing with quality control</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Custom Projects Examples */}
        <section className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Custom Project Examples</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Buckle Arrestors</h3>
                <p className="text-sm text-muted-foreground">
                  Custom designed buckle arrestors for subsea pipeline protection
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Special Tees</h3>
                <p className="text-sm text-muted-foreground">
                  Barred tees and custom angle configurations for unique applications
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Hanger Flanges</h3>
                <p className="text-sm text-muted-foreground">
                  Custom hanger flanges with specific load requirements
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5">
            <h2 className="text-2xl font-semibold mb-4">Have a Unique Challenge?</h2>
            <p className="text-muted-foreground mb-6">
              Our engineering team thrives on solving complex problems. Let's discuss your custom requirements and develop the perfect solution.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Mail className="h-4 w-4 mr-2" />
              Start Engineering Consultation
            </Button>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default CustomSolutions;