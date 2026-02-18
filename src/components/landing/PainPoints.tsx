import { motion } from "framer-motion";
import { AlertTriangle, Frown, ThermometerSun, BedDouble, HeartCrack, HelpCircle } from "lucide-react";

const painPoints = [
  {
    icon: ThermometerSun,
    text: "Ondas de calor que surgem do nada e te deixam constrangida?",
  },
  {
    icon: BedDouble,
    text: "Noites sem dormir, acordando exausta e sem energia?",
  },
  {
    icon: Frown,
    text: "Mudanças de humor que você não consegue controlar?",
  },
  {
    icon: HeartCrack,
    text: "Ansiedade, irritabilidade e vontade de chorar sem motivo?",
  },
  {
    icon: AlertTriangle,
    text: "Ganho de peso mesmo fazendo tudo 'certo'?",
  },
  {
    icon: HelpCircle,
    text: "Sensação de estar perdida, sem saber o que fazer?",
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Você se sente{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-primary">
              sozinha
            </span>{" "}
            nessa fase?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Se você se identifica com alguma dessas situações, saiba que{" "}
            <strong className="text-foreground">você não está sozinha</strong> — e existe uma solução.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-14">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-destructive/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-foreground font-medium text-sm leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <p className="text-xl md:text-2xl font-bold text-foreground mb-3">
              E se existisse um caminho para viver a menopausa com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                leveza e confiança
              </span>
              ?
            </p>
            <p className="text-muted-foreground">
              O <strong className="text-foreground">Menopausa Saudável</strong> foi criado por mulheres, para mulheres — com tudo que você precisa para retomar o controle da sua saúde.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;
