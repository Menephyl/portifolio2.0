import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState, useRef } from "react";
import { realProjects, projectCategories, type RealProject } from "@/data/realProjects";
import { Button } from "@/components/ui/button";

export default function FeaturedProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const allProjectsRef = useRef<HTMLDivElement>(null);

  const featuredProjects = realProjects.filter((p) => p.featured);
  
  const filteredProjects = selectedCategory === "Todos"
    ? realProjects
    : realProjects.filter((p) => p.category === selectedCategory);

  const scrollToAllProjects = () => {
    allProjectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="projetos" className="py-20 bg-background relative overflow-hidden">
      {/* Featured Projects */}
      <div className="container mx-auto px-4 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seleção dos meus principais trabalhos em Full-Stack, AI Engineering e Web Design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            onClick={scrollToAllProjects}
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
        </motion.div>
      </div>

      {/* All Projects */}
      <div ref={allProjectsRef} className="container mx-auto px-4">
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
            Explore meu portfólio completo organizado por categorias
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className="transition-all duration-300"
              >
                {category === "Todos" && <Filter className="w-4 h-4 mr-2" />}
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: RealProject;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted text-xs rounded-md text-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2">Tecnologias:</p>
          <p className="text-xs text-foreground line-clamp-1">
            {project.technologies.join(" • ")}
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button
              variant="default"
              size="sm"
              className="w-full group/btn"
            >
              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
              Ver Projeto
            </Button>
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="group/btn"
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
