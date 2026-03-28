import { useState } from "react";
import { AIChatBox, Message } from "./AIChatBox";
import { MessageSquare, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function PrimeAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Suggestions for the user to start a conversation
  // The user can click these to auto-send
  const suggestedPrompts = [
    "Quero criar uma plataforma SaaS.",
    "Preciso de um app de Delivery.",
    "Gostaria de solicitar um orçamento.",
  ];

  const handleSendMessage = async (content: string) => {
    // Adiciona a mensagem do usuário
    const newMessages = [...messages, { role: "user" as const, content }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
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
          content: "Desculpe, tive um problema de conexão. Se preferir, chame o Yan direto no WhatsApp!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="fixed bottom-20 right-6 w-[350px] z-50 origin-bottom-right"
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
                height={500}
                className="border-primary/20 shadow-2xl rounded-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 z-50"
        aria-label="Abrir assistente virtual"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </>
  );
}
