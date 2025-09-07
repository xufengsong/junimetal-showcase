import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Download, FileText, Mail } from "lucide-react";
import { translations } from "@/utils/translations";

const ProductDetail = () => {
  const { categoryId, productId } = useParams();
  const [language, setLanguage] = useState<'en' | 'zh' | 'ko' | 'ja'>('en');
  const t = translations[language];

  // Product data based on URL params
  const getProductData = () => {
    const productData: Record<string, any> = {
      "304-304h": {
        name: "304/304H",
        category: "Stainless Steels",
        description: "304/304H is the most widely used austenitic stainless steel. It provides excellent corrosion resistance, formability, and weldability. The 304H variant offers higher carbon content for improved high-temperature strength.",
        applications: ["Food processing equipment", "Chemical processing", "Architectural applications", "Kitchen equipment", "Heat exchangers"],
        chemicalComposition: {
          C: "0.08 max (304) / 0.04-0.10 (304H)",
          Mn: "2.00 max",
          P: "0.045 max",
          S: "0.030 max",
          Si: "0.75 max",
          Cr: "18.0-20.0",
          Ni: "8.0-10.5",
          N: "0.10 max"
        },
        standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASME SA312", "ASME SA213"],
        forms: ["Seamless Pipe", "Welded Pipe", "Seamless Tube", "Welded Tube", "Fittings", "Flanges"],
        sizes: "1/8\" to 24\" NPS for pipes, 1/8\" to 8\" OD for tubes"
      },
      "310s-310h": {
        name: "310S/310H",
        category: "Stainless Steels", 
        description: "310S/310H is a high-temperature resistant austenitic stainless steel with excellent oxidation resistance up to 2100°F (1150°C). The low carbon 310S provides better corrosion resistance while 310H offers superior high-temperature strength.",
        applications: ["Furnace parts", "Heat exchangers", "Kilns", "Gas turbine components", "Petrochemical processing"],
        chemicalComposition: {
          C: "0.08 max (310S) / 0.04-0.10 (310H)",
          Mn: "2.00 max",
          P: "0.045 max", 
          S: "0.030 max",
          Si: "1.50 max",
          Cr: "24.0-26.0",
          Ni: "19.0-22.0",
          N: "0.25 max"
        },
        standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASME SA312", "ASME SA213"],
        forms: ["Seamless Pipe", "Welded Pipe", "Seamless Tube", "Welded Tube", "Fittings", "Flanges"],
        sizes: "1/8\" to 12\" NPS for pipes, 1/8\" to 6\" OD for tubes"
      },
      "inconel-625": {
        name: "Inconel® 625",
        category: "Nickel Alloys",
        description: "Inconel® 625 is a nickel-chromium-molybdenum alloy with excellent fatigue strength and oxidation resistance up to 1800°F (980°C). It offers outstanding resistance to a wide range of corrosive environments.",
        applications: ["Aerospace components", "Chemical processing", "Marine applications", "Nuclear reactors", "Gas turbine engines"],
        chemicalComposition: {
          C: "0.10 max",
          Mn: "0.50 max",
          P: "0.015 max",
          S: "0.015 max", 
          Si: "0.50 max",
          Cr: "20.0-23.0",
          Ni: "58.0 min",
          Mo: "8.0-10.0",
          Nb: "3.15-4.15",
          Fe: "5.0 max"
        },
        standards: ["ASTM B444", "ASTM B446", "ASTM B564", "ASME SB444", "ASME SB446"],
        forms: ["Seamless Pipe", "Welded Pipe", "Seamless Tube", "Welded Tube", "Fittings", "Flanges"],
        sizes: "1/8\" to 8\" NPS for pipes, 1/8\" to 4\" OD for tubes"
      }
      // Add more products as needed
    };

    return productData[productId || ""] || {
      name: "Product Not Found",
      category: "Unknown",
      description: "Product details not available.",
      applications: [],
      chemicalComposition: {},
      standards: [],
      forms: [],
      sizes: ""
    };
  };

  const product = getProductData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              JUNIMETAL DEVELOPMENT
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                {t.nav.aboutUs}
              </Link>
              <Link to="/products" className="text-primary font-medium">
                {t.nav.products}
              </Link>
              <Link to="/#expertise" className="text-foreground/80 hover:text-foreground transition-colors">
                {t.nav.ourExpertise}
              </Link>
              <Link to="/#contact" className="text-foreground/80 hover:text-foreground transition-colors">
                {t.nav.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-foreground/60">
          <Link to="/products" className="hover:text-foreground transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/products">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Applications */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Typical Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.applications.map((app: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground/80">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Chemical Composition */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Chemical Composition (%)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Element</TableHead>
                        <TableHead>Composition</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Object.entries(product.chemicalComposition).map(([element, composition]) => (
                        <TableRow key={element}>
                          <TableCell className="font-medium">{element}</TableCell>
                          <TableCell>{composition}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Standards */}
              <Card>
                <CardHeader>
                  <CardTitle>Standards & Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {product.standards.map((standard: string, index: number) => (
                      <Badge key={index} variant="outline">
                        {standard}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Forms Available */}
              <Card>
                <CardHeader>
                  <CardTitle>Forms in Stock</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.forms.map((form: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-foreground/80">{form}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Size Range */}
              <Card>
                <CardHeader>
                  <CardTitle>Size Range</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{product.sizes}</p>
                </CardContent>
              </Card>

              {/* Downloads */}
              <Card>
                <CardHeader>
                  <CardTitle>Downloads</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Product Datasheet
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Specifications PDF
                  </Button>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardHeader>
                  <CardTitle>Request Quote</CardTitle>
                  <CardDescription>
                    Get pricing and availability for this product
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Request a Quote for This Product
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background/95 border-t border-border/40 py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">JUNIMETAL DEVELOPMENT</h3>
              <p className="text-foreground/70 text-sm">
                Trusted global distributor of high value-added industrial products made from advanced stainless steels and special alloys.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-foreground/70 hover:text-foreground transition-colors text-sm">
                  {t.nav.aboutUs}
                </Link>
                <Link to="/products" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                  {t.nav.products}
                </Link>
                <Link to="/#expertise" className="block text-foreground/70 hover:text-foreground transition-colors text-sm">
                  {t.nav.ourExpertise}
                </Link>
                <Link to="/#contact" className="block text-foreground/70 hover:text-foreground transition-colors text-sm">
                  {t.nav.contactUs}
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-md font-semibold text-foreground mb-4">Products</h4>
              <div className="space-y-2">
                <Link to="/products#stainless-steels" className="block text-foreground/70 hover:text-foreground transition-colors text-sm">
                  Stainless Steels
                </Link>
                <Link to="/products#specialty-alloys" className="block text-foreground/70 hover:text-foreground transition-colors text-sm">
                  Specialty Alloys
                </Link>
                <Link to="/products#nickel-alloys" className="block text-foreground/70 hover:text-foreground transition-colors text-sm">
                  Nickel Alloys
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-md font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-foreground/70">
                <p>Seoul & Busan, South Korea</p>
                <p>Email: info@junimetal.com</p>
                <p>Phone: +82-2-XXXX-XXXX</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center">
            <p className="text-foreground/60 text-sm">
              © 2024 JUNIMETAL DEVELOPMENT. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;