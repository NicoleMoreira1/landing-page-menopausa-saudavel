import { motion } from "framer-motion";
import { Check, Heart, Brain, Moon, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Bem-estar Físico",
    description: "Controle os sintomas com orientações personalizadas de alimentação e exercícios.",
    items: [
      "Redução das ondas de calor",
      "Melhora na qualidade do sono",
      "Mais energia e disposição",
    ],
  },
  {
    icon: Brain,
    title: "Equilíbrio Emocional",
    description: "Meditações e conteúdos para manter a mente saudável e equilibrada.",
    items: [
      "Palavra de Deus todos os dias",
      "Reflexões diárias inspiradoras",
      "Apoio emocional constante",
    ],
  },
  {
    icon: Moon,
    title: "Rotina Organizada",
    description: "Planner completo para gerenciar sua saúde e compromissos do dia a dia.",
    items: [
      "Acompanhamento de rituais",
      "Lembretes personalizados",
      "Progresso visível",
    ],
  },
  {
    icon: Leaf,
    title: "Comunidade de Apoio",
    description: "Conecte-se com milhares de mulheres que estão na mesma jornada.",
    items: [
      "Troca de experiências",
      "Dicas práticas do dia a dia",
      "Suporte mútuo",
    ],
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Menopausa Saudável
            </span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um acompanhamento completo para viver essa fase com mais qualidade de vida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
