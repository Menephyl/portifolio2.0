import { Github, Linkedin, Instagram, Youtube, Facebook, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yanisonelpereira",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/yan_menephyl_works",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@menephyDev",
      label: "YouTube",
    },
    {
      icon: Github,
      href: "https://github.com/Menephyl",
      label: "GitHub",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/menephyl.settings",
      label: "Facebook",
    },
  ];

  const additionalLinks = [
    {
      name: "Threads",
      href: "https://www.threads.com/@yan_menephyl_works",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@menephyl",
    },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Yan Menephyl
            </h3>
            <p className="text-muted-foreground">
              Desenvolvedor Web Front-end
            </p>
          </div>

          {/* Social Links with Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Additional Social Links (Text) */}
          <div className="flex gap-6 text-sm">
            {additionalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <button
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-primary transition-colors"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => {
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-primary transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-primary transition-colors"
            >
              Contato
            </button>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-border" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              © {currentYear} Yan Menephyl. Feito com
              <Heart className="w-4 h-4 text-primary fill-primary" />
              e React
            </p>
            <p className="mt-2 text-xs">
              Todos os projetos versionados no Git e GitHub, hospedados no Vercel
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="https://www.instagram.com/primeteam.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="group-hover:text-[#00D1FF] transition-colors">By Prime Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
