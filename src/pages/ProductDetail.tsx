import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Download, FileText, Mail } from "lucide-react";
import { translations } from "@/utils/translations";
import { productDetails } from "@/data/productDetails"; 

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>(); // Added type for clarity
  const [language, setLanguage] = useState<'en' | 'zh' | 'es' | 'ru'>('en');
  const t = translations[language];

  // --- MODIFICATION 2: Get product data from the imported object ---
  const product = productDetails[productId || ""] || {
    name: "Product Not Found",
    category: "Unknown",
    description: "The product details you are looking for are not available.",
    applications: [],
    chemicalComposition: {},
    specifications: [],
    forms: [],
    standards: [],
    sizes: ""
  };

  // Helper function to render the chemical composition table, handling nested objects
  const renderChemicalComposition = (composition: Record<string, any>) => {
    return Object.entries(composition).map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        return (
          <>
            <TableRow key={key} className="bg-muted/50">
              <TableCell colSpan={2} className="font-semibold text-primary">{key}</TableCell>
            </TableRow>
            {renderChemicalComposition(value)}
          </>
        );
      }
      return (
        <TableRow key={key}>
          <TableCell className="font-medium">{key}</TableCell>
          <TableCell>{String(value)}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation (Assumed to be correct) */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              JMDU
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

      {/* Product Content */}
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
              {product.applications && product.applications.length > 0 && (
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
              )}

              {/* Chemical Composition */}
              {product.chemicalComposition && Object.keys(product.chemicalComposition).length > 0 && (
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
                        {renderChemicalComposition(product.chemicalComposition)}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}

              {/* {product.specifications && product.specifications.length > 0 ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Form</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Schedule / Rating</TableHead>
                          <TableHead>Standard</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {product.specifications.map((spec: any, index: number) => (
                          <TableRow key={index}>
                            <TableCell>{spec.form}</TableCell>
                            <TableCell>{spec.size}</TableCell>
                            <TableCell>{spec.schedule_rating}</TableCell>
                            <TableCell>{spec.standard}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              ) : (
                // Fallback for products like Duplex 2205 that use a different structure
                product.standards && product.standards.length > 0 && (
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
                )
              )} */}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Forms Available - Renders based on 'forms' or inferred from 'specifications' */}
              {((product.forms && product.forms.length > 0) || (product.specifications && product.specifications.length > 0)) && (
                <Card>
                  <CardHeader>
                    <CardTitle>Forms in Stock</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {/* Use unique forms from specifications if available, otherwise use product.forms */}
                      {(product.specifications && product.specifications.length > 0 
                        ? [...new Set(product.specifications.map((spec: any) => spec.form))]
                        : product.forms
                      ).map((form: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-foreground/80">{form}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Size Range */}
              {product.sizes && (
                <Card>
                  <CardHeader>
                    <CardTitle>Size Range</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{product.sizes}</p>
                  </CardContent>
                </Card>
              )}

              {/* Downloads & CTA (Assumed to be correct) */}
              {/* <Card>
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
              </Card> */}

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardHeader>
                  <CardTitle>Request Quote</CardTitle>
                  <CardDescription>
                    Get pricing and availability for this product
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4"/>
                    <a href="mailto:jmd@jmd.by-works.com">Request a Quote</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Assumed to be correct) */}
      <footer className="bg-background/95 border-t border-border/40 py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">JMDU</h3>
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
                <p>Email: jmd@jmd.by-works.com</p>
                <p>Phone: +82-10-7624-7557</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center">
            <p className="text-foreground/60 text-sm">
              © 2025 JMDU. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;