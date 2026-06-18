import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { PublicationsSection } from "@/components/landing/publications-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { BlogSection } from "@/components/landing/blog-section";
import { ExtraSection } from "@/components/landing/extra-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PublicationsSection />
      <ProjectsSection />
      <MetricsSection />
      <BlogSection />
      <ExtraSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
