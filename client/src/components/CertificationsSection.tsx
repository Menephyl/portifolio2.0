import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { X, Search } from "lucide-react";

const CERTIFICATES = [
  { id: 1, title: "Certificado C#", src: "/assets/01-CertificadoCS.png" },
  { id: 2, title: "React Completo", src: "/assets/02-Certificado - Dev Club - Yan Isonel Pereira - React pt.3- Front End Club.png" },
  { id: 3, title: "Node.js Backend", src: "/assets/03-Certificado - Dev Club - Yan Isonel Pereira - Node.png" },
  { id: 4, title: "JS: Ascensão do Async/Await", src: "/assets/04-Certificado - Dev Club - Yan Isonel Pereira - JavaScript pt. VI - A Ascensão do Async_Await.png" },
  { id: 5, title: "JS: Módulo IV", src: "/assets/05-Certificado - Dev Club - Yan Isonel Pereira - JavaScript pt.4 - Front End Club.png" },
  { id: 6, title: "Git & GitHub Pro", src: "/assets/06-Certificado - Dev Club - Yan Isonel Pereira - Git & GitHub - Front End Club.png" },
  { id: 7, title: "CSS Display Grid", src: "/assets/07-Certificado - Dev Club - Yan Isonel Pereira - CSS - Display GRID - Front End Club.png" },
  { id: 8, title: "HTML Essencial", src: "/assets/99-Certificado - Dev Club - Yan Isonel Pereira - HTML - Front End Club.png" },
  { id: 9, title: "Full Stack Dev Club", src: "pendente" },
  { id: 10, title: "Tecnólogo em Análise e Desenvolvimento de Sistemas", src: "pendente" },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="certifications" ref={ref} className="py-20 bg-background/60 backdrop-blur-sm relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Background React Atom */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('/react-logo.png')] bg-no-repeat bg-fixed bg-center" 
        style={{ backgroundSize: '40%' }}
      />

      <div className="container px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificações & <span className="text-primary">Especializações</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Habilidades comprovadas através de metodologias e formações completas
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 py-4 px-2">
              {CERTIFICATES.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div 
                    onClick={() => cert.src !== "pendente" && setSelectedImg(cert.src)}
                    className={`bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center justify-center p-2 h-[350px] shadow-sm transition-all duration-300 overflow-hidden group relative ${cert.src !== "pendente" ? 'cursor-zoom-in hover:border-primary/50 hover:shadow-primary/20' : 'cursor-default'}`}
                  >
                    {/* Hover Overlay */}
                    {cert.src !== "pendente" && (
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 z-10 flex items-center justify-center">
                        <Search className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10" />
                      </div>
                    )}

                    <img 
                      src={cert.src} 
                      alt={cert.title} 
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/121212/00D1FF?text=Certificado+Pendente' }}
                      className="object-contain w-full h-[85%] group-hover:scale-105 transition-transform duration-500 rounded"
                    />
                    <p className="text-center font-bold text-muted-foreground mt-4 pb-2 group-hover:text-primary transition-colors">{cert.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Nav Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300 shadow-lg z-20 group"
          >
            <svg className="w-5 h-5 text-white group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300 shadow-lg z-20 group"
          >
            <svg className="w-5 h-5 text-white group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 md:-top-6 md:-right-12 text-white/70 hover:text-white transition-colors p-2"
              >
                <X size={40} strokeWidth={1} />
              </button>
              <img 
                src={selectedImg} 
                alt="Certificado Expandido" 
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,209,255,0.3)] border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
