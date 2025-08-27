import React, { useEffect, useState } from "react";
import { translations, type Language } from "@/utils/translations";
import heroImage from "@/assets/hero-industrial-night.jpg";

import pipe3 from "@/assets/pipe3.png"
import pipe3_webp from "@/assets/pipe3_webp.webp";
import pipe6 from "@/assets/pipe6.png";
import pipe6_webp from "@/assets/pipe6_webp.webp";

import valves from "@/assets/valves3.png";
import valves_webp from "@/assets/valves3_webp.webp";

import fittings from "@/assets/fittings3.png";
import fittings_webp from "@/assets/fittings3_webp.webp";

import flange from "@/assets/flanges7.png";
import flange_webp from "@/assets/flanges7_webp.webp";

import materials from "@/assets/materials3.png";
import materials_webp from "@/assets/materials3_webp.webp"

import heat from "@/assets/heat4.png";
import heat_webp from "@/assets/heat4_webp.webp";

import cold from "@/assets/cold2.png";
import cold_webp from "@/assets/cold2_webp.webp";

import custom_design from "@/assets/custom_design3.png";
import custom_design_webp from "@/assets/custom_design3_webp.webp"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wrench, Cog, Layers, Snowflake, ShieldCheck, Hammer, BadgeCheck, Users, Globe } from "lucide-react";

