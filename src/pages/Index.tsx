import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import VideoSection from "@/components/landing/VideoSection";
import Features from "@/components/landing/Features";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import PainPoints from "@/components/landing/PainPoints";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PainPoints />
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
