import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useMemo, memo, useRef } from "react";

// Array de imagens dos depoimentos reais (screenshots do LinkedIn)
const RECOMMENDATION_IMAGES = [
  "/assets/recomend (1).png",
  "/assets/recomend (2).png",
  "/assets/recomend (3).png",
  "/assets/recomend (4).png",
  "/assets/recomend (5).png",
  "/assets/recomend (6).png",
  "/assets/recommend(7).png",
];

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-background/40 backdrop-blur-md relative overflow-hidden">
      {/* Background Animated Blue Glows (Hero Style) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full opacity-50 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full opacity-30" />
      </div>

      {/* Background Intercalado Átomo React */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[url('/react-logo.png')] bg-no-repeat bg-fixed bg-center" 
        style={{ backgroundSize: '50%' }}
      />

      <div className="container px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            O que dizem de <span className="text-primary bg-clip-text">Yan</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(0,209,255,0.5)]" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Depoimentos reais extraídos diretamente do meu perfil no <span className="text-primary font-bold">LinkedIn</span>.
          </p>
        </motion.div>

        {/* Testimonials Real Prints Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-8 px-4 py-12">
              {RECOMMENDATION_IMAGES.map((imgSrc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex-[0_0_100%] md:flex-[0_0_85%] lg:flex-[0_0_75%] min-w-0"
                >
                  <div className="group relative bg-[#0D0D0D]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-primary/10 overflow-hidden">
                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* LinkedIn Print Image */}
                    <img
                      src={imgSrc}
                      alt={`Depoimento LinkedIn ${index + 1}`}
                      className="w-full h-auto rounded-2xl shadow-inner transition-transform duration-700 group-hover:scale-[1.01]"
                      loading="lazy"
                      onError={(e) => {
                        // Se o recomend 7 ainda não existir, oculta o slide ou mostra placeholder
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    {/* Badge de Verificado */}
                    <div className="absolute top-6 right-6 bg-[#0A66C2] text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM7.12 19.013H3.555V9h3.564V19.013zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm15.11 11.58h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.329 0-2.136.917-2.136 2.939v5.667h-3.564V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Nav Buttons Premium */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-2xl z-10 group"
          >
            <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-2xl z-10 group"
          >
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Solicitar Orçamento</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);
