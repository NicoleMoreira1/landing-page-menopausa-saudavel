import { motion } from "framer-motion";
import {
  ClipboardCheck,
  BookOpen,
  Utensils,
  Dumbbell,
  Pill,
  FileText,
  CalendarDays,
  Users,
  Info,
} from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Quiz de Avaliação",
    description: "26 perguntas sobre 9 áreas importantes da sua saúde para entender sua fase.",
    color: "from-primary to-accent",
  },
  {
    icon: BookOpen,
    title: "Meditações Diárias",
    description: "Reflexões profundas e pergunta interativa para cada dia do ano.",
    color: "from-accent to-primary",
  },
  {
    icon: Info,
    title: "Informações Completas",
    description: "Conteúdo educativo sobre a menopausa e todas as suas fases.",
    color: "from-primary to-accent",
  },
  {
    icon: Utensils,
    title: "Cardápios Personalizados",
    description: "Receitas e planos alimentares específicos para suas necessidades.",
    color: "from-accent to-primary",
  },
  {
    icon: Dumbbell,
    title: "Exercícios",
    description: "Rotinas de exercícios adaptadas para cada fase e condição.",
    color: "from-primary to-accent",
  },
  {
    icon: Pill,
    title: "Suplementos",
    description: "Orientações sobre suplementação adequada para o seu caso.",
    color: "from-accent to-primary",
  },
  {
    icon: FileText,
    title: "Exames",
    description: "Lista de exames recomendados e acompanhamento da saúde.",
    color: "from-primary to-accent",
  },
  {
    icon: CalendarDays,
    title: "Planner Diário",
    description: "Organize sua rotina, rituais e prioridades do dia.",
    color: "from-accent to-primary",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Conecte-se com outras mulheres, compartilhe experiências.",
    color: "from-primary to-accent",
  },
];

const Features = () => {
  return (
    <section id="funcionalidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo que você precisa em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              um só lugar
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um aplicativo completo para acompanhar você em cada passo dessa jornada
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
