import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
  { title: "Quiz", description: "Personalizado para você", src: "/videos/quiz.mp4"  },
  { title: "Exercícios", description: "Sua saúde em dia", src: "/videos/exercicios.mp4" },
  { title: "Meditações", description: "Paz e equilíbrio", src: "/videos/meditacoes.mp4" },
  { title: "Planner", description: "Organize sua rotina", src: "/videos/planner.mp4" },
  { title: "Comunidade", description: "Conecte-se com outras", src: "/videos/comunidade.mp4" },
  { title: "Cardápio", description: "Alimentação guiada", src: "/videos/cardapio.mp4" },
  { title: "Informações", description: "Conteúdo educativo", src: "/videos/informacoes.mp4" },
];

const VideoSection = () => {
  return (
    <section id="video-demo" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veja o App em Ação
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {items.map((item, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col items-center p-2">
                    {/* Frame do Celular com Degradê */}
                    <div className="relative w-full max-w-[260px] aspect-[9/16] rounded-[2.5rem] p-[3px] bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 shadow-xl">
                      <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-black">
                        <video
                          className="w-full h-full object-cover"
                          controls
                          playsInline
                          muted
                          loop
                          src={item.src}
                        >
                          <source src={item.src} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <h3 className="font-bold text-xl text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Setas Visíveis em Mobile e Desktop com Estilização */}
            <CarouselPrevious 
              className="flex -left-6 md:-left-12 bg-gradient-to-br from-purple-600 to-pink-500 border-none text-white hover:opacity-90 hover:text-white transition-opacity" 
            />
            <CarouselNext 
              className="flex -right-6 md:-right-12 bg-gradient-to-br from-purple-600 to-pink-500 border-none text-white hover:opacity-90 hover:text-white transition-opacity" 
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;