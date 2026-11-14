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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/70 shadow-sm"
            >
              <span className="text-xl">⚡👨‍💻</span>
              <span className="text-sm text-slate-300 font-medium">
                Yan Menephyl | Tech Lead & Consultor Estratégico
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <Typewriter
                  texts={[
                    "De Dançarino de Salão a Analista de Sistemas.",
                    "Desenvolvedor Frontend (React & TypeScript).",
                    "Desenvolvedor Full Stack (Node.js & APIs).",
                    "Tech Lead & CEO — Prime Team.",
                    "+130 Templates de Sites e 16 Sistemas em Produção."
                  ]}
                  typingSpeed={60}
                  deletingSpeed={30}
                  delayBeforeDelete={2000}
                />
              </h1>
            </motion.div>

            {/* Description com Injeção de ROI & Valor Comercial */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              Gestão de IA e Automações com n8n — Sistemas que convertem e atendem todo dia, toda hora!
              Transformo ideias complexas em plataformas escaláveis com React, Node.js e IA.
              Arquitetura de software de alta performance estruturada para gerar lucro direto, eliminar lentidão e reduzir custos operacionais.
            </motion.p>

            {/* Conversion & Value Badges */}
            <div className="flex flex-wrap gap-2.5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              >
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span>ROI Focado: +R$ 1.8M Gerados em Varejo & Soluções Digitais</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-300 font-semibold text-xs"
              >
                <span>🕺 Breve: Página de Personal Dancer</span>
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-lg shadow-lg shadow-emerald-500/25 transition-all duration-300"
              >
                Solicitar Diagnóstico Comercial
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projetos")}
                className="w-full sm:w-auto border-2 border-slate-700 hover:border-emerald-500/60 hover:bg-slate-900/80 text-slate-200 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-lg transition-all duration-300"
              >
                Explorar +30 Projetos
                <svg
                  className="w-5 h-5 ml-2 text-emerald-400"
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
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-lg shadow-lg shadow-red-900/30 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
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
                className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/yanisonelpereira"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/yan_menephyl_works"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Download CV Button */}
              <a
                href="/assets/yan_isonel_full_stack.pdf"
                download
                className="flex items-center gap-2 px-5 py-3 bg-slate-900/90 border border-slate-700 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-slate-200 hover:text-emerald-400 font-bold rounded-lg transition-all duration-300 group ml-2"
              >
                <FileText className="w-5 h-5 text-emerald-400" />
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
              {/* Subtle Neutral Glow Effect (Fundo azul removido) */}
              <motion.div
                className="absolute inset-0 rounded-full bg-foreground/5 blur-2xl"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Image Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-border/40 p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background bg-card shadow-2xl">
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
                  className="absolute inset-0 rounded-full border border-border/60 hover:border-border transition-colors"
                  animate={{
                    scale: [1, 1.04, 1],
                    opacity: [0.4, 0.7, 0.4],
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
