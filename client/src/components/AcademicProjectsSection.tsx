import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { academicProjects, academicSkillCategories, type AcademicProject } from "@/data/academicProjects";
import { GraduationCap, Github, ExternalLink, CheckCircle2, Code2, Sparkles, Wrench } from "lucide-react";
import { Button } from "./ui/button";

export default function AcademicProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedSkill, setSelectedSkill] = useState<string>("Todas as Habilidades");

  const filteredProjects = selectedSkill === "Todas as Habilidades"
    ? academicProjects
    : academicProjects.filter((p) => p.skillCategory === selectedSkill);

  return (
    <section id="academic" ref={ref} className="py-20 bg-background/80 backdrop-blur-sm relative overflow-hidden border-t border-border/60">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-slate-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-semibold mb-4">
            <Wrench className="w-4 h-4" />
            <span>Engenharia & Competências Técnicas Praticadas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Projetos Acadêmicos & <span className="text-primary">Habilidades como Dev</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            A base sólida da minha engenharia de software organizada por domínio técnico: projetos práticos focados em arquitetura de front-end, lógica de algoritmos, manipulação nativa de DOM e consumo de APIs.
          </p>

          {/* Developer Skill Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            {academicSkillCategories.map((skill) => (
              <Button
                key={skill}
                onClick={() => setSelectedSkill(skill)}
                variant={selectedSkill === skill ? "default" : "outline"}
                size="sm"
                className={`text-xs sm:text-sm transition-all duration-300 ${
                  selectedSkill === skill
                    ? "shadow-md shadow-primary/25"
                    : "hover:border-primary/40"
                }`}
              >
                {skill}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Academic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.45 }}
              className="bg-card border border-border/80 rounded-2xl p-6 flex flex-col justify-between hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group relative"
            >
              <div>
                {/* Skill Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                    {project.skillCategory}
                  </span>
                  <span className="text-[11px] font-medium text-muted-foreground px-2 py-0.5 rounded bg-muted/60">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Secondary Institution Context */}
                <p className="text-[11px] text-muted-foreground mb-3 font-mono">
                  Base de Estudo: {project.institution}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Habilidades Adquiridas (Highlight Central) */}
                <div className="mb-5 p-3.5 rounded-xl bg-muted/30 border border-border/60">
                  <h4 className="text-xs font-bold text-foreground mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span>Habilidades Técnicas Adquiridas:</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {project.acquiredSkills.map((skill, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resultado Acadêmico */}
                <div className="mb-5 text-xs text-foreground/90 bg-primary/5 border border-primary/15 p-2.5 rounded-lg">
                  <span className="font-semibold text-primary">Resultado de Aprendizado: </span>
                  <span className="text-muted-foreground">{project.academicResult}</span>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-[11px] font-semibold text-muted-foreground mb-1.5">Tecnologias Utilizadas:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded bg-muted text-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2.5 pt-4 border-t border-border/60 mt-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs h-9 hover:border-primary/50 group/btn"
                    >
                      <Github className="w-3.5 h-3.5 mr-1.5 group-hover/btn:rotate-12 transition-transform" />
                      Repositório GitHub
                    </Button>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="default"
                      size="sm"
                      className="text-xs h-9 px-3 group/btn"
                      title="Ver projeto online"
                    >
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

