import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, memo, useMemo } from "react";

// Categorias de Skills baseadas no prompt C.O.R.P.O
const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Vite.js", level: 95, color: "from-cyan-500 to-blue-500", evidence: "Base de +20 projetos, incluindo Brazukas Delivery e A Plataforma Prime Team." },
      { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-500", evidence: "Tipagem forte implementada em sistemas de alta complexidade (E-Commerce Bianca Loja)." },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js & Express", level: 85, color: "from-green-500 to-emerald-500", evidence: "API REST e SSR Serverless nas plataformas SaaS e no App de IA Fitness." },
      { name: "Trpc", level: 80, color: "from-blue-600 to-purple-600", evidence: "Comunicação Type-Safe end-to-end utilizada na plataforma do Brazukas Delivery." },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      { name: "MySQL", level: 85, color: "from-blue-400 to-blue-600", evidence: "Gestão robusta relacional no Brazukas Delivery e Plataformas de Usuários (Sage)." },
      { name: "Drizzle ORM", level: 80, color: "from-orange-400 to-red-400", evidence: "Usado para modelagem segura e migrations em sistemas Full Stack recentes." },
    ],
  },
  {
    title: "UI / Design",
    skills: [
      { name: "Tailwind CSS", level: 95, color: "from-teal-500 to-cyan-500", evidence: "Design Systems responsivos e Pixel Perfect em 100% das Landing Pages." },
      { name: "Framer Motion", level: 85, color: "from-purple-500 to-indigo-500", evidence: "Microinterações de alto impacto no portfólio oficial e E-book Vida Moderna." },
    ],
  },
  {
    title: "Automação / IA",
    skills: [
      { name: "Gemini / LLMs", level: 90, color: "from-blue-400 to-cyan-400", evidence: "Implementação de assistentes de IA inteligentes e chat-widgets serverless." },
      { name: "RAG & Vetores", level: 85, color: "from-indigo-400 to-purple-400", evidence: "Uso de Retrieval-Augmented Generation para consultas em bases de dados personalizadas." },
      { name: "Prompt Engineering", level: 95, color: "from-orange-400 to-yellow-400", evidence: "Domínio de técnicas avançadas para extração máxima de performance dos modelos." },
      { name: "N8N / Automações", level: 80, color: "from-red-500 to-orange-500", evidence: "Workflow de automação para disparos de WhatsApp e webhooks integrados." },
    ],
  },
  {
    title: "DevOps / Tools",
    skills: [
      { name: "Vercel / Edge", level: 90, color: "from-gray-700 to-black", evidence: "Hospedagem ágil e funções Serverless aplicadas nos 15 maiores cases." },
      { name: "Git / GitHub", level: 95, color: "from-orange-500 to-red-500", evidence: "Versionamento contínuo em equipe (Ordem dos Seraphim)." },
    ],
  },
];

function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = useMemo(() => SKILL_CATEGORIES, []);

  return (
    <section id="skills" ref={ref} className="py-20 bg-background/60 backdrop-blur-sm relative overflow-hidden">
      {/* Glow Effects similar to Hero */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Background Intercalado Átomo React */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('/react-logo.png')] bg-no-repeat bg-fixed bg-center" 
        style={{ backgroundSize: '40%' }}
      />
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Habilidades & <span className="text-primary">Tecnologias</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ferramentas e tecnologias que utilizo para construir soluções modernas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.5 }}
              className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full" />
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
                  >
                    <div className="flex flex-col mb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-foreground font-semibold">{skill.name}</span>
                        <span className="text-sm font-bold text-primary">{skill.level}%</span>
                      </div>
                      <span className="text-xs text-muted-foreground leading-tight italic">
                        {skill.evidence}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SkillsSection);
