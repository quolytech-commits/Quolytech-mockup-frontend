import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { AIPreview } from "@/components/sections/AIPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trust />
      <ServicesPreview />
      <ProcessTimeline />
      <FeaturedProjects />
      <Testimonials />
      <AIPreview />
      <BlogPreview />
      <Footer />
    </main>
  );
}
