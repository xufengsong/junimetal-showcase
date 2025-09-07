import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { translations } from "@/utils/translations";
import { productCategories } from "@/data/productCategories";

const Products = () => {
  const [language, setLanguage] = useState<'en' | 'zh' | 'es' | 'ru'>('en');
  const t = translations[language];

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
              <div className="flex items-center space-x-2">
                <Button
                  variant={language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                >
                  EN
                </Button>
                <Button
                  variant={language === 'zh' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('zh')}
                >
                  中文
                </Button>
                <Button
                  variant={language === 'es' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('es')}
                >
                  ES
                </Button>
                <Button
                  variant={language === 'ru' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('ru')}
                >
                  RU
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Products
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Premium industrial materials for demanding applications. Our comprehensive catalog includes 
              stainless steels, specialty alloys, and nickel-based materials.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {productCategories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {category.name}
                </h2>
                <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {category.name.split(' ')[0]}
                        </Badge>
                      </div>
                      <CardDescription className="text-foreground/70">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm text-foreground/60">
                          Available forms:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">Pipe</Badge>
                          <Badge variant="outline" className="text-xs">Tube</Badge>
                          <Badge variant="outline" className="text-xs">Fittings</Badge>
                          <Badge variant="outline" className="text-xs">Flanges</Badge>
                        </div>
                        <Link to={`/products/${category.id}/${product.id}`}>
                          <Button className="w-full mt-4 group">
                            View Details
                            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our engineering team can develop custom alloy solutions 
            tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products/custom-solutions">
              <Button size="lg" className="min-w-[200px]">
                Custom Solutions
              </Button>
            </Link>
            <Link to="/#contact">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Contact Engineering
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background/95 border-t border-border/40 py-12 px-4">
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
                <p>Email: jmd@jmd.by-works.com</p>
                <p>Phone: +82-2-XXXX-XXXX</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center">
            <p className="text-foreground/60 text-sm">
              © 2025 JUNIMETAL DEVELOPMENT. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;