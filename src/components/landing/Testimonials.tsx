import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    age: 52,
    text: "O app mudou minha vida! As meditações diárias me ajudaram muito com a ansiedade e as ondas de calor diminuíram consideravelmente.",
    rating: 5,
    avatar: "MS",
  },
  {
    name: "Ana Costa",
    age: 48,
    text: "Finalmente encontrei um lugar com informações confiáveis. O quiz me ajudou a entender melhor o que estava sentindo.",
    rating: 5,
    avatar: "AC",
  },
  {
    name: "Teresa Oliveira",
    age: 55,
    text: "A comunidade é maravilhosa! É muito bom saber que não estou sozinha nessa jornada. Recomendo a todas as mulheres!",
    rating: 5,
    avatar: "TO",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              usuárias dizem
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milhares de mulheres já transformaram sua experiência com a menopausa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 relative z-10">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age} anos</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
