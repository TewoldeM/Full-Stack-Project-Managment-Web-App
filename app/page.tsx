"use client";

import { CTA } from "@/components/promted/CTA";
import { Features } from "@/components/promted/Features";
import { Footer } from "@/components/promted/Footer";
import { Hero } from "@/components/promted/Hero";
import { Navigation } from "@/components/promted/Navigation";
import { Pricing } from "@/components/promted/pricing";

// import Navbar from "@/components/navbar";

export default function HomePage() {

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
