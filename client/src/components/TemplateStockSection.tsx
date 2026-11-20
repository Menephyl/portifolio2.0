import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink, Tag, MessageCircle } from "lucide-react";
import { stockTemplates, getTemplateWhatsAppUrl } from "@/data/stockTemplates";
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
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

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
                      <a href={template.liveUrl} target="_blank" rel="noopener noreferrer" title="Ver Demonstração ao Vivo">
                        <Button size="sm" variant="ghost" className="h-8 px-2.5 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all flex items-center gap-1.5 text-xs">
                          <span>Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Button>
                      </a>
                    </div>

                    {/* Botão de Pedido Direto via WhatsApp */}
                    <a
                      href={getTemplateWhatsAppUrl(template.title, template.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] hover:text-[#25D366] text-xs font-bold transition-all shadow-sm"
                      title="Fazer pedido deste template diretamente pelo WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Pedir no WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls Desktop */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-background border border-border items-center justify-center hover:text-primary hover:border-primary/50 shadow-md z-10"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-background border border-border items-center justify-center hover:text-primary hover:border-primary/50 shadow-md z-10"
            aria-label="Próximo"
          >
            →
          </button>

          {/* Controls Mobile */}
          <div className="flex md:hidden justify-center items-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center shadow"
              aria-label="Anterior"
            >
              ←
            </button>
            <span className="text-xs text-muted-foreground">Deslize para ver templates</span>
            <button
              onClick={scrollNext}
              className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center shadow"
              aria-label="Próximo"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
