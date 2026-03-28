import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useMemo, memo, useRef } from "react";

// Recomendações reais do LinkedIn
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Hélio Borges",
    role: "Desenvolvedor Front-End | HTML, CSS, JavaScript",
    company: "Colega de Formação",
    testimonial: "O Yan é um profissional em transição de carreira que vem demonstrando muita dedicação ao desenvolvimento Front-End, com foco em JavaScript, TypeScript, Node e React, além de já planejar sua evolução para Full Stack. Sua paixão pela tecnologia e disposição em encarar desafios são visíveis em cada etapa do seu aprendizado. O que mais chama atenção em sua trajetória é a forma como ele traz para a programação as habilidades adquiridas em suas experiências anteriores, como comunicação clara, trabalho em equipe, pontualidade, proatividade e inteligência emocional.",
    avatar: "https://ui-avatars.com/api/?name=Helio+Borges&background=06b6d4&color=fff&size=128",
  },
  {
    id: 2,
    name: "Leonardo Antunes",
    role: "Desenvolvedor Front-End | HTML | CSS | JavaScript",
    company: "Colega de Formação",
    testimonial: "Yanison é uma pessoa extremamente dedicada e confiável, alguém que se destaca não só pelas habilidades técnicas, mas também pela forma positiva como se relaciona com todos ao redor. Sempre disposto a aprender, colaborar e agregar valor ao time, ele transmite compromisso e atenção aos detalhes. Recomendo o Yanison para qualquer equipe ou projeto, pois sei que ele tem tudo para entregar excelência e contribuir com entusiasmo e profissionalismo.",
    avatar: "https://ui-avatars.com/api/?name=Leonardo+Antunes&background=8b5cf6&color=fff&size=128",
  },
  {
    id: 3,
    name: "Mariana Azevedo",
    role: "Desenvolvedora Web | Front-End | HTML | CSS | JavaScript",
    company: "Colega de Formação",
    testimonial: "Conheci o Yan em nossa formação Full-Stack e identifiquei seu potencial e paixão pela programação. Ele se destaca pela comunicação assertiva, proatividade e um forte senso de responsabilidade em tudo que faz. Com uma mentalidade de crescimento constante, ele está sempre aprimorando suas habilidades e buscando novos conhecimentos. Essa atitude garante que ele entregue seu melhor em cada projeto, agregando um imenso valor como colaborador para todos ao seu redor.",
    avatar: "https://ui-avatars.com/api/?name=Mariana+Azevedo&background=ec4899&color=fff&size=128",
  },
  {
    id: 4,
    name: "Pedro Duarte",
    role: "Desenvolvedor Front-End | React | Node.js | Python | CSS",
    company: "Colega de Formação",
    testimonial: "Tive a oportunidade de acompanhar o trabalho do Yan Isonel e posso afirmar que ele é um profissional extremamente competente e dedicado. Demonstra grande domínio técnico, comprometimento com qualidade e um senso de responsabilidade admirável. Além disso, é colaborativo, comunicativo e sempre disposto a ajudar o time e alcançar os melhores resultados. Sua postura profissional e sua busca constante por evolução fazem dele alguém que se destaca em qualquer ambiente.",
    avatar: "https://ui-avatars.com/api/?name=Pedro+Duarte&background=10b981&color=fff&size=128",
  },
];

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = useMemo(() => TESTIMONIALS_DATA, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que dizem de <span className="text-primary">Yan</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Feedback de clientes, parceiros e colegas que trabalharam comigo
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 px-4 py-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(50%-12px)] min-w-0"
                >
                  <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10 h-full flex flex-col justify-between group">
                    <div>
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary" />
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-muted-foreground leading-relaxed mb-6 italic group-hover:text-foreground/90 transition-colors">
                        "{testimonial.testimonial}"
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-6 mt-auto border-t border-border">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width="56"
                        height="56"
                        loading="lazy"
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Nav Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary/20 transition-all duration-300 shadow-lg z-10"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary/20 transition-all duration-300 shadow-lg z-10"
            aria-label="Próximo"
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Quer trabalhar comigo?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
          >
            Entre em Contato
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);
