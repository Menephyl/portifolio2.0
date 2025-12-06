import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { trpc } from "@/lib/trpc";
import { ExternalLink, Github, Star, GitFork, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTag, setSelectedTag] = useState<string>("Todos");

  const { data: repos, isLoading, error } = trpc.projects.getGitHubRepos.useQuery();

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

  // Extract all unique languages/tags
  const allTags = useMemo(() => {
    if (!repos) return [];
    const tags = new Set<string>();
    repos.forEach((repo) => {
      if (repo.language) tags.add(repo.language);
      repo.tags.forEach((tag) => tags.add(tag));
    });
    return ["Todos", ...Array.from(tags)];
  }, [repos]);

  // Filter repos based on selected tag
  const filteredRepos = useMemo(() => {
    if (!repos) return [];
    if (selectedTag === "Todos") return repos;
    return repos.filter(
      (repo) =>
        repo.language === selectedTag ||
        repo.tags.includes(selectedTag.toLowerCase())
    );
  }, [repos, selectedTag]);

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-500",
      HTML: "bg-orange-500",
      CSS: "bg-purple-500",
      Python: "bg-green-500",
      Java: "bg-red-500",
      React: "bg-cyan-500",
      Outros: "bg-gray-500",
    };
    return colors[language] || "bg-gray-500";
  };

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-card">
        <div className="container px-6">
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-card">
        <div className="container px-6">
          <div className="text-center text-muted-foreground">
            Erro ao carregar projetos. Tente novamente mais tarde.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" ref={ref} className="py-20 bg-card">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos meus projetos mais recentes no GitHub
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "hover:border-primary/50"
              }`}
            >
              {tag}
              {tag !== "Todos" && (
                <span className="ml-2 text-xs opacity-70">
                  {
                    repos?.filter(
                      (r) =>
                        r.language === tag || r.tags.includes(tag.toLowerCase())
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
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="group bg-background border border-border rounded-xl p-6 h-full flex flex-col hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-1">
                          {repo.name.replace(/_/g, " ").replace(/-/g, " ")}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-3 h-3 rounded-full ${getLanguageColor(
                              repo.language
                            )}`}
                          />
                          <span className="text-sm text-muted-foreground">
                            {repo.language}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                      {repo.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forks}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {repo.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3">
                      <a
                        href={repo.url}
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
                          Ver Código
                        </Button>
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            size="sm"
                            className="w-full bg-primary hover:bg-primary/90"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver Site
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {filteredRepos.length > 3 && (
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
              Ver Todos os Projetos
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
