import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink, Tag } from "lucide-react";
import { stockTemplates } from "@/data/stockTemplates";
import { Button } from "@/components/ui/button";

export default function TemplateStockSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 2,
    },
    [Autoplay({ delay: 2500, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 bg-background/60 backdrop-blur-sm relative overflow-hidden border-t border-border">
      {/* Glow Effects similar to Hero */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Background Intercalado Átomo React */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('/react-logo.png')] bg-no-repeat bg-fixed bg-center" 
        style={{ backgroundSize: '40%' }}
      />
      <div className="container px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Templates em <span className="text-primary">Estoque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Acelere o lançamento do seu negócio com designs Premium de alta conversão.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm">
            <Tag className="w-4 h-4" />
            Em média R$ 40,00 por template
          </div>
          
          <div className="mt-6 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/50 text-foreground font-bold shadow-[0_0_15px_rgba(0,209,255,0.3)]"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              LOGO MAIS 100 PROJETOS!!!! E AGENTES DE IA AUTOMAÇÕES COM N8N!
            </motion.div>
          </div>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 py-4">
              {stockTemplates.map((template, index) => (
                <div
                  key={template.id}
                  className="flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_20%] min-w-0"
                >
                  <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col hover:border-primary/50 transition-colors group">
                    <div className="text-sm text-primary font-medium mb-2">
                      {template.category}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-4 line-clamp-2">
                      {template.title}
                    </h3>
                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                      <span className="font-bold text-foreground">
                        {template.price}
                      </span>
                      <a href={template.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary hover:border-primary/50 shadow-md z-10"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary hover:border-primary/50 shadow-md z-10"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
