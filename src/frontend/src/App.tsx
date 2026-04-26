import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutSection from "./pages/sections/AboutSection";
import ContactSection from "./pages/sections/ContactSection";
import FAQSection from "./pages/sections/FAQSection";
import HeroSection from "./pages/sections/HeroSection";
import ProductsSection from "./pages/sections/ProductsSection";
import TestimonialsSection from "./pages/sections/TestimonialsSection";
import WhyChooseUsSection from "./pages/sections/WhyChooseUsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
