import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}