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

import show_tube from "@/assets/tube.jpg";
import show_tube1 from "@/assets/tube1.jpg";
import show_tube2 from "@/assets/tube2.jpg";
import show_tube3 from "@/assets/tube3.jpg";
import show_tube4 from "@/assets/tube4.jpg";
import show_tube5 from "@/assets/tube5.jpg";
import show_tube6 from "@/assets/tube6.jpg";
import show_tube7 from "@/assets/tube7.jpg";
import show_tube8 from "@/assets/tube8.jpg";
import show_tube9 from "@/assets/tube9.jpg";
import show_tube10 from "@/assets/tube10.jpg";
import show_tube11 from "@/assets/tube11.jpg";
import show_tube12 from "@/assets/tube12.jpg";
import show_tube13 from "@/assets/tube13.jpg";
import show_tube14 from "@/assets/tube14.jpg";
import show_tube15 from "@/assets/tube15.jpg";
import show_tube16 from "@/assets/tube16.jpg";
import show_tube17 from "@/assets/tube17.jpg";
import show_tube18 from "@/assets/tube18.jpg";
import show_tube19 from "@/assets/tube19.jpg";
import show_tube20 from "@/assets/tube20.jpg";
import show_tube21 from "@/assets/tube21.jpg";
import show_tube22 from "@/assets/tube22.jpg";
import show_tube23 from "@/assets/tube23.jpg";
import show_tube24 from "@/assets/tube24.jpg";
import show_tube25 from "@/assets/tube25.jpg";
import show_tube26 from "@/assets/tube26.jpg";
import show_tube27 from "@/assets/tube27.jpg";
import show_tube28 from "@/assets/tube28.jpg";
import show_tube29 from "@/assets/tube29.jpg";
import show_tube30 from "@/assets/tube30.jpg";
import show_tube31 from "@/assets/tube31.jpg";
import show_tube32 from "@/assets/tube32.jpg";
import show_tube33 from "@/assets/tube33.jpg";
import show_tube34 from "@/assets/tube34.jpg";
import show_tube35 from "@/assets/tube35.jpg";
import show_tube36 from "@/assets/tube36.jpg";
import show_tube37 from "@/assets/tube37.jpg";
import show_tube38 from "@/assets/tube38.jpg";
import show_tube39 from "@/assets/tube39.jpg";
import show_tube40 from "@/assets/tube40.jpg";
import show_tube41 from "@/assets/tube41.jpg";
import show_tube42 from "@/assets/tube42.jpg";
import show_tube43 from "@/assets/tube43.jpg";
import show_tube44 from "@/assets/tube44.jpg";
import show_tube45 from "@/assets/tube45.jpg";
import show_tube46 from "@/assets/tube46.jpg";
import show_tube47 from "@/assets/tube47.jpg";
import show_tube48 from "@/assets/tube48.jpg";
import show_tube49 from "@/assets/tube49.jpg";
import show_tube50 from "@/assets/tube50.jpg";
import show_tube51 from "@/assets/tube51.jpg";
import show_tube52 from "@/assets/tube52.jpg";
import show_tube53 from "@/assets/tube53.jpg";
import show_tube54 from "@/assets/tube54.jpg";
import show_tube55 from "@/assets/tube55.jpg";
import show_tube56 from "@/assets/tube56.jpg";
import show_tube57 from "@/assets/tube57.jpg";
import show_tube58 from "@/assets/tube58.jpg";
import show_tube59 from "@/assets/tube59.jpg";
import show_tube60 from "@/assets/tube60.jpg";
import show_tube61 from "@/assets/tube61.jpg";
import show_tube62 from "@/assets/tube62.jpg";
import show_tube63 from "@/assets/tube63.jpg";
import show_tube64 from "@/assets/tube64.jpg";
import show_tube65 from "@/assets/tube65.jpg";
import show_tube66 from "@/assets/tube66.jpg";
import show_tube67 from "@/assets/tube67.jpg";
import show_tube68 from "@/assets/tube68.jpg";
import show_tube69 from "@/assets/tube69.jpg";
import show_tube70 from "@/assets/tube70.jpg";
import show_tube71 from "@/assets/tube71.jpg";
import show_tube72 from "@/assets/tube72.jpg";
import show_tube73 from "@/assets/tube73.jpg";
import show_tube74 from "@/assets/tube74.jpg";
import show_tube75 from "@/assets/tube75.jpg";
import show_tube76 from "@/assets/tube76.jpg";
import show_tube77 from "@/assets/tube77.jpg";
import show_tube78 from "@/assets/tube78.jpg";
import show_tube79 from "@/assets/tube79.jpg";
import show_coil from "@/assets/coil.jpg";
import show_coil1 from "@/assets/coil1.jpg";
import show_coil2 from "@/assets/coil2.jpg";
import show_fittings from "@/assets/show_fittings.jpg";
import show_fittings2 from "@/assets/show_fittings2.jpg";
import show_fittings3 from "@/assets/show_fittings3.jpg";
import show_fittings4 from "@/assets/show_fittings4.jpg";
import show_fittings5 from "@/assets/show_fittings5.jpg";
import show_fittings6 from "@/assets/show_fittings6.jpg";
import show_fittings7 from "@/assets/show_fittings7.jpg";
import show_fittings8 from "@/assets/show_fittings8.jpg";
import show_fittings9 from "@/assets/show_fittings9.jpg";
import show_fittings10 from "@/assets/show_fittings10.jpg";
import show_fittings11 from "@/assets/show_fittings11.jpg";
import show_fittings12 from "@/assets/show_fittings12.jpg";
import show_fittings13 from "@/assets/show_fittings13.jpg";
import show_big from "@/assets/big.jpg";
import show_big2 from "@/assets/big2.jpg";
import show_big3 from "@/assets/big3.jpg";
import show_big4 from "@/assets/big4.jpg";
import show_big5 from "@/assets/big5.jpg";
import show_big6 from "@/assets/big6.jpg";
import show_flanges from "@/assets/show_flanges.jpg";
import show_f from "@/assets/show_f.jpg"
import heat_exchange from "@/assets/heat_exchange.jpg";
import helium_button from "@/assets/helium_button.jpg";


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
  const [language, setLanguage] = useState<Language>("en");
  
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

  const navItems = [
    { href: "#works", label: t.nav.ourWork },
    { href: "#about", label: t.nav.aboutUs },
    { href: "#products", label: t.nav.products },
    { href: "#expertise", label: t.nav.ourExpertise },
    // { href: "#visits", label: t.visits.title },
    { href: "#contact", label: t.nav.contactUs },
  ];

  const show_image = [
    show_big2,
    show_big3,
    show_big4,
    show_big5,
    show_big6,
    show_coil2,
    show_tube,
    show_tube1,
    show_tube2,
    show_tube3,
    show_tube4,
    show_tube5,
    show_tube6,
    show_tube7,
    show_tube8,
    show_tube9,
    show_tube10,
    show_tube11,
    show_tube12,
    show_tube13,
    show_tube14,
    show_tube15,
    show_tube16,
    show_tube17,
    show_tube18,
    show_tube19,
    show_tube20,
    show_tube21,
    show_tube22,
    show_tube23,
    show_tube24,
    show_tube25,
    show_tube26,
    show_tube27,
    show_tube28,
    show_tube29,
    show_tube30,
    show_tube31,
    show_tube32,
    show_tube33,
    show_tube34,
    show_tube35,
    show_tube36,
    show_tube37,
    show_tube38,
    show_tube39,
    show_tube40,
    show_tube41,
    show_tube42,
    show_tube43,
    show_tube44,
    show_tube45,
    show_tube46,
    show_tube47,
    show_tube48,
    show_tube49,
    show_tube50,
    show_tube51,
    show_tube52,
    show_tube53,
    show_tube54,
    show_tube55,
    show_tube56,
    show_tube57,
    show_tube58,
    show_tube59,
    show_tube60,
    show_tube61,
    show_tube62,
    show_tube63,
    show_tube64,
    show_tube65,
    show_tube66,
    show_tube67,
    show_tube68,
    show_tube69,
    show_tube70,
    show_tube71,
    show_tube72,
    show_tube73,
    show_tube74,
    show_tube75,
    show_tube76,
    show_tube77,
    show_tube78,
    show_tube79,
    show_coil,
    show_coil1,
    heat_exchange,
    show_fittings,
    show_fittings2,
    show_fittings3,
    show_fittings4,
    show_fittings5,
    show_fittings6,
    show_fittings7,
    show_fittings8,
    show_fittings9,
    show_fittings10,
    show_fittings11,
    show_fittings12,
    show_fittings13,
    show_big,
    show_flanges,
    show_f,
    helium_button
  ]

  const plugin = React.useRef(
    Autoplay({
      delay: 1000,
      stopOnInteraction: true,
    })
  )

  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.plugins().autoplay?.play()

  }, [api])

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
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => plugin.current.play()}
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
                  {show_image.map((k, i) => (
                    <CarouselItem key={i} className="pl-6 basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                      <div className="overflow-hidden aspect-[16/10]">
                        <img
                          src={k}
                          alt={`Site ${i + 1}`}
                          // 2. Add transition and hover effect classes to the image 👇
                          className="h-full w-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105" 
                        />
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
