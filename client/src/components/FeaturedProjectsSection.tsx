import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter, GraduationCap, TrendingUp, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import { realProjects, projectCategories, type RealProject } from "@/data/realProjects";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function FeaturedProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [showAll, setShowAll] = useState(false);
  const allProjectsRef = useRef<HTMLDivElement>(null);

  const featuredProjects = realProjects.filter((p) => p.featured && !p.tags.includes("Em Andamento"));
  const inProgressProjects = realProjects.filter((p) => p.tags.includes("Em Andamento"));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: true })]
  );
  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const filteredProjects = selectedCategory === "Todos"
    ? realProjects
    : realProjects.filter((p) => p.category === selectedCategory);

  const handleShowAllProjects = () => {
    setShowAll(true);
    setTimeout(() => {
      allProjectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section id="projetos" className="py-20 bg-background/60 backdrop-blur-sm relative overflow-hidden">
      <div id="projects" className="absolute -top-24 pointer-events-none" />
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Background Intercalado Átomo React */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('/react-logo.png')] bg-no-repeat bg-fixed bg-center" 
        style={{ backgroundSize: '40%' }}
      />
      
      {/* Featured Projects */}
      <div className="container mx-auto px-4 sm:px-6 mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Projetos em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Explorando uma base rica de <strong className="text-primary">+30 projetos em produção</strong> através de arquitetura Full-Stack, AI Engineering e UX Design de alta resolução.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.slice(0, 6).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Projetos em Andamento - Carrossel */}
        {inProgressProjects.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-3">
              Projetos em <span className="text-primary">Andamento</span>
            </h3>
            <p className="text-center text-muted-foreground text-sm max-w-xl mx-auto mb-8 sm:mb-10">
              Sistemas e arquiteturas em desenvolvimento contínuo sincronizados com repositórios no GitHub.
            </p>
            <div className="relative max-w-6xl mx-auto px-1 sm:px-4">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4 sm:gap-6 py-4 px-1">
                  {inProgressProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                    >
                      <ProjectCard project={project} index={index} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Desktop Nav Arrows */}
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

              {/* Mobile Swipe Buttons */}
              <div className="flex md:hidden justify-center items-center gap-4 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollPrev}
                  className="rounded-full h-9 w-9 p-0"
                  aria-label="Anterior"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>
                <span className="text-xs text-muted-foreground">Deslize para ver mais</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollNext}
                  className="rounded-full h-9 w-9 p-0"
                  aria-label="Próximo"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          {!showAll && (
            <Button
              onClick={handleShowAllProjects}
              size="lg"
              variant="outline"
              className="group"
            >
              Ver Todos os Projetos
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                ↓
              </motion.span>
            </Button>
          )}
        </motion.div>
      </div>

      {/* All Projects */}
      <AnimatePresence>
        {showAll && (
          <motion.div 
            ref={allProjectsRef} 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
          >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Todos os <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Explore o escopo integral de mais de 30 projetos distribuídos por nichos estratégicos.
          </p>

          {/* Category Filters Orientados a Resultados */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto px-2">
            {projectCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={`transition-all duration-300 text-xs sm:text-sm rounded-lg ${
                  selectedCategory === category 
                    ? "shadow-lg shadow-primary/25 bg-primary text-primary-foreground font-semibold" 
                    : "hover:border-primary/50"
                }`}
              >
                {category === "Todos" && <Filter className="w-3.5 h-3.5 mr-1.5" />}
                {category === "Captação & Vendas de Alta Conversão" && <TrendingUp className="w-3.5 h-3.5 mr-1.5" />}
                {category === "Automação & Atendimento com IA" && <Sparkles className="w-3.5 h-3.5 mr-1.5" />}
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </motion.div>
          )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface ProjectCardProps {
  project: RealProject;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="group relative bg-card border border-border/80 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Image (Clean & Sem poluição de texto) */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-muted/60 shrink-0">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/assets/BrazukasDelivery.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge - Discreto e Sem cobrir imagem */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 bg-background/85 backdrop-blur-md border border-border/70 text-foreground text-[11px] font-medium rounded-full shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-3 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Business Result / Impacto do Projeto */}
        {project.businessResult && (
          <div className="mb-3.5 p-2.5 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30 shadow-[0_0_12px_rgba(245,158,11,0.1)]">
            <p className="text-[11px] font-bold text-[#F59E0B] mb-1 flex items-center gap-1.5 font-mono">
              <TrendingUp className="w-3.5 h-3.5 shrink-0" />
              <span>Impacto Comercial / ROI:</span>
            </p>
            <p className="text-xs text-[#E2E8F0] font-medium leading-snug">
              {project.businessResult}
            </p>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 text-[11px] rounded-md font-medium ${
                tag === "Em Andamento" 
                  ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30" 
                  : tag === "Acadêmico"
                  ? "bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30"
                  : "bg-muted text-foreground"
              }`}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-1.5 py-0.5 bg-muted text-[11px] rounded-md text-muted-foreground">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-3">
          <p className="text-[11px] text-muted-foreground mb-1 font-medium">Tecnologias:</p>
          <p className="text-xs text-foreground line-clamp-1 font-mono">
            {project.technologies.join(" • ")}
          </p>
        </div>

        {/* Developer Skills / Habilidades de Desenvolvedor */}
        {project.developerSkills && project.developerSkills.length > 0 && (
          <div className="mb-4 p-2.5 bg-muted/30 border border-border/60 rounded-lg">
            <p className="text-[11px] font-semibold text-primary mb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 shrink-0" />
              <span>Habilidades de Desenvolvedor:</span>
            </p>
            <p className="text-[11px] text-muted-foreground leading-snug">
              {project.developerSkills.join(" • ")}
            </p>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-2.5 mt-auto pt-3 border-t border-border/50">
          {hasLiveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="default"
                size="sm"
                className="w-full text-xs group/btn h-9"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
                Ver Projeto
              </Button>
            </a>
          ) : (
            <span className="flex-1">
              <Button
                variant="secondary"
                size="sm"
                disabled
                className="w-full text-xs h-9 opacity-70"
              >
                Demonstração Privada
              </Button>
            </span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Ver código no GitHub"
            >
              <Button
                variant="outline"
                size="sm"
                className="group/btn h-9 px-3 hover:border-primary/50"
                aria-label={`Ver repositório de ${project.title} no GitHub`}
              >
                <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
