import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground fill-current" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">Menopausa Saudável</h1>
            <p className="text-xs text-muted-foreground">Seu guia completo para essa fase</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#funcionalidades" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Funcionalidades
          </a>
          <a href="#beneficios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Benefícios
          </a>
          <a href="#depoimentos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Depoimentos
          </a>
          <Button variant="hero" size="sm">
            Começar Agora
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="flex flex-col p-4 gap-4">
              <a
                href="#funcionalidades"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Funcionalidades
              </a>
              <a
                href="#beneficios"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <a
                href="#depoimentos"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <Button variant="hero" size="sm">
                Começar Agora
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
