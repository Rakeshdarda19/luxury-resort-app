import { useState } from "react";
import { EnquiryModal } from "../components/EnquiryModal.jsx";
import { Header } from "../components/Header.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
import { VisionSection } from "../components/VisionSection.jsx";
import { PackagesSection } from "../components/PackagesSection.jsx";
import { VenuesSection } from "../components/VenuesSection.jsx";
import { CateringSection } from "../components/CateringSection.jsx";
import { DreamSection } from "../components/DreamSection.jsx";
import { GallerySection } from "../components/GallerySection.jsx";
import { FAQSection } from "../components/FAQSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { ContactCTA } from "../components/ContactCTA.jsx";
import { Footer } from "../components/Footer.jsx";

export function HomePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquirySource, setEnquirySource] = useState("");

  const openEnquiry = (source) => {
    setEnquirySource(source);
    setEnquiryOpen(true);
  };

  return (
    <div id="home" className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <PackagesSection openEnquiry={openEnquiry} />
      <VenuesSection />
      <CateringSection />
      <DreamSection />
      <GallerySection />
      <FAQSection />
      <ContactSection openEnquiry={openEnquiry} />
      <ContactCTA openEnquiry={openEnquiry} />
      <Footer />
      
      <EnquiryModal
        isOpen={enquiryOpen}
        source={enquirySource}
        onClose={() => setEnquiryOpen(false)}
      />
    </div>
  );
}

