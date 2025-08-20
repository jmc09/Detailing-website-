import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PricingSection from "@/components/pricing-section";
import BookingSection from "@/components/booking-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-gray-50">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
