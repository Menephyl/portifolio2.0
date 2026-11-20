import { useState, useEffect } from "react";
import { AIChatBox, Message } from "./AIChatBox";
import { MessageSquare, X, ArrowUpRight, TrendingUp, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function PrimeAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Prompts orientados a Diagnóstico Comercial & ROI
  const suggestedPrompts = [
    "📊 Diagnosticar Gargalos da Minha Empresa",
    "💰 Calcular Estimativa de ROI & Economia",
    "🚀 Quanto custa criar um sistema sob medida?",
    "📲 Falar diretamente com Yan no WhatsApp",
  ];

  const handleSendMessage = async (content: string) => {
    // Adiciona a mensagem do usuário
    const newMessages = [...messages, { role: "user" as const, content }];
    setMessages(newMessages);
    setIsLoading(true);

    const lower = content.toLowerCase();

    // Respostas Rápidas Estruturadas de Diagnóstico e Conversão Comercial
    if (lower.includes("whatsapp") || lower.includes("contato") || lower.includes("falar diretamente")) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `**Excelente iniciativa!**\n\nVocê pode iniciar uma conversa direta com o **Yan Menephyl** pelo WhatsApp oficial:\n\n👉 [**Clique aqui para falar no WhatsApp (+55 35 98468-8884)**](https://wa.me/5535984688884?text=Ol%C3%A1%20Yan!%20Fiz%20o%20diagn%C3%B3stico%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20uma%20proposta%20comercial%20estrat%C3%A9gica.)\n\nTempo médio de resposta: **menos de 15 minutos** em horário comercial.`,
          },
        ]);
        setIsLoading(false);
      }, 500);
      return;
    }

    if (lower.includes("gargalo") || lower.includes("diagnosticar")) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `### 🔍 Diagnóstico Comercial Preliminar\n\nIdentificamos **3 principais gargalos operacionais** que drenam o lucro de operações digitais:\n\n1. **Vazamento de Leads Noturnos:** Sem agente de IA ou funil 24/7, até **60% dos visitantes** que chegam fora do horário comercial desistem da compra.\n2. **Horas Perdidas em Tarefas Manuais:** Equipes gastam até **25 horas/semana** copiando dados de WhatsApp para planilhas ou sistemas sem n8n.\n3. **Perda de Vendas por Lentidão:** Cada 1 segundo extra de carregamento em páginas e checkouts reduz a taxa de conversão em **7% a 15%**.\n\n💡 **Solução Yan Menephyl:** Arquitetura Serverless + Agentes de IA integrados que operam ininterruptamente.\n\nQual desses gargalos mais impacta o seu negócio hoje?`,
          },
        ]);
        setIsLoading(false);
      }, 600);
      return;
    }

    if (lower.includes("roi") || lower.includes("economia") || lower.includes("calcular")) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `### 📈 Estimativa Quantitativa de ROI\n\nCom base nas implementações já realizadas pela **Prime Team**:\n\n- **Automação de Atendimento (n8n + IA):** Economia média estimada de **R$ 3.500 a R$ 8.500/mês** em custos de suporte inicial e captação de leads.\n- **Frontend de Alta Performance (React/Vite):** Aceleração de carregamento de 3.4s para 0.7s, resultando em aumento de **+20% a +40% no volume de conversão**.\n- **Integridade Transacional (MySQL/Node.js):** Zero falhas em checkout e concorrência massiva de usuários sem derrubar o servidor.\n\n🚀 Deseja calcular o retorno exato para o volume de vendas da sua empresa?\n\n👉 [**Solicitar Estudo de Viabilidade Gratuito no WhatsApp**](https://wa.me/5535984688884?text=Ol%C3%A1%20Yan!%20Gostaria%20de%20uma%20estimativa%20de%20ROI%20para%20o%20meu%20neg%C3%B3cio.)`,
          },
        ]);
        setIsLoading(false);
      }, 600);
      return;
    }

    if (lower.includes("quanto custa") || lower.includes("preço") || lower.includes("sistema sob medida") || lower.includes("orçamento")) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `### 💼 Modelos de Projetos & Investimento\n\nTrabalhamos com escopos orientados a retorno financeiro:\n\n- **Landing Pages de Alta Conversão:** Entregues em 3 a 7 dias úteis, com design premium, métricas e integração de funil.\n- **Sistemas & Plataformas SaaS Sob Medida:** Arquitetura Full Stack (React, Node.js, Banco Relacional, Pagamentos e Painel Admin).\n- **Automações de IA & Agentes Comerciais:** Chatbots integrados ao WhatsApp com base de conhecimento própria via n8n/RAG.\n\nCada projeto recebe uma **análise prévia de viabilidade financeira** para assegurar que o retorno sobre o investimento supere o custo de implementação.\n\n👉 [**Enviar detalhes do projeto para o Yan**](https://wa.me/5535984688884?text=Ol%C3%A1%20Yan!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20projeto.)`,
          },
        ]);
        setIsLoading(false);
      }, 600);
      return;
    }

    // Chamada à API caso configurada ou fallback inteligente
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error("API Offline");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Entendido perfeitamente! Para alinharmos os requisitos técnicos específicos e calcular o ROI do seu projeto sem compromisso, você pode enviar uma mensagem direta para o Yan no WhatsApp:\n\n👉 [**Conversar no WhatsApp Oficial (+55 35 98468-8884)**](https://wa.me/5535984688884?text=Ol%C3%A1%20Yan!%20Estou%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20trocar%20uma%20ideia%20sobre%20um%20projeto.)`,
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
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
        {/* Scroll To Top FAB */}
        <button
          onClick={handleScrollClick}
          className="w-12 h-12 bg-[#0A1124] border border-[#00D2FF]/30 hover:bg-[#00D2FF]/10 text-slate-200 rounded-full flex items-center justify-center shadow-xl hover:border-[#00D2FF]/60 transition-all duration-300"
          aria-label={isAtTop ? "Rolar para baixo" : "Voltar ao topo"}
        >
          <motion.svg 
            animate={{ rotate: isAtTop ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 text-[#00D2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </motion.svg>
        </button>
      </div>

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {/* AI Widget Button with Bubble */}
        <div className="relative">
          {!isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute right-[76px] top-1/2 -translate-y-1/2 w-max max-w-[240px] sm:max-w-none bg-[#0A1124]/95 backdrop-blur-md border border-[#00D2FF]/40 p-2.5 sm:p-3 rounded-2xl rounded-br-none shadow-[0_0_20px_rgba(0,210,255,0.2)] flex items-center gap-2 pointer-events-none"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#E2E8F0]">
                Diagnóstico Comercial & ROI 🚀
              </span>
            </motion.div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0A1124] border-2 border-[#00D2FF]/40 hover:border-[#00D2FF] text-slate-100 rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-1 transition-all duration-300 z-50 overflow-hidden relative group"
            aria-label="Abrir assistente comercial"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-200" />
            ) : (
              <div className="w-full h-full relative">
                <img 
                  src="/profile-professional.jpg" 
                  alt="Falar com Yan" 
                  className="w-full h-full object-cover scale-105" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-1 right-1 bg-[#030712] p-1 rounded-full shadow border border-[#00D2FF]/50">
                  <MessageSquare className="w-3.5 h-3.5 text-[#00D2FF]" />
                </div>
              </div>
            )}
          </button>
        </div>

        {/* WhatsApp & Instagram Direct Floating FABs */}
        <a 
          href="https://wa.me/5535984688884" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-emerald-400 rounded-full flex items-center justify-center shadow-lg hover:text-white hover:bg-emerald-600 hover:border-emerald-500 hover:scale-110 hover:shadow-emerald-500/25 transition-all duration-300"
          aria-label="WhatsApp direto"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a 
          href="https://instagram.com/yan_menephyl_works" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-slate-300 rounded-full flex items-center justify-center shadow-lg hover:text-white hover:border-transparent hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:scale-110 transition-all duration-300"
          aria-label="Instagram direto"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>

        {/* Chat Component */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="absolute bottom-28 sm:bottom-32 right-0 w-[calc(100vw-2rem)] sm:w-[370px] max-w-[380px] origin-bottom-right drop-shadow-2xl z-50"
            >
              <div className="relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 border border-slate-700 text-slate-200 rounded-full flex items-center justify-center hover:bg-slate-800 shadow-md z-10 transition-colors"
                  aria-label="Fechar Chat"
                >
                  <X className="w-4 h-4" />
                </button>
                <AIChatBox
                  messages={messages}
                  onSendMessage={handleSendMessage}
                  isLoading={isLoading}
                  suggestedPrompts={messages.length === 0 ? suggestedPrompts : undefined}
                  height={470}
                  className="border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-2xl bg-slate-950"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
