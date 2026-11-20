import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId) || document.getElementById(sectionId === "projects" ? "projetos" : sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Sobre Mim", id: "about" },
    { label: "Habilidades", id: "skills" },
    { label: "Projetos", id: "projetos" },
    // { label: "Cases", id: "cases" },
    { label: "Certificados", id: "certifications" },
    { label: "Acadêmico", id: "academic" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/85 backdrop-blur-xl border-b border-[#00D2FF]/15">
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & DevClub Official Partner Badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 text-xl font-bold text-[#E2E8F0] hover:text-[#00D2FF] transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-[#00D2FF]/10 flex items-center justify-center border border-[#00D2FF]/30 overflow-hidden shadow-[0_0_12px_rgba(0,210,255,0.25)]">
                <img src="/react-logo.png" alt="Logo React" className="w-7 h-7 object-contain" />
              </div>
              <span className="hidden xs:inline text-sm sm:text-base font-semibold tracking-wide">Yan Menephyl</span>
            </button>

            {/* Badge Institucional Obrigatório: Parceiro Oficial DevClub */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A1124] border border-[#00D2FF]/30 text-[11px] font-semibold text-[#00D2FF] shadow-[0_0_10px_rgba(0,210,255,0.15)]">
              <img src="/assets/devclub.png" alt="DevClub" className="w-4 h-4 rounded-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <span>★ Parceiro Oficial DevClub</span>
            </div>
          </div>

          {/* Navigation Links Desktop */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#94A3B8] hover:text-[#00D2FF] transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Action: Dancer Portfolio Reveal on Hover & Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Link discreto: revela 'Ver meu portfólio de Dançarino de Salão' apenas no hover */}
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A1124]/90 border border-slate-700/80 hover:border-[#00D2FF]/50 text-slate-300 hover:text-[#00D2FF] transition-all duration-300 text-xs shadow-sm overflow-hidden"
              title="Personal Dancer"
            >
              <span className="text-base select-none">🕺</span>
              <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap overflow-hidden font-medium">
                Ver meu portfólio de Dançarino de Salão
              </span>
            </a>

            {/* Mobile DevClub Badge */}
            <div className="flex lg:hidden items-center px-2 py-0.5 rounded-full bg-[#0A1124] border border-[#00D2FF]/30 text-[10px] font-bold text-[#00D2FF]">
              ★ DevClub
            </div>

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9 text-[#00D2FF] hover:bg-[#00D2FF]/10"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile Hamburger Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg w-9 h-9 text-slate-200"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-[#00D2FF]/15 bg-[#030712]/95 backdrop-blur-2xl px-6 py-4 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-[#0A1124] border border-[#00D2FF]/20 text-xs text-[#00D2FF] font-semibold w-fit mb-1">
                ★ Parceiro Oficial DevClub
              </div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 text-base font-medium text-[#E2E8F0] hover:text-[#00D2FF] transition-colors border-b border-slate-800/60 last:border-0"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-sm font-medium text-[#F59E0B] flex items-center gap-2"
              >
                <span>🕺</span>
                <span>Portfólio de Dançarino de Salão</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
