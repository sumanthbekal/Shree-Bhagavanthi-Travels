import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { Fleet } from "@/components/Fleet";
import { TourPackages } from "@/components/TourPackages";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full relative">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section with Quick Booking Enquiry Card */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Travel Services */}
      <Services />

      {/* Fleet Showcase */}
      <Fleet />

      {/* Tour Packages & Popular Karnataka Circuits */}
      <TourPackages />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Photo Gallery with Lightbox */}
      <Gallery />

      {/* Customer Testimonials Carousel */}
      <Testimonials />

      {/* Contact & Location Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp and Contact Widgets */}
      <FloatingWidgets />
    </main>
  );
}
