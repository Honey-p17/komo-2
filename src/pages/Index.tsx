import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SpaceSection } from "@/components/SpaceSection";
import { MenuSection } from "@/components/MenuSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SpaceSection />
      <MenuSection />
      <GallerySection />
      <Footer />
    </main>
  );
};

export default Index;
