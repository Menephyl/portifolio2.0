import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { staticProjects } from "@/data/projects";

export default function ProjectsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTech, setSelectedTech] = useState<string>("Todos");

  // Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Extract all unique technologies
  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    staticProjects.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech));
    });
    return ["Todos", ...Array.from(techs)];
  }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (selectedTech === "Todos") return staticProjects;
    return staticProjects.filter((project) =>
      project.technologies.includes(selectedTech)
    );
  }, [selectedTech]);

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      React: "bg-cyan-500",
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      HTML: "bg-orange-500",
      HTML5: "bg-orange-500",
      CSS: "bg-purple-500",
      CSS3: "bg-purple-500",
      TailwindCSS: "bg-teal-500",
      Vite: "bg-violet-500",
      API: "bg-green-500",
    };
    return colors[tech] || "bg-gray-500";
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-card relative overflow-hidden">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi. Todos foram versionados no
            Git e GitHub, e hospedados publicamente no Vercel.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTechs.map((tech) => (
            <Button
              key={tech}
              variant={selectedTech === tech ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTech(tech)}
              className={`rounded-full transition-all duration-300 ${
                selectedTech === tech
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "hover:border-primary/50"
              }`}
            >
              {tech}
              {tech !== "Todos" && (
                <span className="ml-2 text-xs opacity-70">
                  {
                    staticProjects.filter((p) =>
                      p.technologies.includes(tech)
                    ).length
                  }
                </span>
              )}
            </Button>
          ))}
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="group bg-background border border-border rounded-xl overflow-hidden h-full flex flex-col hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {project.featured && (
                        <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                          Destaque
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs px-2 py-1 rounded-full ${getTechColor(
                              tech
                            )} text-white font-medium`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
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
                              className="w-full group-hover:border-primary/50 transition-colors"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Código
                            </Button>
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button
                              size="sm"
                              className="w-full bg-primary hover:bg-primary/90"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {filteredProjects.length > 3 && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-card border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-lg z-10"
                aria-label="Projeto anterior"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-card border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-lg z-10"
                aria-label="Próximo projeto"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Menephyl?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="group border-primary/20 hover:border-primary/50 hover:bg-primary/5"
            >
              Ver Todos no GitHub
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
