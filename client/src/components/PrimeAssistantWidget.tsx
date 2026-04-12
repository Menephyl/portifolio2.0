import { useState, useEffect } from "react";
import { AIChatBox, Message } from "./AIChatBox";
import { MessageSquare, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function PrimeAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Hooks para conversão rápida de leads
  const suggestedPrompts = [
    "Quero fazer meu projeto com você!",
    "Qual é o seu contato do WhatsApp?",
    "Qual é o seu Instagram?",
    "Quem é o Yan?",
  ];

  const handleSendMessage = async (content: string) => {
    // Adiciona a mensagem do usuário
    const newMessages = [...messages, { role: "user" as const, content }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      if (content.includes("WhatsApp")) {
        setMessages((prev) => [...prev, { role: "assistant", content: "Ótima escolha! Você pode me chamar diretamente no WhatsApp pelo número +55 (35) 99214-4176. Clica ali no botão do WhatsApp flutuante!" }]);
        setIsLoading(false);
        return;
      }
      if (content.includes("Instagram")) {
        setMessages((prev) => [...prev, { role: "assistant", content: "Claro! Meu Instagram é o @yanisonel. Custa nada dar um 'oi' por lá também!" }]);
        setIsLoading(false);
        return;
      }
      if (content.includes("fazer meu projeto")) {
        setMessages((prev) => [...prev, { role: "assistant", content: "Excelente! Vamos tirar essa ideia do papel e transformar em um case de sucesso. Você pode me descrever rapidamente o que precisa ou me chamar no WhatsApp?" }]);
        setIsLoading(false);
        return;
      }
      if (content.includes("Quem é o Yan")) {
        setMessages((prev) => [...prev, { role: "assistant", content: "Sou o Yan Menephyl, Desenvolvedor Full Stack apaixonado por criar ecossistemas web e mobile que geram resultados reais! Além de código, também lidero a Prime Team. Sou focado em UI Premium e conversão." }]);
        setIsLoading(false);
        return;
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error("Erro na comunicação com a IA.");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Desculpe, tive um picos de conexão agora! Clique no ícone do WhatsApp que a gente desenrola sua ideia rapidinho!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (isAtTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
        {/* Scroll To Top FAB */}
        <button
          onClick={handleScrollClick}
          className="w-12 h-12 bg-background border border-border hover:bg-primary/10 text-foreground rounded-full flex items-center justify-center shadow-lg hover:border-primary/50 transition-all duration-300"
          aria-label={isAtTop ? "Rolar para baixo" : "Voltar ao topo"}
        >
          <motion.svg 
            animate={{ rotate: isAtTop ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </motion.svg>
        </button>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {/* AI Widget Button with Avatar/Bubble */}
        <div className="relative">
          {!isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute right-[80px] top-1/2 -translate-y-1/2 w-max bg-background border border-primary/30 p-3 rounded-2xl rounded-br-none shadow-lg flex items-center gap-2 pointer-events-none"
            >
              <span className="text-sm font-semibold text-foreground">Tirando sua ideia do papel! Clica aqui ➡️</span>
            </motion.div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,209,255,0.4)] hover:shadow-[0_0_30px_rgba(0,209,255,0.6)] hover:-translate-y-1 transition-all duration-300 z-50 overflow-hidden relative"
            aria-label="Abrir assistente virtual"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="w-full h-full relative group">
                <img src="/profile-professional.jpg" alt="Falar com Yan" className="w-full h-full object-cover scale-110" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors" />
                <MessageSquare className="w-5 h-5 absolute bottom-1 right-1 text-white drop-shadow-md" />
              </div>
            )}
          </button>
        </div>

        {/* Social FABs */}
        <a href="https://wa.me/5535992144176" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background/20 backdrop-blur-md border border-border/50 text-foreground/50 rounded-full flex items-center justify-center shadow-lg hover:text-white hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 hover:shadow-[#25D366]/30 transition-all duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="https://instagram.com/yan_menephyl_works" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background/20 backdrop-blur-md border border-border/50 text-foreground/50 rounded-full flex items-center justify-center shadow-lg hover:text-white hover:border-transparent hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>

        {/* Chat Component */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="absolute bottom-32 right-0 w-[350px] origin-bottom-right drop-shadow-2xl z-50"
            >
              <div className="relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-3 -right-3 w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted shadow-md z-10 transition-colors"
                  aria-label="Fechar Chat"
                >
                  <X className="w-4 h-4" />
                </button>
                <AIChatBox
                  messages={messages}
                  onSendMessage={handleSendMessage}
                  isLoading={isLoading}
                  suggestedPrompts={messages.length === 0 ? suggestedPrompts : undefined}
                  height={450}
                  className="border-primary/20 shadow-2xl rounded-2xl bg-card"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
