import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const CERTIFICATES = [
  { id: 1, title: "React Completo", src: "/assets/Certificado - Dev Club - Yan Isonel Pereira - React pt.3- Front End Club.png" },
  { id: 2, title: "Node.js Backend", src: "/assets/Certificado - Dev Club - Yan Isonel Pereira - Node.png" },
  { id: 3, title: "JavaScript Avançado", src: "/assets/Certificado - Dev Club - Yan Isonel Pereira - JavaScript pt. VI - A Ascensão do Async_Await.png" },
  { id: 4, title: "Estruturas de Dados JS", src: "/assets/Certificado - Dev Club - Yan Isonel Pereira - JavaScript pt. V - A Nova Ordem de Dados.png" },
  { id: 5, title: "Git & GitHub Pro", src: "/assets/Certificado - Dev Club - Yan Isonel Pereira - Git & GitHub - Front End Club.png" },
  { id: 6, title: "CSS Display Grid", src: "/assets/Certificado - Dev Club - Yan Isonel Pereira - CSS - Display GRID - Front End Club.png" },
  { id: 7, title: "HTML Essencial", src: "/assets/Certificado - Dev Club - Yan Isonel Pereira - HTML - Front End Club.png" },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="certifications" ref={ref} className="py-20 bg-card relative overflow-hidden">
      <div className="container px-6">
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
                  <div className="bg-background border border-border rounded-xl flex flex-col items-center justify-center p-2 h-[350px] shadow-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden group">
                    <img 
                      src={cert.src} 
                      alt={cert.title} 
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/121212/00D1FF?text=Certificado+Pendente' }}
                      className="object-contain w-full h-[85%] group-hover:scale-105 transition-transform duration-500 rounded"
                    />
                    <p className="text-center font-semibold text-muted-foreground mt-4 pb-2">{cert.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Nav Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-lg z-10"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-lg z-10"
            aria-label="Próximo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
