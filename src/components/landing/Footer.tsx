import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Menopausa Saudável</h3>
                <p className="text-xs text-background/60">Seu guia completo para essa fase</p>
              </div>
            </div>
            <p className="text-background/70 text-sm max-w-md">
              Um aplicativo completo para acompanhar você em cada passo da sua jornada através da menopausa, 
              com informações confiáveis e suporte personalizado.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Funcionalidades</a></li>
              <li><a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Menopausa Saudável. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