const Index = () => {
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
      name: "JUNIMETAL DEVELOPMENT",
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
    { href: "#about", label: t.nav.aboutUs },
    { href: "#offerings", label: t.nav.productsServices },
    { href: "#expertise", label: t.nav.ourExpertise },
    { href: "#contact", label: t.nav.contactUs },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
        {t.hero.skipToContent}
      </a>

      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <div className="h-7 w-7 rounded-sm bg-sidebar-primary" aria-hidden />  This is the blue box before JUNIMETAL DEVELOPMENT */}
            <span 
              className="text-lg font-semibold tracking-wide"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              JUNIMETAL DEVELOPMENT (JMDU)
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
                {/* <SelectItem value="ko">한국어</SelectItem>
                <SelectItem value="ja">日本語</SelectItem> */}
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
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              {t.hero.title}
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button asChild variant="accent" size="xl">
                <a href="#offerings">{t.hero.exploreOfferings}</a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#contact">{t.hero.getInTouch}</a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us */}
        {/* <section id="about" className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container">
            <header className="mb-8">
              <h2 className="text-3xl font-semibold md:text-4xl">Innovative Pipe & Tube Solutions</h2>
            </header>
            <p className="max-w-4xl text-muted-foreground">
              Based in Seoul, South Korea, JUNIMETAL DEVELOPMENT (JMDU) operates a global main office and a
              strategically located warehouse in Busan. We are a comprehensive pipe & fitting supplier
              (full package) and a manufacturer of valves, subsea components, and special pieces.
            </p>
          </div>
        </section> */}
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


        {/* Products & Services */}
        <section id="offerings" className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container">
            <header className="mb-10">
              <h2 className="text-3xl font-semibold md:text-4xl">{t.offerings.title}</h2>
            </header>

            <Tabs defaultValue="piping" className="w-full">
              <TabsList className="w-full flex overflow-x-auto sm:grid sm:grid-cols-4">
                <TabsTrigger value="piping">{t.offerings.tabs.pipeTube}</TabsTrigger>
                <TabsTrigger value="fittings">{t.offerings.tabs.fittings}</TabsTrigger>
                <TabsTrigger value="flanges">{t.offerings.tabs.flanges}</TabsTrigger>
                <TabsTrigger value="fastners, gaskets, valves">{t.offerings.tabs.fasteners}</TabsTrigger>
              </TabsList>

              <TabsContent value="piping" className="mt-8">
                <Card className="p-8">
                  <div className="grid gap-8 lg:grid-cols-2 items-stretch">
                    {/* Text Column */}
                    <div className="flex flex-col h-full">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                          <Layers className="text-sidebar-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold">{t.offerings.pipeTube.title}</h3>
                      </div>

                      <p className="text-muted-foreground">
                        {t.offerings.pipeTube.description1}
                      </p>

                      <p className="mt-4 text-muted-foreground">
                        {t.offerings.pipeTube.description2}
                      </p>

                      <ul className="mt-6 list-disc space-y-2 pl-5 text-muted-foreground">
                        {t.offerings.pipeTube.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Image Column */}
                    {/* <div className="flex items-center justify-center h-full"> */}
                      <div className="w-full h-full flex items-center justify-center aspect-[4/3]">
                        <picture>
                          <source srcSet={pipe6_webp} type="image/webp"></source>
                          <img
                            src={pipe6}
                            alt="Pipe and Tube Distribution"
                            className="h-full w-auto object-contain rounded-lg"
                          />
                        </picture>
                      {/* </div> */}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="fittings" className="mt-8">
                <Card className="p-8">
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                          <Cog className="text-sidebar-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold">{t.offerings.fittings.title}</h3>
                      </div>
                      <p className="text-muted-foreground">
                        {t.offerings.fittings.description1}
                      </p>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                        {t.offerings.fittings.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      <p className="mt-4 text-muted-foreground">
                        {t.offerings.fittings.description2}
                      </p>
                    </div>
                    <div className="flex items-center justify-center aspect-[4/3]">
                      <picture>
                        <source srcSet={fittings_webp} type="image/webp"></source>
                        <img
                          src={fittings}
                          alt="a picture of a fitting"
                          className="h-full w-auto object-contain rounded-lg"
                        />
                      </picture>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="flanges" className="mt-8">
                <Card className="p-8">
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                          <Hammer className="text-sidebar-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold">{t.offerings.flanges.title}</h3>
                      </div>
                      <p className="text-muted-foreground">
                        {t.offerings.flanges.description1}
                      </p>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                        {t.offerings.flanges.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      <p className="mt-4 text-muted-foreground">
                        {t.offerings.flanges.description2}
                      </p>
                    </div>
                    <div className="flex items-center justify-center aspect-[4/3]">
                      <picture>
                        <source srcSet={flange_webp} type="image/webp"></source>
                        <img
                          src={flange}
                          alt="industrial and subsea flange components"
                          className="h-full w-auto object-contain rounded-lg"
                        />              
                      </picture>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="fastners, gaskets, valves" className="mt-8">
                <Card className="p-8">
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                          <Wrench className="text-sidebar-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold">{t.offerings.fasteners.title}</h3>
                      </div>
                      <p className="text-muted-foreground">
                        {t.offerings.fasteners.description1}
                      </p>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                        {t.offerings.fasteners.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      <p className="mt-4 text-muted-foreground">
                        {t.offerings.fasteners.description2}
                      </p>
                    </div>
                    <div className="flex items-center justify-center aspect-[4/3]">
                      <picture>
                        <source srcSet={valves_webp} type="image/webp"></source>
                        <img
                          src={valves}
                          alt="industrial fasteners, gaskets, and valves for onshore and subsea applications"
                          className="h-full w-auto object-contain rounded-lg"
                        />
                      </picture>
                    </div>
                  </div>
                </Card>
              </TabsContent>

            </Tabs>
          </div>
        </section>

        {/* Our Expertise */}
        {/* <section id="expertise" className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container">
            <header className="mb-10">
              <h2 className="text-3xl font-semibold md:text-4xl">Unmatched Flexibility and Certified Quality</h2>
            </header>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="p-6">
                <h3 className="mb-3 text-xl font-medium">Materials</h3>
                <ul className="grid list-disc gap-2 pl-5 text-muted-foreground sm:grid-cols-2">
                  {[
                    "Carbon Steel",
                    "Alloy Steel",
                    "Stainless Steel",
                    "Duplex",
                    "Coated Pipes",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="mb-3 text-xl font-medium">Heat Treatment</h3>
                <ul className="grid list-disc gap-2 pl-5 text-muted-foreground sm:grid-cols-2">
                  {["Stress Relief", "Quenching", "Corrosion-Resistant Annealing"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Snowflake className="text-sidebar-primary" />
                  <h3 className="text-xl font-medium">Cryogenic Service</h3>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>In-house validation of cryogenic capabilities by testing @ -196°C</li>
                  <li>Tightness testing with helium</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <ShieldCheck className="text-sidebar-primary" />
                  <h3 className="text-xl font-medium">Custom Designs & Special Forgings</h3>
                </div>
                <p className="mb-3 text-muted-foreground">
                  Tailored components with adjustable radii angles and precise tolerances.
                </p>
                <ul className="grid list-disc gap-2 pl-5 text-muted-foreground sm:grid-cols-2">
                  {[
                    "Buckle Arrestors",
                    "Pipe Anchors",
                    "Hanger Flanges",
                    "Tees and Barred Tees",
                    "Wyes",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 lg:col-span-2">
                <div className="mb-2 flex items-center gap-2">
                  <Users className="text-sidebar-primary" />
                  <h3 className="text-xl font-medium">Technical Skills</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Welding engineers (I.W.E.)",
                    "Safety officers",
                    "Environmental experts",
                    "Quality engineers",
                    "Frosio III certified agent",
                    "Cofrend II certified agents",
                    "ACQPA level II and anticorrosive painting certified agent",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-4 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section> */}

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
                    <source srcSet={materials_webp} type="image/webp"></source>
                    <img 
                      src={materials}
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
                    {/* {[
                      "Carbon Steel",
                      "Alloy Steel",
                      "Stainless Steel",
                      "Duplex",
                      "Coated Pipes",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))} */}
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
                    <source srcSet={heat_webp} type="imgage/webp"></source>
                    <img 
                      src={heat}
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
                    <source srcSet={cold_webp} type="image/webp"></source>
                    <img 
                      src={cold}
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
                    {/* <li>In-house validation of cryogenic capabilities by testing @ -196°C</li>
                    <li>Tightness testing with helium</li> */}
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
                    <source srcSet={custom_design_webp} type="image/webp"></source>
                    <img 
                      src={custom_design}
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
                    {/* {[
                      "Buckle Arrestors",
                      "Pipe Anchors",
                      "Hanger Flanges",
                      "Tees and Barred Tees",
                      "Wyes",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))} */}
                    {
                      t.expertise.custom_design.map((item) => <li key={item}>{item}</li>)                    
                    }
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>
        

        {/* Certifications */}
        {/* <section id="certifications" className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container">
            <header className="mb-10">
              <h2 className="text-3xl font-semibold md:text-4xl">Our Certifications</h2>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "ISO 9001", desc: "Quality Management Systems" },
                { title: "ISO 14001", desc: "Environmental Management Systems" },
                { title: "ISO 45001", desc: "Health & Safety Management Systems" },
                // { title: "PED 2014/68/EU", desc: "Pressure Equipment Directive" },
                { title: "EAC (Russia)", desc: "Custom Union Technical Regulations" },
                { title: "CE (European Conformity)", desc: "EC Directives for Related Products" },
                { title: "Lloyd's Register\n PED 2014/68/EU", desc: "Pressure Equipment Directive" },
              ].map((c) => (
                <Card key={c.title} className="flex items-start gap-3 p-5">
                  <BadgeCheck className="mt-0.5 text-sidebar-primary" />
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-sm text-muted-foreground">{c.desc}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Partners and Clients */}
        {/* <section className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container">
            <header className="mb-10">
              <h2 className="text-3xl font-semibold md:text-4xl">Our Trusted Partners</h2>
            </header>

            <div className="mb-8">
              <h3 className="mb-4 text-xl font-medium">Partners</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "UK-Based Forgemaster",
                  "Spain-Based Forgemaster",
                ].map((name) => (
                  <Card key={name} className="p-5 text-center text-muted-foreground">
                    {name}
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">Clients</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {["Total", "Chevron", "Saipem", "Subsea 7", "Technip"].map((client) => (
                  <Card key={client} className="p-5 text-center text-muted-foreground">
                    {client}
                  </Card>
                ))}
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
                  <a href="mailto:jmd@jmd.by-works.com">jmd@jmd.by-works.com</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#offerings">{t.hero.exploreOfferings}</a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">{t.contact.offices.seoul.title}</h3>
              <address className="not-italic text-sm text-muted-foreground">
                {t.contact.offices.seoul.address}
              </address>
              <h3 className="mb-3 mt-6 text-lg font-medium">{t.contact.offices.busan.title}</h3>
              <address className="not-italic text-sm text-muted-foreground">
                {t.contact.offices.busan.address}
              </address>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">{t.footer.office_location}</h3>
              <div className="overflow-hidden rounded-md border">
                <iframe
                  title="Map of JUNIMETAL DEVELOPMENT Seoul Office"
                  src="https://www.google.com/maps?q=Office%20%23804%2C%2025%2C%20Yeonmujang%205%20Ga-Gil%2C%20Seongdong-Gu%2C%20Seoul%2C%20South%20Korea&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full"
                />
              </div>
            </div>
          </div>
          <div className="container mt-10 border-t border-border py-6 text-center text-sm text-muted-foreground">
            © 2025 JUNIMETAL DEVELOPMENT. {t.footer.allRightsReserved}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
