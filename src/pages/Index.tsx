import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import VideoSection from "@/components/landing/VideoSection";
import Features from "@/components/landing/Features";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VideoSection />
      <Features />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
