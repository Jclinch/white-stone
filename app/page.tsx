// File: app/page.tsx
// -----------------------------
"use client";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Industries from "../components/Industries";
import Compliance from "../components/Compliance";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SeoMeta from "@/components/seo/SeoMeta";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SeoMeta />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Compliance />
      <Contact />
      <Footer />
    </main>
  );
}

