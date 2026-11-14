import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, memo, useMemo } from "react";
import { TrendingUp } from "lucide-react";

// Categorias de Skills rigorosamente preservadas com Injeção de ROI Comercial
const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React / Vite.js",
        level: 95,
        color: "from-slate-400 to-emerald-400",
        evidence: "Base de +20 projetos, incluindo Brazukas Delivery e A Plataforma Prime Team.",
        roiImpact: "Carregamento ultrarrápido (<0.8s) e alta retenção visual, diminuindo taxa de rejeição (bounce rate) e aumentando taxa de conversão em até 40%.",
      },
      {
        name: "TypeScript",
        level: 90,
        color: "from-slate-300 to-emerald-400",
        evidence: "Tipagem forte implementada em sistemas de alta complexidade (E-Commerce Bianca Loja).",
        roiImpact: "Redução de até 85% de bugs em produção, eliminando retrabalho emergencial e custos ocultos de manutenção técnica.",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js & Express",
        level: 85,
        color: "from-emerald-600 to-emerald-400",
        evidence: "API REST e SSR Serverless nas plataformas SaaS e no App de IA Fitness.",
        roiImpact: "Arquitetura de backend focada em alta concorrência, reduzindo tempo de resposta e eliminando perda de vendas por lentidão.",
      },
      {
        name: "Trpc",
        level: 80,
        color: "from-slate-400 to-emerald-500",
        evidence: "Comunicação Type-Safe end-to-end utilizada na plataforma do Brazukas Delivery.",
        roiImpact: "Sincronização instantânea client-server que acelera o time-to-market em 2x, gerando faturamento antecipado para a operação.",
      },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      {
        name: "MySQL",
        level: 85,
        color: "from-slate-500 to-emerald-400",
        evidence: "Gestão robusta relacional no Brazukas Delivery e Plataformas de Usuários (Sage).",
        roiImpact: "Integridade transacional estrita com zero falhas financeiras em fluxos de pagamentos, estoques e checkout.",
      },
      {
        name: "Drizzle ORM",
        level: 80,
        color: "from-emerald-700 to-emerald-400",
        evidence: "Usado para modelagem segura e migrations em sistemas Full Stack recentes.",
        roiImpact: "Queries otimizadas que reduzem custos de infraestrutura em nuvem e garantem escalabilidade sem gargalos.",
      },
    ],
  },
  {
    title: "UI / Design",
    skills: [
      {
        name: "Tailwind CSS",
        level: 95,
        color: "from-slate-300 to-emerald-400",
        evidence: "Design Systems responsivos e Pixel Perfect em 100% das Landing Pages.",
        roiImpact: "Design System com consistência de marca corporativa e foco em UX persuasiva de alta conversão.",
      },
      {
        name: "Framer Motion",
        level: 85,
        color: "from-slate-400 to-emerald-300",
        evidence: "Microinterações de alto impacto no portfólio oficial e E-book Vida Moderna.",
        roiImpact: "Interatividade refinada que retém atenção do tomador de decisão e eleva o ticket médio percebido do produto.",
      },
    ],
  },
  {
    title: "Automação / IA",
    skills: [
      {
        name: "Gemini / LLMs",
        level: 90,
        color: "from-emerald-500 to-emerald-300",
        evidence: "Implementação de assistentes de IA inteligentes e chat-widgets serverless.",
        roiImpact: "Atendimento comercial e qualificação de leads 24/7 sem equipe de plantão, reduzindo custo por lead (CPL).",
      },
      {
        name: "RAG & Vetores",
        level: 85,
        color: "from-slate-400 to-emerald-400",
        evidence: "Uso de Retrieval-Augmented Generation para consultas em bases de dados personalizadas.",
        roiImpact: "Respostas imediatas sobre catálogo e documentação interna, encurtando o ciclo de vendas de dias para minutos.",
      },
      {
        name: "Prompt Engineering",
        level: 95,
        color: "from-emerald-600 to-emerald-400",
        evidence: "Domínio de técnicas avançadas para extração máxima de performance dos modelos.",
        roiImpact: "Otimização de tokens e automações precisas, reduzindo custos de API em mais de 60% e eliminando alucinações comerciais.",
      },
      {
        name: "N8N / Automações",
        level: 80,
        color: "from-slate-400 to-emerald-500",
        evidence: "Workflow de automação para disparos de WhatsApp e webhooks integrados.",
        roiImpact: "Eliminação de tarefas manuais repetitivas, poupando até 30 horas/semana da equipe operacional e escalando faturamento.",
      },
    ],
  },
  {
    title: "DevOps / Tools",
    skills: [
      {
        name: "Vercel / Edge",
        level: 90,
        color: "from-slate-500 to-emerald-400",
        evidence: "Hospedagem ágil e funções Serverless aplicadas nos 15 maiores cases.",
        roiImpact: "Infraestrutura global com 99.99% uptime e custo sob demanda, zero desperdício com servidores ociosos.",
      },
      {
        name: "Git / GitHub",
        level: 95,
        color: "from-slate-400 to-emerald-400",
        evidence: "Versionamento contínuo em equipe (Ordem dos Seraphim).",
        roiImpact: "Deploy contínuo e rastreabilidade total, reduzindo risco operacional e garantindo entregas rigorosamente no prazo.",
      },
    ],
  },
];

function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = useMemo(() => SKILL_CATEGORIES, []);

  return (
    <section id="skills" ref={ref} className="py-20 bg-background/80 backdrop-blur-sm relative overflow-hidden">
      {/* Glow Effects (Subtle Emerald and Silver Depth) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-400/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Background Intercalado Átomo React */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('/react-logo.png')] bg-no-repeat bg-fixed bg-center" 
        style={{ backgroundSize: '40%' }}
      />
      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Engenharia de Software Focada em Lucro & Escalabilidade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Habilidades & <span className="text-emerald-400">Impacto Comercial</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Inventário técnico de stacks consolidadas conectado diretamente à redução de custos operacionais, alta concorrência e retorno sobre investimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.5 }}
              className="bg-card/90 border border-border/80 rounded-2xl p-5 sm:p-7 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                  <span className="w-2 h-7 bg-emerald-500 rounded-full" />
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.5,
                      }}
                      className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3.5"
                    >
                      <div className="flex flex-col mb-2.5">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-slate-100 font-semibold text-base">{skill.name}</span>
                          <span className="text-sm font-bold text-emerald-400">{skill.level}%</span>
                        </div>
                        <span className="text-xs text-slate-400 leading-tight italic">
                          {skill.evidence}
                        </span>
                      </div>

                      {/* Level Progress Bar */}
                      <div className="h-2 bg-slate-900 rounded-full overflow-hidden mb-2.5">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 1,
                            ease: "easeOut",
                          }}
                        />
                      </div>

                      {/* ROI Addendum */}
                      <div className="pt-2 border-t border-slate-800/60 flex items-start gap-1.5">
                        <span className="text-emerald-400 text-xs shrink-0 mt-0.5">💰</span>
                        <p className="text-[11px] text-emerald-300/90 font-medium leading-relaxed">
                          <strong className="text-emerald-400 font-semibold">Impacto Comercial:</strong> {skill.roiImpact}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SkillsSection);
