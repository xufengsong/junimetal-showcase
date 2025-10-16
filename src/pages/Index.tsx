import React, { useEffect, useState } from "react";
import { translations, type Language } from "@/utils/translations";
import heroImage from "@/assets/hero-industrial-night.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Mail } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"

// Import the shadcn/ui Carousel components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel" // Adjust path if needed

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
import { productDetails } from "@/data/productDetails";


const Index = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Gwangnaru-ro+323,Seongdong-gu,Seoul`;
  const cdn = import.meta.env.VITE_CDN_URL
  const [language, setLanguage] = useState<Language>("en");

  const [imageFiles, setImageFiles] = useState<string[]>([]);
  
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
      name: "JMDU",
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

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // The endpoint is relative to your project root
        const response = await fetch('/api/list-images'); 
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        console.log(response)
        const data: string[] = await response.json();
        setImageFiles(data); // Update the state with the fetched names
      } catch (error) {
        console.error("Error fetching image list:", error);
        // Optional: You could set an error state here
      }
    };

    fetchImages();
  }, []);

  const navItems = [
    { href: "#works", label: t.nav.ourWork },
    { href: "#about", label: t.nav.aboutUs },
    { href: "#products", label: t.nav.products },
    { href: "#expertise", label: t.nav.ourExpertise },
    // { href: "#visits", label: t.visits.title },
    { href: "#contact", label: t.nav.contactUs },
  ];

  const image_files = [
    "tube",
    "tube1",
    "tube2",
    "tube3",
    "tube4",
    "tube5",
    "tube6",
    "tube7",
    "tube8",
    "tube9",
    "tube10",
    "tube11",
    "tube12",
    "tube13",
    "tube14",
    "tube15",
    "tube16",
    "tube17",
    "tube18",
    "tube19",
    "tube20",
    "tube21",
    "tube22",
    "tube23",
    "tube24",
    "tube25",
    "tube26",
    "tube27",
    "tube28",
    "tube29",
    "tube30",
    "tube31",
    "tube32",
    "tube33",
    "tube34",
    "tube35",
    "tube36",
    "tube37",
    "tube38",
    "tube39",
    "tube40",
    "tube41",
    "tube43",
    "tube44",
    "tube45",
    "tube46",
    "tube47",
    "tube48",
    "tube49",
    "tube50",
    "tube51",
    "tube52",
    "tube53",
    "tube54",
    "tube55",
    "tube56",
    "tube57",
    "tube58",
    "tube59",
    "tube60",
    "tube61",
    "tube62",
    "tube63",
    "tube64",
    "tube65",
    "tube66",
    "tube67",
    "tube68",
    "tube69",
    "tube70",
    "tube71",
    "tube72",
    "tube73",
    "tube74",
    "tube75",
    "tube76",
    "tube77",
    "tube78",
    "tube79",
    "coil",
    "coil1",
    "coil2",
    "show_fittings",
    "show_fittings2",
    "show_fittings3",
    "show_fittings4",
    "show_fittings5",
    "show_fittings6",
    "show_fittings7",
    "show_fittings8",
    "show_fittings9",
    "show_fittings10",
    "show_fittings11",
    "show_fittings12",
    "show_fittings13",
    "big",
    "big2",
    "big3",
    "big4",
    "big5",
    "big6",
    "show_flanges",
    "show_f",
    "heat_exchange",
    "helium_button",
  ]


  const plugin = React.useRef(
    Autoplay({
      delay: 1000,
      stopOnInteraction: true,
    })
  )

  const [api, setApi] = React.useState<CarouselApi>()

  // React.useEffect(() => {
  //   if (!api) {
  //     return
  //   }

  //   api.plugins().autoplay?.play()

  // }, [api])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
        {t.hero.skipToContent}
      </a>

      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <span 
              className="text-xl md:text-2xl lg:text-3xl font-bold text-primary cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              JMDU
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
            <h1 style={{fontSize: '120px'}} className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              {t.hero.title}
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button asChild variant="accent" size="xl">
                <a href="#products">{t.hero.exploreOfferings}</a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#contact">{t.hero.getInTouch}</a>
              </Button>
            </div>
          </div>
        </section>

        <section id='works' className="scroll-mt-24 border-t border-border py-16 md:py-24 bg-gradient-to-br from-background to-background/50">
          <div className="container">
            {/* 1. Add event handlers to the carousel's wrapper div 👇 */}
            <div 
              className="w-full max-w-full mx-auto"
              onMouseEnter={() => api?.plugins().autoplay?.stop()}
              onMouseLeave={() => api?.plugins().autoplay?.play()}
            >
              <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-6">
                  {imageFiles.map((k, i) => (
                    <CarouselItem key={i} className="pl-6 basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                      <div className="overflow-hidden aspect-[16/10]">
                        <picture>
                          <source srcSet={`${cdn}/${k}`} type="image/webp"></source>
                          <img
                            src={`${cdn}/${k}.jpg`}
                            alt={`Site ${i + 1}`}
                            loading={i < 6 ? "eager" : "lazy"} // Eager load the first 3, lazy load the rest
                            decoding="async" // Helps the browser render the page faster
                            className="h-full w-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"                             
                          />
                        </picture>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
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
              { t.products.title }
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              { t.products.subtitle }
            </p>

            {/* 2. Map over the productDetails object */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(productDetails).map(([key, product]) => (
                <Card
                  key={key}
                  className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* 1. Make the CardHeader the main container for the top row */}
                  <CardHeader className="flex flex-row items-start justify-between gap-4">
                    {/* Title on the left */}
                    <CardTitle className="leading-tight">{product.name}</CardTitle>

                    {/* 2. Actions block is now inside the header, on the right */}
                    <div className="flex flex-col items-end flex-shrink-0">
                      <Badge variant="secondary" className="text-xs mb-4">
                        {product.category.split(" ")[0]}
                      </Badge>
                      <Button asChild>
                        <Link to={`/products/${product.category}/${key}`}>
                          { t.products.viewDetails }
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  
                  {/* CardContent is now optional, for extra info like a description */}
                  {/* <CardContent>
                      <p>Optional description here...</p>
                  </CardContent> */}
                </Card>
            ))}
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
        {/* <section id='visits' className="scroll-mt-24 border-t border-border py-16 md:py-24 bg-gradient-to-br from-background to-background/50">
          <div className="container">
            <header className="mb-10 text-center">
              <h2 className="text-3xl font-semibold md:text-4xl mb-4">{t.visits.title}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.visits.subtitle}</p>
            </header> */}

            {/* Previous Visits Carousel */}
            {/* <div className="mb-12">
              <h3 className="text-xl font-medium mb-6 text-center">{t.visits.visitsCarousel}</h3>
              <div className="relative overflow-hidden rounded-lg bg-card/20 backdrop-blur-sm p-4">
                <div className="flex animate-scroll-left space-x-6 will-change-transform">
                  {show_image.map((k, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-80 h-48 bg-gradient-to-br from-muted/50 to-muted/20 rounded-lg border border-border/50 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                    >
                      <div className="text-center p-4">
                          <img
                            src={k}
                            className="h-full w-full"
                          />
                        <h4 className="text-sm font-medium">Site Visit {i + 1}</h4>
                        <p className="text-xs text-muted-foreground mt-1">Industrial Facility</p>
                      </div>
                    </div>
                  ))} */}
                  {/* Duplicate for seamless loop */}
                  {/* {[...Array(12)].map((_, i) => (
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
            </div> */}

            {/* Partner Companies Carousel */}
            {/* <div>
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
                  ))} */}
                  {/* Duplicate for seamless loop */}
                  {/* {['Total', 'Chevron', 'Saipem', 'Subsea 7', 'Technip', 'Shell', 'BP', 'Equinor', 'Petrobras', 'TechnipFMC', 'Aker Solutions', 'McDermott'].map((company, i) => (
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
        </section> */}

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
                  {/* <Mail className="mr-2 h-4 w-4"/> */}
                  <a href="mailto:jmd@jmd.by-works.com">jmd@jmd.by-works.com</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#products">{t.hero.exploreOfferings}</a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">{t.contact.offices.shanghai.title}</h3>
              <address className="not-italic text-sm text-muted-foreground">
                {t.contact.offices.shanghai.address}
              </address>
              <h3 className="mb-3 mt-6 text-lg font-medium">{t.contact.offices.seoul.title}</h3>
              <address className="not-italic text-sm text-muted-foreground">
                {t.contact.offices.seoul.address}
              </address>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">{t.footer.office_location}</h3>
              <div className="overflow-hidden rounded-md border">
              <iframe
                title="Map of JMDU Seoul Office"
                src={ mapUrl } 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full"
              />
              </div>
            </div>
          </div>
          <div className="container mt-10 border-t border-border py-6 text-center text-sm text-muted-foreground">
            © 2025 JMDU. {t.footer.allRightsReserved}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
