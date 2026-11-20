import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TrendingUp, Users, Target, Zap, Rocket, Heart } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const SUCCESS_CASES = [
  {
    id: 1,
    title: "Brazukas Delivery",
    client: "Sistema de Food Delivery Autônomo",
    metric: "+27% Lucro",
    metricLabel: "Economia direta em comissões sem taxas de marketplaces",
    description: "Criação de toda a aplicação de ponta a ponta, abrangendo a área de cliente, área de lojista e área de motoboy com escalabilidade real.",
    icon: Zap,
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
  },
  {
    id: 2,
    title: "Salão SaaS",
    client: "Gestão Empresarial & Assinaturas",
    metric: "MRR Recorrente",
    metricLabel: "Clube de assinaturas VIP e PDV sem perdas de caixa",
    description: "Plataforma dupla: área do cliente para agendamentos 24/7 e painel administrativo com frente de caixa (PDV) e cálculo automático de comissões.",
    icon: TrendingUp,
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
  },
  {
    id: 3,
    title: "Treinador Roth",
    client: "Consultoria Esportiva & IA",
    metric: "2x Leads",
    metricLabel: "Captação contínua com agente de IA conversacional",
    description: "Plataforma de conversão integrada a Landing Page moderna, com funil de WhatsApp. Possui um agente de IA treinado para atender e qualificar visitantes 24 horas por dia.",
    icon: Users,
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
  },
  {
    id: 4,
    title: "A Plataforma Prime Team",
    client: "Startup / Software House",
    metric: "+300%",
    metricLabel: "Engajamento corporativo e fechamentos B2B",
    description: "Fundação de uma software house focada em reunir desenvolvedores TypeScript para construção de ecossistemas web, mobile e captação de grandes projetos.",
    icon: Rocket,
    color: "text-[#00D2FF]",
    bg: "bg-[#00D2FF]/10",
  },
  {
    id: 5,
    title: "Manual da Vida Moderna",
    client: "Infoproduto Digital & Escala",
    metric: "+45% Conversão",
    metricLabel: "Aumento na conversão direta com checkout sem fricção",
    description: "Landing page de alta conversão vinculada a tráfego pago em escala, com carregamento ultrarrápido (<0.8s) e fechamento direto de pedidos.",
    icon: Target,
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
  },
  {
    id: 6,
    title: "Fono de Bebês",
    client: "Saúde / Fonoaudiologia Materno-Infantil",
    metric: "Zero Faltas",
    metricLabel: "Triagem automatizada e fidelização de famílias",
    description: "Landing page acolhedora para agendamento de consultas com triagem médica e atendimento humanizado.",
    icon: Heart,
    color: "text-[#00D2FF]",
    bg: "bg-[#00D2FF]/10",
  },
];

export default function SuccessCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="cases" ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cases de <span className="text-primary">Sucesso</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de projetos construídos com alta performance e foco no negócio
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {SUCCESS_CASES.map((caseItem, index) => (
                <motion.div
                  key={caseItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(50%-12px)] min-w-0"
                >
                  <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {caseItem.title}
                        </h3>
                        <p className="text-sm text-primary font-medium">{caseItem.client}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${caseItem.bg}`}>
                        <caseItem.icon className={`w-6 h-6 ${caseItem.color}`} />
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {caseItem.description}
                      </p>
                    </div>

                    <div className="mt-auto border-t border-border pt-6">
                      <div className="flex items-end gap-3">
                        <span className={`text-4xl font-extrabold ${caseItem.color}`}>
                          {caseItem.metric}
                        </span>
                        <span className="text-sm font-medium text-muted-foreground pb-1">
                          {caseItem.metricLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Nav Buttons */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 lg:-translate-x-6 w-11 h-11 rounded-full bg-background border border-border items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-lg z-10"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 lg:translate-x-6 w-11 h-11 rounded-full bg-background border border-border items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-lg z-10"
            aria-label="Próximo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center items-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center shadow"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-xs text-muted-foreground">Deslize para ver mais cases</span>
            <button
              onClick={scrollNext}
              className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center shadow"
              aria-label="Próximo"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
