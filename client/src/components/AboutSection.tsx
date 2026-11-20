import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, memo, useMemo, useState } from "react";
import { Code2, Rocket, Users, GraduationCap, Building2, Terminal, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Valores Estratégicos com Foco em Retorno e Robustez
const VALUES_DATA = [
  {
    icon: Code2,
    title: "Código Limpo & Eficiência",
    description: "Arquitetura escalável que reduz em até 70% os custos futuros de manutenção e retrabalho técnico.",
  },
  {
    icon: TrendingUp,
    title: "Foco em ROI & Conversão",
    description: "Sistemas desenhados da raiz para reter visitantes, acelerar checkouts e maximizar faturamento.",
  },
  {
    icon: ShieldCheck,
    title: "Confiabilidade & Entrega",
    description: "Cumprimento rigoroso de cronogramas com deploys contínuos e alta integridade transacional.",
  },
];

// Inventário Rigorosamente Preservado com Camada de Valor Financeiro e Operacional
const TIMELINE_DATA = [
  {
    period: "2015-2017",
    title: "Programador C#",
    subtitle: "Microlins",
    description: "Fundamentos sólidos em tipagem forte e lógica algorítmica orientada a objetos para aplicações corporativas.",
    icon: GraduationCap,
  },
  {
    period: "2015-2017",
    title: "Técnico em Informática",
    subtitle: "Concomitante ao Ensino Médio",
    description: "⭐ Destaque: 2 formações simultâneas ao ensino médio. Base rígida de hardware, redes e estruturação computacional de alta disponibilidade.",
    icon: GraduationCap,
    highlight: true,
  },
  {
    period: "2018-2024",
    title: "Técnico em Informática e Analista de TI",
    subtitle: "Autônomo",
    description: "Diagnóstico, reparo e manutenção de infraestruturas críticas, garantindo disponibilidade contínua e redução de tempo ocioso para clientes.",
    icon: Code2,
  },
  {
    period: "Agosto de 2025",
    title: "Desenvolvedor Frontend",
    subtitle: "Início Oficial e Especialização",
    description: "Migração oficial de carreira (da dança para o código). Especialização profunda em React.js, TypeScript e interfaces Premium com TailwindCSS, dominando animações fluídas e UX voltada para retenção e conversão de clientes.",
    icon: Code2,
  },
  {
    period: "Dezembro de 2025",
    title: "Desenvolvedor Full Stack",
    subtitle: "Domínio do Ecossistema Web",
    description: "Domínio do ecossistema backend na prática. Criação de arquiteturas robustas em Node.js com Express, modelagem de Bancos de Dados Relacionais e integrações de pagamentos e automações focadas em alta concorrência e eliminação de perdas de vendas por lentidão.",
    icon: Terminal,
    highlight: true,
  },
  {
    period: "Janeiro de 2026",
    title: "Suporte Técnico",
    subtitle: "Dev Club",
    description: "Atendimento e suporte técnico para desenvolvedores, auxiliando na resolução de problemas complexos de código e infraestrutura com foco em agilidade de entrega.",
    icon: Code2,
    customImage: "/assets/devclub.png",
    highlight: true,
  },
  {
    period: "Março de 2026",
    title: "Tech Lead & CEO | Prime Team",
    subtitle: "Fundação de Software House",
    description: "Fundação da Prime Team. Liderança em desenvolvimento de ponta a ponta, orquestrando soluções de alto retorno financeiro (Delivery, Plataformas SaaS, Landing Pages com +35% de conversão e Sistemas Administrativos que reduzem custos operacionais).",
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
    <section id="about" ref={ref} className="py-24 bg-[#030712] relative overflow-hidden border-t border-[#00D2FF]/10">
      {/* Background Intercalado Átomo React */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('/assets/reactatom.gif')] bg-no-repeat bg-fixed bg-center" 
        style={{ backgroundSize: '40%' }}
      />
      <div className="container px-4 sm:px-6 relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1124] border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-semibold mb-4 shadow-[0_0_15px_rgba(0,210,255,0.15)]">
            <Rocket className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Engenharia de Software & Visão de Negócio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#E2E8F0]">
            Sobre <span className="text-[#00D2FF]">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D2FF] to-[#F59E0B] mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Engenheiro de Software e Estrategista focado em converter linhas de código em retorno tangível para empresas e empreendedores.
          </p>
        </motion.div>

        {/* Main Description & Photo */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-4">
              Minha atuação une a precisão técnica da engenharia moderna à visão pragmática de crescimento comercial. Cada sistema, landing page e automação com IA é arquitetado para resolver gargalos reais: lentidão que custa vendas, processos manuais que consomem equipes e plataformas que não escalam sob pressão.
            </p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Com histórico de mais de 130 templates produzidos e 16 sistemas em produção, trago rigor arquitetural, tipagem forte, microsserviços ágeis e integrações ponta a ponta para que sua operação funcione 24/7 com máxima rentabilidade.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00D2FF]/30 to-[#F59E0B]/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
              <img
                src="/assets/yan2.png"
                alt="Yan Menephyl"
                className="relative rounded-2xl shadow-2xl w-full max-w-sm object-cover border border-[#00D2FF]/30 transform hover:-rotate-1 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div className="relative bg-[#0A1124] border border-slate-800 hover:border-[#00D2FF]/50 rounded-2xl p-7 h-full transition-all duration-300 hover:shadow-xl hover:shadow-[#00D2FF]/10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center mb-6 group-hover:bg-[#00D2FF]/20 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-[#00D2FF]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-[#00D2FF] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {value.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D2FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
          <h3 className="text-3xl font-bold text-center mb-12 text-[#E2E8F0]">
            <span className="text-[#00D2FF]">Trajetória & Marcos</span>
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
                  className="relative pl-8 border-l-2 border-[#00D2FF]/30 hover:border-[#00D2FF]/60 transition-colors duration-300"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00D2FF] border-4 border-[#030712] shadow-[0_0_10px_rgba(0,210,255,0.8)]" />

                  {/* Content */}
                  <div className={`bg-[#0A1124] border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#00D2FF]/10 ${
                    item.highlight 
                      ? "border-[#00D2FF]/40 shadow-[0_0_15px_rgba(0,210,255,0.15)]" 
                      : "border-slate-800 hover:border-[#00D2FF]/30"
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#00D2FF]/10 border border-[#00D2FF]/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {item.customImage ? (
                          <img src={item.customImage} alt={item.title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "/react-logo.png" }} />
                        ) : (
                          <item.icon className="w-6 h-6 text-[#00D2FF]" />
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-[#00D2FF] mb-1.5 block font-mono">
                          {item.period}
                        </span>
                        <h4 className="text-xl font-bold text-slate-100 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 font-medium text-sm mb-2">{item.subtitle}</p>
                        {item.description && (
                          <p className={`text-sm leading-relaxed ${item.description.includes('⭐') ? 'text-[#F59E0B] font-semibold' : 'text-slate-300'}`}>{item.description}</p>
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
                className="group gap-2 border-[#00D2FF]/30 hover:border-[#00D2FF] hover:bg-[#00D2FF]/10 text-slate-200 transition-all duration-300"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Ver Menos" : "Ver Trajetória Completa"}
                <motion.span
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Rocket className="w-4 h-4 text-[#00D2FF]" />
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
