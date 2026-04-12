import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, memo, useMemo, useState } from "react";
import { Code2, Rocket, Users, GraduationCap, Building2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

// Constantes extraídas para evitar recriação
const VALUES_DATA = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Desenvolvimento com boas práticas e arquitetura escalável",
  },
  {
    icon: Rocket,
    title: "Inovação",
    description: "Sempre explorando novas tecnologias e soluções modernas",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho em equipe e compartilhamento de conhecimento",
  },
];

const TIMELINE_DATA = [
  {
    period: "2015-2017",
    title: "Programador C#",
    subtitle: "Microlins",
    description: "",
    icon: GraduationCap,
  },
  {
    period: "2015-2017",
    title: "Técnico em Informática",
    subtitle: "Concomitante ao Ensino Médio",
    description: "⭐ Destaque: 2 formações simultâneas ao ensino médio",
    icon: GraduationCap,
    highlight: true,
  },
  {
    period: "2018-2024",
    title: "Técnico em Informática e Analista de TI",
    subtitle: "Autônomo",
    description: "",
    icon: Code2,
  },
  {
    period: "Agosto de 2025",
    title: "Desenvolvedor Frontend",
    subtitle: "Início Oficial e Especialização",
    description: "Migração oficial de carreira (da dança para o código). Especialização profunda em React.js, TypeScript e interfaces Premium com TailwindCSS, dominando animações fluídas e experiência de usuário.",
    icon: Code2,
  },
  {
    period: "Dezembro de 2025",
    title: "Desenvolvedor Full Stack",
    subtitle: "Domínio do Ecossistema Web",
    description: "Domínio do ecossistema backend na prática. Criação de arquiteturas robustas em Node.js com Express, modelagem de Bancos de Dados Relacionais e integrações de pagamentos e automações.",
    icon: Terminal,
    highlight: true,
  },
  {
    period: "Janeiro de 2026",
    title: "Suporte Técnico",
    subtitle: "Dev Club",
    description: "Atendimento e suporte técnico para desenvolvedores, auxiliando na resolução de problemas complexos de código e infraestrutura.",
    icon: Code2,
    customImage: "/assets/devclub.png",
    highlight: true,
  },
  {
    period: "Março de 2026",
    title: "Tech Lead & CEO | Prime Team",
    subtitle: "Fundação de Software House",
    description: "Fundação da Prime Team. Liderança em desenvolvimento de ponta a ponta, orquestrando soluções como Delivery, Plataformas SaaS, Landing Pages de alta conversão e Sistemas Administrativos.",
    icon: Building2,
    highlight: true,
  },
];

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const values = useMemo(() => VALUES_DATA, []);
  const timeline = useMemo(() => TIMELINE_DATA, []);

  return (
    <section id="about" ref={ref} className="py-20 bg-background/60 backdrop-blur-sm relative overflow-hidden">
      {/* Background Intercalado Átomo React */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('/react-logo.png')] bg-no-repeat bg-fixed bg-center" 
        style={{ backgroundSize: '40%' }}
      />
      <div className="container px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor apaixonado por criar soluções que fazem a diferença
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-lg text-foreground/80 leading-relaxed text-center">
            Gosto de criar aplicações que façam sentido para quem usa. Analiso os
            desafios de cada projeto e transformo ideias em soluções funcionais,
            claras e bem estruturadas. Valorizo código limpo, boas práticas e
            aprendizado constante, usando cada experiência para evoluir
            tecnicamente e entregar impacto real.
          </p>
        </motion.div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.4 }}
              className="group relative"
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Trajetória</span>
          </h3>

          <div className="space-y-8 relative">
            <AnimatePresence initial={false}>
              {(showAll ? [...timeline].reverse() : [...timeline].reverse().slice(0, 3)).map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, height: 0, x: -20 }}
                  animate={{ opacity: 1, height: "auto", x: 0 }}
                  exit={{ opacity: 0, height: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative pl-8 border-l-2 border-primary/30 hover:border-primary/50 transition-colors duration-300"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  {/* Content */}
                  <div className={`bg-card border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                    item.highlight 
                      ? "border-primary shadow-[0_0_15px_rgba(0,209,255,0.15)]" 
                      : "border-border hover:border-primary/50"
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {item.customImage ? (
                          <img src={item.customImage} alt={item.title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "/react-logo.png" }} />
                        ) : (
                          <item.icon className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-primary mb-2 block">
                          {item.period}
                        </span>
                        <h4 className="text-xl font-bold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground font-medium mb-2">{item.subtitle}</p>
                        {item.description && (
                          <p className={`text-sm leading-relaxed ${item.description.includes('⭐') ? 'text-[#00D1FF] font-medium' : 'text-muted-foreground'}`}>{item.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Expand/Collapse Button */}
            <motion.div 
              layout 
              className="flex justify-center pt-8"
            >
              <Button
                variant="outline"
                className="group gap-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Ver Menos" : "Ver Trajetória Completa"}
                <motion.span
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Rocket className="w-4 h-4 text-primary" />
                </motion.span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
