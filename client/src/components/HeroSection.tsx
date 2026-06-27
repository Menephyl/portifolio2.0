import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Typewriter } from "./ui/typewriter";
import { memo, useCallback, useState, useEffect } from "react";

function HeroSection() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const [showYan3, setShowYan3] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowYan3(prev => !prev);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container relative z-10 px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="text-2xl">🤖👨‍💻</span>
              <span className="text-sm text-muted-foreground">
                Eaeee! Sou Yan Menephyl ! Estou aqui pra somar!
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="min-h-[140px] md:min-h-[160px]"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <Typewriter
                  texts={[
                    "De Dançarino de Salão a Analista de Sistemas.",
                    "Desenvolvedor Frontend (React & TypeScript).",
                    "Desenvolvedor Full Stack (Node.js & APIs).",
                    "Tech Lead & CEO — Prime Team.",
                    "+30 Projetos Colocados em Produção."
                  ]}
                  typingSpeed={60}
                  deletingSpeed={30}
                  delayBeforeDelete={2000}
                />
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Gestão de IA - Automações que convertem e atendem todo dia toda hora!
              Transformo ideias complexas em plataformas escaláveis com React, Node.js e IA.
              Experiência comprovada em entrega de produtos estruturados do design à arquitetura de dados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary font-bold shadow-[0_0_10px_rgba(0,209,255,0.2)]"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              LOGO MAIS PÁGINA DE PERSONAL DANCER!!
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg shadow-[#25D366]/20 transition-all duration-300"
              >
                Solicitar Proposta
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projetos")}
                className="border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300"
              >
                Explorar +30 Projetos
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <a
                href="https://www.youtube.com/@menephylDev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg shadow-[#FF0000]/30 transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/10 group-hover:bg-transparent transition-colors"></span>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  <span className="relative font-bold tracking-wide">LIVE NO YOUTUBE</span>
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/Menephyl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/yanisonelpereira"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/yan_menephyl_works"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              {/* Download CV Button */}
              <a
                href="/assets/yan_isonel_full_stack.pdf"
                download
                className="flex items-center gap-2 px-5 py-3 bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/50 text-primary font-bold rounded-lg transition-all duration-300 group ml-2"
              >
                <FileText className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/30 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-cyan-400/20 p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background">
                    <img
                      src="/assets/yan3.png"
                      alt="Yan Menephyl - Dançarino"
                      width="384"
                      height="384"
                      loading="eager"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${showYan3 ? 'opacity-100' : 'opacity-0'}`}
                      onError={(e) => { e.currentTarget.src = "/assets/yan3.jpg"; }}
                    />
                    <img
                      src="/profile-professional.jpg"
                      alt="Yan Menephyl - Desenvolvedor Full-Stack"
                      width="384"
                      height="384"
                      loading="eager"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${showYan3 ? 'opacity-0' : 'opacity-100'}`}
                    />
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/50"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Rolar para baixo"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
