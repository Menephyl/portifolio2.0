import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Loader2, Send, User, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Streamdown } from "streamdown";

export type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type AIChatBoxProps = {
  messages: Message[];
  onSendMessage: (content: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  className?: string;
  height?: string | number;
  emptyStateMessage?: string;
  suggestedPrompts?: string[];
};

export function AIChatBox({
  messages,
  onSendMessage,
  isLoading = false,
  placeholder = "Digite sua mensagem...",
  className,
  height = "500px",
  emptyStateMessage = "Inicie uma conversa com a IA da Prime Team",
  suggestedPrompts,
}: AIChatBoxProps) {
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputAreaRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const displayMessages = messages.filter((msg) => msg.role !== "system");
  const [minHeightForLastMessage, setMinHeightForLastMessage] = useState(0);

  useEffect(() => {
    if (containerRef.current && inputAreaRef.current) {
      const containerHeight = containerRef.current.offsetHeight;
      const inputHeight = inputAreaRef.current.offsetHeight;
      const scrollAreaHeight = containerHeight - inputHeight;
      const userMessageReservedHeight = 56;
      const calculatedHeight = scrollAreaHeight - 32 - userMessageReservedHeight;
      setMinHeightForLastMessage(Math.max(0, calculatedHeight));
    }
  }, []);

  const scrollToBottom = () => {
    const viewport = scrollAreaRef.current?.querySelector(
      '[data-radix-scroll-area-viewport]'
    ) as HTMLDivElement;

    if (viewport) {
      requestAnimationFrame(() => {
        viewport.scrollTo({ top: viewport.scrollHeight, behavior: 'smooth' });
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    onSendMessage(trimmedInput);
    setInput("");
    scrollToBottom();
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col bg-card/95 backdrop-blur-md text-card-foreground rounded-lg border border-primary/20 shadow-2xl overflow-hidden",
        className
      )}
      style={{ height }}
    >
      <div className="bg-primary/5 p-4 border-b border-primary/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center relative shadow-[0_0_15px_rgba(0,209,255,0.4)]">
          <Sparkles className="w-5 h-5 text-primary" />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
        </div>
        <div>
          <h3 className="font-bold text-sm">Prime Assistant</h3>
          <p className="text-xs text-muted-foreground">Online (Grok IA)</p>
        </div>
      </div>

      <div ref={scrollAreaRef} className="flex-1 overflow-hidden">
        {displayMessages.length === 0 ? (
          <div className="flex h-full flex-col p-4">
            <div className="flex flex-1 flex-col items-center justify-center gap-6 text-muted-foreground">
              <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-sm max-w-[250px] leading-relaxed">{emptyStateMessage}</p>
              </div>

              {suggestedPrompts && suggestedPrompts.length > 0 && (
                <div className="flex flex-col gap-2 w-full max-w-[280px]">
                  {suggestedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => onSendMessage(prompt)}
                      disabled={isLoading}
                      className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-xs text-left transition-colors hover:bg-primary/20 hover:border-primary/60 disabled:cursor-not-allowed disabled:opacity-50 text-primary whitespace-normal"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <ScrollArea className="h-full">
            <div className="flex flex-col space-y-4 p-4">
              {displayMessages.map((message, index) => {
                const isLastMessage = index === displayMessages.length - 1;
                const shouldApplyMinHeight = isLastMessage && !isLoading && minHeightForLastMessage > 0;

                return (
                  <div
                    key={index}
                    className={cn(
                      "flex gap-3",
                      message.role === "user" ? "justify-end items-start" : "justify-start items-start"
                    )}
                    style={shouldApplyMinHeight ? { minHeight: `${minHeightForLastMessage}px` } : undefined}
                  >
                    {message.role === "assistant" && (
                      <div className="size-8 shrink-0 mt-1 rounded-full bg-primary/20 shadow-[0_0_10px_rgba(0,209,255,0.2)] flex items-center justify-center">
                        <Sparkles className="size-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-4 py-2.5 shadow-sm text-sm",
                        message.role === "user" ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-muted/80 backdrop-blur-sm text-foreground rounded-tl-sm border border-border"
                      )}
                    >
                      {message.role === "assistant" ? (
                        <div className="prose prose-sm dark:prose-invert max-w-none leading-relaxed">
                          <Streamdown>{message.content}</Streamdown>
                        </div>
                      ) : (
                        <p className="whitespace-pre-wrap">{message.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="size-8 shrink-0 mt-1 rounded-full bg-primary/20 shadow-[0_0_10px_rgba(0,209,255,0.2)] flex items-center justify-center">
                    <Sparkles className="size-4 text-primary animate-pulse" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-muted/80 border border-border px-4 py-2.5">
                    <Loader2 className="size-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        )}
      </div>

      <form
        ref={inputAreaRef}
        onSubmit={handleSubmit}
        className="flex gap-2 p-3 border-t border-border bg-background/80 items-end"
      >
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label="Campo de mensagem para o chat"
          className="flex-1 max-h-32 resize-none min-h-[44px] rounded-xl bg-background border-primary/20 focus-visible:ring-primary/50 text-sm py-3"
          rows={1}
        />
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || isLoading}
          aria-label="Enviar mensagem"
          className="shrink-0 h-[44px] w-[44px] rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 disabled:shadow-none"
        >
          {isLoading ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5 ml-1" />}
        </Button>
      </form>
    </div>
  );
}
