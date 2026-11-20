import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, FileText, Zap, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Typewriter } from "./ui/typewriter";
import { memo, useCallback, useState, useEffect, useRef } from "react";

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const latestTargetTimeRef = useRef(0);

  // Estados de carregamento e scrollytelling
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showYan3, setShowYan3] = useState(true);

  // Alternância da imagem Dançarino <-> Desenvolvedor
  useEffect(() => {
    const timer = setInterval(() => {
      setShowYan3((prev) => !prev);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Pular introdução diretamente para o bloco da Hero
  const handleSkipIntro = useCallback(() => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const scrollDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + scrollDistance * 0.65;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  }, []);

  // Preloader com fallback obrigatório e listener de seeked para resincronização suave
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => {
      setVideoLoaded(true);
    };

    // Resincronização ao concluir um seek pendente
    const onSeeked = () => {
      if (!video || !video.duration) return;
      const target = latestTargetTimeRef.current;
      if (!video.seeking && video.readyState >= 2 && Math.abs(video.currentTime - target) > 0.03) {
        video.currentTime = target;
      }
    };

    video.addEventListener("canplaythrough", onCanPlay);
    video.addEventListener("seeked", onSeeked);

    if (video.readyState >= 2) {
      setVideoLoaded(true);
    }

    // Progresso simulado para feedback visual imediato
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 20;
      });
    }, 80);

    const fallbackTimeout = setTimeout(() => {
      setVideoLoaded(true);
      clearInterval(interval);
    }, 2500);

    return () => {
      video.removeEventListener("canplaythrough", onCanPlay);
      video.removeEventListener("seeked", onSeeked);
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  // Scroll Binding do Vídeo (480vh ➔ 100vh Sticky) blindado com RAF e readyState
  useEffect(() => {
    let ticking = false;

    const syncVideoTime = (progress: number) => {
      const video = videoRef.current;
      if (!video || !video.duration || isNaN(video.duration)) return;

      // De p = 0.0 até p = 0.75: o vídeo avança até o clímax da rotação
      // Acima de p = 0.75, segura no frame de clímax (duration - 0.05) sem fechar para preto
      const videoProgress = Math.min(progress / 0.75, 1);
      const targetTime = Math.min(videoProgress * video.duration, video.duration - 0.05);
      latestTargetTimeRef.current = targetTime;

      // Blindagem: só dispara seek se o vídeo tiver dados (readyState >= 2) e não estiver ocupado seeking
      if (!video.seeking && video.readyState >= 2) {
        if (Math.abs(video.currentTime - targetTime) > 0.02) {
          video.currentTime = targetTime;
        }
      }
    };

    const updateScrollBinding = () => {
      if (!containerRef.current) {
        ticking = false;
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) {
        ticking = false;
        return;
      }

      // Progresso normalizado de 0 a 1
      const progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      setScrollProgress(progress);
      syncVideoTime(progress);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScrollBinding);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateScrollBinding();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [videoLoaded]);

  // Opacidades e transformações calculadas do progresso p (0.0 -> 1.0)
  // Crossfade sobreposto contínuo (zero tela preta, transição imediata):
  // 1. HUD do Átomo: visível em 0.0 -> 0.35
  const hudOpacity = Math.max(0, 1 - scrollProgress / 0.35);

  // 2. Vídeo: 1.0 até 0.35, depois desce suavemente de 1.0 para 0.20 (aura quântica contínua de fundo, NUNCA preto)
  const videoOpacity =
    scrollProgress < 0.35
      ? 1
      : Math.max(0.20, 1 - ((scrollProgress - 0.35) / 0.35) * 0.80);

  // 3. Escala progressiva: scale(1) -> scale(1.15)
  const videoScale = 1 + scrollProgress * 0.15;

  // 4. Hero Content: começa a surgir já em 0.20 e atinge 100% em 0.60
  // Garante que o usuário NUNCA role e encontre uma tela vazia
  const heroContentOpacity =
    scrollProgress < 0.20
      ? 0
      : Math.min((scrollProgress - 0.20) / 0.40, 1);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[480vh] bg-[#030712]"
    >
      {/* Preloader Cinemático de Entrada */}
      <AnimatePresence>
        {(!videoLoaded || loadingProgress < 100) && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-[#E2E8F0]"
          >
            <div className="relative w-28 h-28 flex items-center justify-center mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-[#00D2FF]/20 animate-ping" />
              <div className="absolute inset-2 rounded-full border-2 border-t-[#00D2FF] border-r-[#F59E0B] border-b-transparent border-l-transparent animate-spin" />
              <img src="/react-logo.png" alt="Carregando" className="w-12 h-12 object-contain" />
            </div>
            <h2 className="text-xl font-bold tracking-wider text-[#E2E8F0] mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] animate-pulse" />
              INICIALIZANDO PLATAFORMA QUÂNTICA
            </h2>
            <p className="text-xs text-slate-400 font-mono mb-4">
              Pipeline 60FPS • Resolução 1080p • Scrollytelling Ativo
            </p>
            <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00D2FF] to-[#F59E0B] transition-all duration-200"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Container 100vh com o Scrollytelling */}
      <div className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden flex items-center justify-center z-10">
        {/* Background Video (Átomo 60FPS com Keyint 1) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#030712]">
          {/* Fallback visual contínuo (Poster exato no fundo imediato para blindar contra qualquer frame preto) */}
          <img
            src="/hero-poster.jpg"
            alt="Átomo Cósmico Background"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            style={{
              opacity: videoOpacity,
              transform: `scale(${videoScale})`,
              filter: `brightness(${0.75 + scrollProgress * 0.25}) contrast(1.15)`,
            }}
          />

          <video
            ref={videoRef}
            src="/hero-atom-optimized.mp4"
            poster="/hero-poster.jpg"
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-transform duration-75 ease-out"
            style={{
              opacity: videoOpacity,
              transform: `scale(${videoScale})`,
              filter: `brightness(${0.75 + scrollProgress * 0.25}) contrast(1.15)`,
            }}
          />

          {/* Vinheta Cósmica e Camadas de Profundidade */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,7,18,0.2)_0%,rgba(3,7,18,0.85)_80%,rgba(3,7,18,0.98)_100%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60 pointer-events-none" />
        </div>

        {/* Botão Discreto: Pular Intro */}
        {scrollProgress < 0.65 && (
          <button
            onClick={handleSkipIntro}
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-30 px-3.5 py-1.5 rounded-full bg-[#0A1124]/90 border border-[#00D2FF]/40 text-xs font-mono text-slate-200 hover:text-[#00D2FF] hover:border-[#00D2FF] backdrop-blur-md shadow-[0_0_15px_rgba(0,210,255,0.2)] transition-all duration-300 flex items-center gap-1.5 group cursor-pointer"
            title="Pular animação e ir direto para o conteúdo"
          >
            <span>Pular Intro</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#00D2FF] group-hover:translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* HUD e Telemetria do Átomo (Visível durante o scroll de abertura) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6 sm:p-10 transition-opacity duration-300"
          style={{ opacity: hudOpacity }}
        >
          {/* Top Info HUD */}
          <div className="flex justify-between items-center max-w-7xl mx-auto w-full pt-16 sm:pt-20">
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A1124]/85 border border-[#00D2FF]/30 backdrop-blur-md text-[11px] font-mono text-[#00D2FF]">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
              <span>SISTEMA ATÔMICO ENERGIZADO</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A1124]/85 border border-[#F59E0B]/30 backdrop-blur-md text-[11px] font-mono text-[#F59E0B]">
              <Zap className="w-3.5 h-3.5" />
              <span>ROTAÇÃO: {Math.round(scrollProgress * 100)}%</span>
            </div>
          </div>

          {/* Central Call to Action de Scroll */}
          <div className="text-center my-auto">
            <motion.p
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-xs sm:text-sm uppercase tracking-[0.3em] font-mono text-[#00D2FF] drop-shadow-[0_0_10px_rgba(0,210,255,0.8)]"
            >
              Role para acelerar a rotação e convergir o sistema ⬇
            </motion.p>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="max-w-md mx-auto w-full">
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1.5">
              <span>ESTADO QUÂNTICO</span>
              <span>{scrollProgress < 0.4 ? "CARREGANDO NÚCLEO" : scrollProgress < 0.75 ? "DESCARGA ELETROMAGNÉTICA" : "CONVERGÊNCIA CONCLUÍDA"}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-900/80 rounded-full overflow-hidden border border-slate-700/60">
              <div
                className="h-full bg-gradient-to-r from-[#00D2FF] via-[#00D2FF] to-[#F59E0B] transition-all duration-75"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* HERO SECTION PRINCIPAL (Fixada com Transição Suave Sobreposta) */}
        <div
          className="container relative z-20 px-4 sm:px-6 py-12 transition-all duration-300 max-w-7xl mx-auto"
          style={{
            opacity: heroContentOpacity,
            pointerEvents: heroContentOpacity > 0.4 ? "auto" : "none",
            transform: `translateY(${(1 - heroContentOpacity) * 30}px)`,
          }}
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Coluna Esquerda: Apresentação & Autoridade */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Tag Superior */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1124] border border-[#00D2FF]/30 shadow-[0_0_15px_rgba(0,210,255,0.15)]">
                <span className="text-base select-none">⚡👨‍💻</span>
                <span className="text-xs sm:text-sm text-slate-200 font-medium">
                  Yan Menephyl | Tech Lead & Engenheiro de Software
                </span>
              </div>

              {/* Título Monumental Typewriter */}
              <div className="min-h-[110px] sm:min-h-[140px] md:min-h-[155px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  <Typewriter
                    texts={[
                      "De Dançarino de Salão a Analista de Sistemas.",
                      "Desenvolvedor Frontend (React & TypeScript).",
                      "Desenvolvedor Full Stack (Node.js & APIs).",
                      "Tech Lead & CEO — Prime Team.",
                      "+130 Templates de Sites e 16 Sistemas em Produção."
                    ]}
                    typingSpeed={55}
                    deletingSpeed={28}
                    delayBeforeDelete={2200}
                  />
                </h1>
              </div>

              {/* Descrição Focada em Resolução de Problemas & Arquitetura */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Gestão de IA e Automações com n8n — Sistemas que atendem e convertem 24 horas por dia. 
                Construção de plataformas escaláveis de alta concorrência com React, Node.js e bancos relacionais, eliminando perda de vendas por lentidão e gargalos operacionais.
              </p>

              {/* Métrica Real & Comprovável dos Sistemas (Destaque Exclusivo em Âmbar) */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F59E0B]"></span>
                  </span>
                  <span>+30 Projetos em Produção • Sistemas Escaláveis & Automações 24/7</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0A1124] border border-slate-700/80 text-slate-300 font-medium text-xs">
                  <span>🕺 Personal Dancer no Salão</span>
                </div>
              </div>

              {/* CTAs de Conversão (Âmbar para Alta Conversão / Ciano para Portfólio) */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-1">
                {/* Botão de Ação Primário em Âmbar */}
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-auto bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-slate-950 font-bold px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-xl shadow-lg shadow-[#F59E0B]/25 hover:shadow-[#F59E0B]/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Solicitar Diagnóstico Comercial
                </Button>

                {/* Botão Secundário em Ciano */}
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("projetos")}
                  className="w-full sm:w-auto border-2 border-[#00D2FF]/40 text-[#00D2FF] hover:bg-[#00D2FF]/10 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Explorar +30 Projetos
                  <svg className="w-5 h-5 ml-1 text-[#00D2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>

                {/* Live no YouTube */}
                <a
                  href="https://www.youtube.com/@menephylDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold px-6 sm:px-7 py-5 sm:py-6 text-sm sm:text-base rounded-xl shadow-lg shadow-red-900/30 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                    </span>
                    <span className="relative font-bold tracking-wide">LIVE NO YOUTUBE</span>
                  </Button>
                </a>
              </div>

              {/* Links Sociais e Download de CV */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/Menephyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-[#0A1124] border border-[#00D2FF]/20 flex items-center justify-center hover:bg-[#00D2FF]/15 hover:border-[#00D2FF] transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-[#00D2FF] transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yanisonelpereira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-[#0A1124] border border-[#00D2FF]/20 flex items-center justify-center hover:bg-[#00D2FF]/15 hover:border-[#00D2FF] transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-[#00D2FF] transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/yan_menephyl_works"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-[#0A1124] border border-[#00D2FF]/20 flex items-center justify-center hover:bg-[#00D2FF]/15 hover:border-[#00D2FF] transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-slate-300 group-hover:text-[#00D2FF] transition-colors" />
                </a>

                {/* Download CV */}
                <a
                  href="/assets/yan_isonel_full_stack.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#0A1124] border border-slate-700 hover:border-[#00D2FF]/60 hover:bg-[#00D2FF]/10 text-slate-200 hover:text-[#00D2FF] font-bold rounded-lg transition-all duration-300 group text-xs sm:text-sm ml-1"
                >
                  <FileText className="w-4 h-4 text-[#00D2FF]" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* Coluna Direita: Foto 3D com Moldura Orbital (Ancoragem da Jornada 10) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow Orbital Holográfico Ciano & Âmbar */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#00D2FF]/30 via-transparent to-[#F59E0B]/25 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Anel Orbital 3D Animado */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 rounded-full border border-[#00D2FF]/40 p-2 shadow-[0_0_30px_rgba(0,210,255,0.2)]">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-800 bg-[#0A1124] shadow-2xl">
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

                  {/* Detalhe de Borda Holográfica */}
                  <div className="absolute inset-0 rounded-full border border-[#F59E0B]/30 animate-pulse pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Indicador de continuação de rolagem */}
          <div className="mt-8 sm:mt-12 text-center">
            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#00D2FF] transition-colors font-mono"
            >
              <span>CONHECER ARQUITETURA & HISTÓRIA</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
