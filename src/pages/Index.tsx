import React, { useEffect } from "react";
import heroImage from "@/assets/hero-industrial-night.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Cog, Layers, Snowflake, ShieldCheck, Hammer, BadgeCheck, Users } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Force dark theme for sleek black UI and smooth scrolling
    document.documentElement.classList.add("dark", "scroll-smooth");

    // SEO: Title, Description, Canonical, OpenGraph, Twitter
    const title = "JUNIMETAL DEVELOPMENT | Piping Solutions";
    const description =
      "Innovative pipe & tube solutions from Seoul and Busan. Full-package piping supplier and specialized manufacturer for valves, subsea & special pieces.";

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
      slogan: "Piping Solutions: With us every project is under reliable protection!",
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
  }, []);

  const navItems = [
    { href: "#about", label: "About Us" },
    { href: "#offerings", label: "Products & Services" },
    { href: "#expertise", label: "Our Expertise" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-sm bg-sidebar-primary" aria-hidden />
            <span className="text-lg font-semibold tracking-wide">JUNIMETAL DEVELOPMENT</span>
          </div>
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
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
              JUNIMETAL DEVELOPMENT
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              Piping Solutions: With us every project is under reliable protection!
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button asChild variant="accent" size="xl">
                <a href="#offerings">Explore Our Offerings</a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container">
            <header className="mb-8">
              <h2 className="text-3xl font-semibold md:text-4xl">Innovative Pipe & Tube Solutions</h2>
            </header>
            <p className="max-w-4xl text-muted-foreground">
              Based in Seoul, South Korea, JUNIMETAL DEVELOPMENT operates a global main office and a
              strategically located warehouse in Busan. We are a comprehensive pipe & fitting supplier
              (full package) and a manufacturer of valves, subsea components, and special pieces.
            </p>
          </div>
        </section>

        {/* Products & Services */}
        <section id="offerings" className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container">
            <header className="mb-10">
              <h2 className="text-3xl font-semibold md:text-4xl">Our Offerings</h2>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="group relative overflow-hidden border-border p-6 transition-transform hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                  <Layers className="text-sidebar-primary" />
                </div>
                <h3 className="mb-2 text-lg font-medium">Piping & Fittings</h3>
                <p className="text-sm text-muted-foreground">
                  Complete range of pipes, tubes, elbows, flanges, and fittings.
                </p>
              </Card>

              <Card className="group relative overflow-hidden border-border p-6 transition-transform hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                  <Cog className="text-sidebar-primary" />
                </div>
                <h3 className="mb-2 text-lg font-medium">Valves</h3>
                <p className="text-sm text-muted-foreground">
                  Precision-engineered valves for demanding applications.
                </p>
              </Card>

              <Card className="group relative overflow-hidden border-border p-6 transition-transform hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                  <Hammer className="text-sidebar-primary" />
                </div>
                <h3 className="mb-2 text-lg font-medium">Special Pieces</h3>
                <p className="text-sm text-muted-foreground">
                  Custom components and complex geometries with tight tolerances.
                </p>
              </Card>

              <Card className="group relative overflow-hidden border-border p-6 transition-transform hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                  <Wrench className="text-sidebar-primary" />
                </div>
                <h3 className="mb-2 text-lg font-medium">Services</h3>
                <p className="text-sm text-muted-foreground">
                  Engineering support, testing, logistics, and project management.
                </p>
              </Card>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-xl font-medium">Versatile Applications</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Offshore",
                  "Low-temperature",
                  "Corrosive Environments",
                ].map((t) => (
                  <Badge key={t} variant="secondary" className="px-4 py-1">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section id="expertise" className="scroll-mt-24 border-t border-border py-16 md:py-24">
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
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-4 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container">
            <header className="mb-10">
              <h2 className="text-3xl font-semibold md:text-4xl">Our Certifications</h2>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "ISO 9001", desc: "Quality Management Systems" },
                { title: "ISO 14001", desc: "Environmental Management Systems" },
                { title: "ISO 45001", desc: "Health & Safety Management Systems" },
                { title: "PED 2014/68/EU", desc: "Pressure Equipment Directive" },
                { title: "EAC (Russia)", desc: "Eurasian Conformity" },
                { title: "CE", desc: "European Conformity" },
                { title: "Lloyd's Register", desc: "Compliance & Assurance" },
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
        </section>

        {/* Partners and Clients */}
        <section className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container">
            <header className="mb-10">
              <h2 className="text-3xl font-semibold md:text-4xl">Our Trusted Partners & Clients</h2>
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
        </section>

        {/* Contact / Footer */}
        <footer id="contact" className="scroll-mt-24 border-t border-border bg-card/40 py-16">
          <div className="container grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
              <p className="text-muted-foreground">
                We are here to support your projects with flexible, certified solutions.
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild variant="accent">
                  <a href="mailto:info@junimetal.example">Email Us</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#offerings">View Offerings</a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">Main Office (Seoul)</h3>
              <address className="not-italic text-sm text-muted-foreground">
                Office #804, 25, Yeonmujang 5 Ga-Gil,
                <br /> Seongdong-Gu, Seoul, South Korea
              </address>
              <h3 className="mb-3 mt-6 text-lg font-medium">Warehouse (Busan)</h3>
              <address className="not-italic text-sm text-muted-foreground">
                32, Garisae 2-ro 13 Beon-gil,
                <br /> Gangseo-gu, Busan, South Korea
              </address>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">Seoul Office Map</h3>
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
            © 2025 JUNIMETAL DEVELOPMENT. All Rights Reserved.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
