import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8">
            <Heart className="w-10 h-10 text-white fill-current" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comece sua jornada para uma menopausa mais saudável
          </h2>
          
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Junte-se a milhares de mulheres que já estão vivendo essa fase com mais qualidade de vida, 
            equilíbrio e bem-estar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          <p className="text-sm text-white/60 mt-6">
            Sem compromisso • Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
