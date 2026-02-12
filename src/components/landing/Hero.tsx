import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-woman.jpg";

const Hero = () => {
  const scrollToVideo = () => {
    const element = document.getElementById("video-demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-16 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Seu guia completo para a menopausa
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Viva essa fase com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                saúde e equilíbrio
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Acompanhamento completo com quiz de avaliação, meditações, cardápios personalizados, 
              exercícios, suplementação e muito mais. Tudo que você precisa em um só lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button onClick={scrollToVideo} variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Mulher feliz e saudável"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-2xl">💪</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Planner Diário</p>
                  <p className="text-sm text-muted-foreground">Organize sua rotina</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-card p-4 rounded-2xl shadow-xl border border-border z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <span className="text-2xl">🧘</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Meditações</p>
                  <p className="text-sm text-muted-foreground">Paz interior</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
