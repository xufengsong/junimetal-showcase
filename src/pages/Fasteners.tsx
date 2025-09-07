import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import valves3 from "@/assets/valves3.png";
import valves3_webp from "@/assets/valves3_webp.webp";

const Fasteners = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-lg font-semibold tracking-wide">JUNIMETAL DEVELOPMENT</span>
          </Link>
        </nav>
      </header>
      <main className="container py-8">
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Fasteners, Gaskets & Valves</h1>
              <p className="text-xl text-muted-foreground mb-6">Complete piping system accessories</p>
              <p className="text-muted-foreground mb-8">High-quality fasteners, gaskets, and valves to complete your piping systems.</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4 mr-2" />Request a Quote for This Product
              </Button>
            </div>
            <div className="relative">
              <picture>
                <source srcSet={valves3_webp} type="image/webp" />
                <img src={valves3} alt="Industrial valves and fasteners" className="w-full h-auto rounded-lg shadow-lg" />
              </picture>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Specifications</h2>
            <Table>
              <TableHeader>
                <TableRow><TableHead>Property</TableHead><TableHead>Specification</TableHead></TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell className="font-medium">Fasteners</TableCell><TableCell>Bolts, Nuts, Washers - ASTM A193, A194, A320</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">Gaskets</TableCell><TableCell>Spiral Wound, RTJ, PTFE - ASME B16.20</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">Valves</TableCell><TableCell>Ball, Gate, Globe, Check - API 6D, API 602</TableCell></TableRow>
              </TableBody>
            </Table>
          </Card>
        </section>
      </main>
    </div>
  );
};
export default Fasteners;