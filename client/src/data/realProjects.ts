export interface RealProject {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "Full-Stack & AI" | "Web Design & E-Commerce";
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
}

export const realProjects: RealProject[] = [
  // Featured Projects
  {
    id: 1,
    title: "Brazukas Delivery",
    description: "Plataforma Full-Stack de delivery conectando clientes, lojas e entregadores com rastreamento GPS em tempo real",
    longDescription: "MVP completo de plataforma de delivery com funcionalidades avançadas: carrinho e checkout, rastreamento GPS, painel admin, sistema de cupons, programa de fidelidade, gateway de pagamento, notificações em tempo real e chat com suporte.",
    image: "/projects/brazukas-delivery-new.png",
    tags: ["Full-Stack", "React", "TypeScript", "tRPC", "MySQL"],
    category: "Full-Stack & AI",
    technologies: ["React 19", "TypeScript", "tRPC", "Express.js", "MySQL", "Drizzle ORM", "Tailwind CSS", "Leaflet Maps"],
    liveUrl: "https://github.com/Menephyl/brazukas_delivery",
    githubUrl: "https://github.com/Menephyl/brazukas_delivery",
    featured: true,
  },
  {
    id: 2,
    title: "E-book Manual da Vida Moderna",
    description: "Landing page de alta conversão para venda de e-book com design moderno e copywriting persuasivo",
    longDescription: "Landing page profissional com carrossel de versículos, seção de problemas e soluções, cards de benefícios, depoimentos de leitores, estatísticas impressionantes e múltiplos CTAs estratégicos. Design responsivo com animações suaves.",
    image: "/projects/ebook-manual-vida-moderna.webp",
    tags: ["Landing Page", "React", "TypeScript", "Framer Motion"],
    category: "Full-Stack & AI",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ebook-gamma-nine.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Amakha Filipe - Landing Page",
    description: "Landing page completa para revendedor Amakha Paris com seções expandidas e storytelling envolvente",
    longDescription: "Landing page robusta com seção 'Quem Somos', showcase de produtos (perfumes premium, linha capilar, acessórios), vídeo de apresentação, galeria de fotos, vantagens para revendedores, estatísticas de resultados e downloads de catálogos.",
    image: "/projects/amakha-filipe-new.png",
    tags: ["E-Commerce", "Landing Page", "React", "TypeScript"],
    category: "Web Design & E-Commerce",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://amakha-filipe.vercel.app/",
    featured: true,
  },

  // All Projects
  {
    id: 4,
    title: "Yan Dynamic Resumé",
    description: "Currículo dinâmico e interativo com design moderno e navegação suave entre seções",
    longDescription: "Portfolio pessoal completo com timeline educacional interativa, seção de habilidades com barras de progresso animadas, blog integrado, formulário de contato e design totalmente responsivo.",
    image: "/projects/yan-dynamic-resume.webp",
    tags: ["Portfolio", "HTML", "CSS", "JavaScript", "React"],
    category: "Full-Stack & AI",
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    liveUrl: "https://ymenephyl.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    title: "Bianca Loja - Fashion Store",
    description: "E-commerce moderno de moda com design clean, filtros por categoria e interface focada em UX",
    longDescription: "Loja virtual com busca de produtos, filtros por categoria (Masculinos, Femininos, Unissex, Kits), grid de produtos com hover effects, categorias de estilo (Casual, Formal, Esportivo, Luxo, Streetwear) e carrinho de compras.",
    image: "/projects/bianca-loja-new.png",
    tags: ["E-Commerce", "React", "TypeScript", "Tailwind"],
    category: "Web Design & E-Commerce",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://biancaloja.vercel.app/",
    featured: false,
  },
  {
    id: 6,
    title: "Sanderson AMK - Amakha Paris",
    description: "Landing page otimizada para conversão de revendedor Amakha Paris com copywriting persuasivo",
    longDescription: "Landing page com hero section impactante, cards de diferenciais (Fábrica Própria, Credibilidade, Qualidade), estatísticas impressionantes (600+ produtos, 50% desconto, 200% lucro), passo a passo para se tornar revendedor e downloads de catálogos.",
    image: "/projects/sanderson-amakha-paris.webp",
    tags: ["Landing Page", "React", "TypeScript"],
    category: "Web Design & E-Commerce",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://sandersonamk.vercel.app/",
    featured: false,
  },
];

export const projectCategories = [
  "Todos",
  "Full-Stack & AI",
  "Web Design & E-Commerce",
] as const;

export const projectTags = [
  "Todos",
  "Full-Stack",
  "React",
  "TypeScript",
  "E-Commerce",
  "Landing Page",
  "tRPC",
  "Tailwind",
  "Framer Motion",
  "Portfolio",
] as const;
