import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, memo, useMemo } from "react";
import { Zap, ShieldCheck, Database, Bot, TrendingUp, Layers } from "lucide-react";

// Categorias Estratégicas: Valor Comercial Primeiro, Stacks Consolidadas Depois
const SKILL_PILLARS = [
  {
    title: "1. Frontend & Conversão de Alta Retenção",
    icon: Layers,
    businessProblem: "Interfaces lentas, confusas ou sem responsividade mobile causam abandono imediato (>50% de bounce rate), desperdiçando todo o investimento em tráfego pago.",
    businessSolution: "Construção de aplicações com carregamento inferior a 0.8s, design systems consistentes e microinterações persuasivas que convertem visitantes em clientes pagantes.",
    roiImpact: "Aumento de até 40% na retenção de usuários e aceleração comprovada do funil de vendas.",
    technologies: [
      { name: "Next.js", level: 92, highlight: true },
      { name: "React / Vite.js", level: 96, highlight: true },
      { name: "TypeScript", level: 94, highlight: true },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 & CSS3", level: 98 },
      { name: "Tailwind CSS", level: 96, highlight: true },
      { name: "Shadcn/UI", level: 92 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    title: "2. Backend, Alta Concorrência & Segurança",
    icon: ShieldCheck,
    businessProblem: "Quedas de servidor durante picos de tráfego, latência excessiva em checkouts e brechas de autenticação geram perda direta de faturamento e risco de compliance.",
    businessSolution: "Arquitetura de microsserviços e APIs assíncronas com validação rigorosa de schemas, criptografia corporativa e tipagem de ponta a ponta sem overhead.",
    roiImpact: "Zero interrupções em horários de pico e redução de tempo de resposta para menos de 150ms.",
    technologies: [
      { name: "Node.js", level: 94, highlight: true },
      { name: "TypeScript", level: 94, highlight: true },
      { name: "Express", level: 90 },
      { name: "Fastify", level: 88, highlight: true },
      { name: "tRPC", level: 85, highlight: true },
      { name: "Zod", level: 92 },
      { name: "Bcrypt & JWT", level: 92 },
      { name: "C# (.NET)", level: 82 },
    ],
  },
  {
    title: "3. Dados, ORMs & Tolerância a Falhas",
    icon: Database,
    businessProblem: "Queries desordenadas que travam o banco de dados, divergência de relatórios financeiros e falta de escalabilidade de storage colocam em xeque a operação.",
    businessSolution: "Modelagem relacional e NoSQL com migrações automatizadas, pools de conexões otimizados e orquestração de containers para alta disponibilidade.",
    roiImpact: "Integridade transacional estrita em pagamentos e redução de até 65% nos custos de computação em nuvem.",
    technologies: [
      { name: "PostgreSQL", level: 90, highlight: true },
      { name: "MySQL", level: 92, highlight: true },
      { name: "MongoDB (SQL/NoSQL)", level: 88 },
      { name: "Drizzle ORM", level: 88, highlight: true },
      { name: "Sequelize", level: 85 },
      { name: "Mongoose", level: 86 },
      { name: "Arquitetura MVC", level: 95 },
      { name: "System Design & Kubernetes", level: 82, highlight: true },
    ],
  },
  {
    title: "4. Inteligência Artificial & Automação Operacional",
    icon: Bot,
    businessProblem: "Equipes sobrecarregadas com tarefas manuais repetitivas e perda massiva de potenciais compradores que procuram atendimento à noite ou aos finais de semana.",
    businessSolution: "Agentes autônomos de IA integrados a bases de conhecimento da empresa (RAG) e esteiras de automação de processos com webhooks e WhatsApp 24/7.",
    roiImpact: "Economia de mais de 30 horas semanais em processos manuais e captação ininterrupta de leads qualificados.",
    technologies: [
      { name: "Gemini / LLMs", level: 94, highlight: true },
      { name: "RAG & Bancos Vetoriais", level: 88, highlight: true },
      { name: "Prompt Engineering Avançado", level: 96 },
      { name: "n8n / Workflows & Webhooks", level: 92, highlight: true },
    ],
  },
];

function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = useMemo(() => SKILL_PILLARS, []);

  return (
    <section id="skills" ref={ref} className="py-24 bg-[#030712] relative overflow-hidden border-t border-[#00D2FF]/10">
      {/* Background Glows e Profundidade */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00D2FF]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#F59E0B]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container px-4 sm:px-6 relative z-10 max-w-7xl mx-auto">
        {/* Header da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1124] border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-mono font-semibold mb-4 shadow-[0_0_15px_rgba(0,210,255,0.15)]">
            <Zap className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>ARQUITETURA DE VALOR & ENGENHARIA DE SOFTWARE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#E2E8F0] mb-4">
            Habilidades & <span className="bg-gradient-to-r from-[#00D2FF] to-[#F59E0B] bg-clip-text text-transparent">Arquitetura Estratégica</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00D2FF] to-[#F59E0B] mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Abordagem <strong>Valor Primeiro, Técnica Depois</strong>: não vendo ferramentas soltas; projeto a solução exata para eliminar gargalos comerciais, blindar sistemas e multiplicar o faturamento.
          </p>
        </motion.div>

        {/* Grid dos 4 Pilares */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.15 + index * 0.1, duration: 0.5 }}
              className="group bg-[#0A1124]/90 border border-slate-800/80 hover:border-[#00D2FF]/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#00D2FF]/5 flex flex-col justify-between"
            >
              <div>
                {/* Cabeçalho do Pilar */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E2E8F0] group-hover:text-[#00D2FF] transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                {/* Bloco 1: O Gargalo Comercial (Valor Primeiro) */}
                <div className="mb-4 p-4 rounded-xl bg-red-950/20 border border-red-900/30">
                  <span className="text-[11px] font-mono font-bold text-red-400 uppercase tracking-wider block mb-1">
                    ⚠️ Gargalo Operacional / Risco de Lucro:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.businessProblem}
                  </p>
                </div>

                {/* Bloco 2: A Solução de Engenharia */}
                <div className="mb-4 p-4 rounded-xl bg-[#030712]/70 border border-slate-800">
                  <span className="text-[11px] font-mono font-bold text-[#00D2FF] uppercase tracking-wider block mb-1">
                    ⚙️ Solução Arquitetural Aplicada:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.businessSolution}
                  </p>
                </div>

                {/* Bloco 3: Impacto Financeiro / ROI */}
                <div className="mb-6 p-3.5 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-start gap-2.5">
                  <TrendingUp className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#F59E0B] uppercase tracking-wider block">
                      Retorno Sobre Investimento (ROI):
                    </span>
                    <p className="text-xs font-medium text-slate-200">
                      {pillar.roiImpact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bloco 4: Stacks Tecnológicas Rigorosamente Preservadas */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 block mb-2.5 uppercase tracking-wider">
                  Arsenal Técnico Implementado:
                </span>
                <div className="flex flex-wrap gap-2">
                  {pillar.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all duration-200 ${
                        tech.highlight
                          ? "bg-[#00D2FF]/15 border border-[#00D2FF]/40 text-[#00D2FF] shadow-[0_0_8px_rgba(0,210,255,0.15)]"
                          : "bg-slate-900 border border-slate-700/60 text-slate-300 hover:border-slate-500"
                      }`}
                    >
                      {tech.name}
                    </span>
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
