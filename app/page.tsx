"use client";

<<<<<<< HEAD
import { SignUpButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckSquare,
  Users,
  Zap,
  Shield,
  ArrowRight,
  BookCheck,
} from "lucide-react";
import Navbar from "@/components/navbar";
// import Navbar from "@/components/navbar";

export default function HomePage() {
  const { isSignedIn} = useUser();

  const features = [
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Organize your tasks with intuitive drag-and-drop boards",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team in real-time",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with Next.js 15 for optimal performance",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security with Clerk authentication",
    },
  ];
=======
import { CTA } from "@/components/promted/CTA";
import { Features } from "@/components/promted/Features";
import { Footer } from "@/components/promted/Footer";
import { Hero } from "@/components/promted/Hero";
import { Pricing } from "@/components/promted/pricing";

// import Navbar from "@/components/navbar";

export default function HomePage() {
>>>>>>> dev

  return (
    <div className="min-h-screen">
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
