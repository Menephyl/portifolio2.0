import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, memo, useMemo } from "react";

// Constantes extraídas para evitar recriação
const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, color: "from-cyan-500 to-blue-500" },
      { name: "TypeScript", level: 85, color: "from-blue-500 to-indigo-500" },
      { name: "Tailwind CSS", level: 95, color: "from-teal-500 to-cyan-500" },
      { name: "HTML5/CSS3", level: 95, color: "from-orange-500 to-red-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
      { name: "Express", level: 75, color: "from-gray-600 to-gray-800" },
      { name: "tRPC", level: 70, color: "from-blue-600 to-purple-600" },
      { name: "MySQL", level: 75, color: "from-blue-400 to-blue-600" },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git/GitHub", level: 90, color: "from-gray-700 to-black" },
      { name: "Vite", level: 85, color: "from-purple-500 to-pink-500" },
      { name: "VS Code", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "Figma", level: 70, color: "from-red-500 to-purple-500" },
    ],
  },
  {
    title: "UI/UX",
    skills: [
      { name: "Design Responsivo", level: 90, color: "from-pink-500 to-rose-500" },
      { name: "Framer Motion", level: 80, color: "from-purple-500 to-indigo-500" },
      { name: "Acessibilidade", level: 85, color: "from-green-500 to-teal-500" },
      { name: "Prototipação", level: 75, color: "from-orange-500 to-yellow-500" },
    ],
  },
];

function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = useMemo(() => SKILL_CATEGORIES, []);

  return (
    <section id="skills" ref={ref} className="py-20 bg-card relative overflow-hidden">
      <div className="container px-6">
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
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
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
