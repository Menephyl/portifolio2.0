export type AcademicSkillCategory =
  | "Frontend & React (TypeScript/APIs)"
  | "Lógica de Programação & DOM"
  | "UI/UX & CSS Avançado"
  | "Multimídia & Web APIs";

export interface AcademicProject {
  id: string;
  title: string;
  skillCategory: AcademicSkillCategory;
  institution: string;
  badge: string;
  description: string;
  acquiredSkills: string[];
  academicResult: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const academicSkillCategories = [
  "Todas as Habilidades",
  "Frontend & React (TypeScript/APIs)",
  "Lógica de Programação & DOM",
  "UI/UX & CSS Avançado",
  "Multimídia & Web APIs",
] as const;

export const academicProjects: AcademicProject[] = [
  {
    id: "dev-movies",
    title: "Dev movies - Filmes e Séries e animes",
    skillCategory: "Frontend & React (TypeScript/APIs)",
    institution: "Dev club",
    badge: "React • TypeScript • API REST",
    description: "Listagem de filmes, séries e animes por categoria, consumindo API e trazendo trailers de filmes em tempo real.",
    acquiredSkills: ['Styled Components', 'Hooks', 'API REST', 'React Router', 'Manipulação de Formulários'],
    academicResult: "Desenvolvimento de um front-end moderno e dinâmico, capaz de exibir informações detalhadas sobre filmes, séries e animes em tempo real.",
    technologies: ['React', 'TypeScript', 'API REST'],
    githubUrl: "https://github.com/Menephyl/dev_movies",
    liveUrl: "https://dev-movies-three.vercel.app/",
  },
  {
    id: "cardapio-dinamico",
    title: "Cardápio Dinâmico & Checkout WhatsApp",
    skillCategory: "Lógica de Programação & DOM",
    institution: "Estudos Práticos",
    badge: "Lógica de Fluxo & Checkout",
    description: "Catálogo interativo com montagem de pedidos, cálculo em tempo real de subtotal e fechamento direto no WhatsApp.",
    acquiredSkills: [
      "Manipulação de DOM e objetos React com JavaScript",
      "Lógica de cálculo e precificação dinâmica",
      "Geração de links parametrizados para mensageiros"
    ],
    academicResult: "Compreensão da jornada de compra sem atrito e criação de automações comerciais integradas a mensageiros.",
    technologies: ["React", "JavaScript ES6+", "HTML5", "CSS3", "WhatsApp API"],
    githubUrl: "https://github.com/Menephyl/cardapio_dinamico",
    liveUrl: "https://ahcardapio.vercel.app/",
  },
  {
    id: "cv-online",
    title: "CV Online Interativo com Menu Lateral",
    skillCategory: "Lógica de Programação & DOM",
    institution: "Portfólio de Formação",
    badge: "Arquitetura SPA Vanilla",
    description: "Versão de portfólio pessoal interativo com menu lateral fixo e navegação dinâmica por seções.",
    acquiredSkills: [
      "Arquitetura de Single Page Application (SPA) em Vanilla JS",
      "Manipulação de classes e estados de navegação ativa",
      "Design de menu lateral responsivo (sidebar collapse)",
      "Organização modular de arquivos CSS e scripts"
    ],
    academicResult: "Consolidação da transição do código procedural simples para o design de interfaces ricas e dinâmicas.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Menephyl/Y_portifolioY",
    liveUrl: "https://ymenephyl.vercel.app",
  },
  {
    id: "analist-menephyl-works",
    title: "TechHelp.Pro - Suporte Técnico e Soluções em TI",
    skillCategory: "UI/UX & CSS Avançado",
    institution: "Menephyl Works",
    badge: "HTML Semântico • CSS3 • Responsividade",
    description: "Site institucional multipáginas voltado para suporte técnico em TI, com páginas de Início, Sobre, Serviços, Contato e atendimento direto via WhatsApp.",
    acquiredSkills: ['HTML Semântico', 'Design Responsivo', 'Arquitetura Multipáginas', 'UI/UX Institucional', 'Integração com WhatsApp', 'Deploy no GitHub Pages'],
    academicResult: "Desenvolvimento e publicação de uma vitrine institucional completa para serviços de assistência técnica e consultoria em TI, com navegação responsiva e foco em conversão direta.",
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    githubUrl: "https://github.com/Menephyl/analist_menephyl_works",
    liveUrl: "https://menephyl.github.io/analist_menephyl_works/index.html",
  },
  {
    id: "pass-in",
    title: "Pass In Web - Gestão de Eventos & Credenciamento",
    skillCategory: "Frontend & React (TypeScript/APIs)",
    institution: "Rocketseat (NLW)",
    badge: "React & TypeScript Estrito",
    description: "Aplicação completa para gestão de participantes e confirmação de presença em eventos presenciais e online.",
    acquiredSkills: [
      "Tipagem estrita com TypeScript e Interfaces",
      "Paginação dinâmica de dados no React",
      "Busca com Debounce e Otimização de Render",
      "Consumo de API RESTful com tratamento de erros"
    ],
    academicResult: "Domínio de padrões profissionais em React 18+, gerenciamento de estado complexo e consumo assíncrono de APIs.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "API REST"],
    githubUrl: "https://github.com/Menephyl/pass-in-react",
    liveUrl: "https://pass-in-react.vercel.app",
  },
  {
    id: "mario-services",
    title: "Mario Services - Encanadores Mario e Luigi",
    skillCategory: "UI/UX & CSS Avançado",
    institution: "Dev Club",
    badge: "Vídeo em Background & Efeitos CSS",
    description: "Landing page temática com vídeo de fundo em loop com máscara visual, menu de navegação, interatividade em JavaScript e botão flutuante integrado ao WhatsApp.",
    acquiredSkills: ['HTML Semântico', 'CSS3 e Flexbox', 'Manipulação do DOM', 'Vídeo em Background', 'Design Responsivo', 'Integração com WhatsApp'],
    academicResult: "Desenvolvimento e publicação na Vercel de uma landing page interativa com vídeo em tela cheia, sobreposição de camadas em CSS e fluxo direto de contato.",
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: "https://github.com/Menephyl/mario-site-",
    liveUrl: "https://marioservices.vercel.app/",
  },
  {
    id: "iphone-15-pro-max-landing-page",
    title: "Página de Venda - iPhone Showcase Interativo",
    skillCategory: "Lógica de Programação & DOM",
    institution: "Dev Club",
    badge: "Manipulação de DOM & Eventos",
    description: "Página de venda de produto com interações e troca dinâmica de cores e modelos em tempo real.",
    acquiredSkills: [
      "Manipulação de atributos de imagem e cores no DOM",
      "Design minimalista focado em percepção de valor de produto",
      "Microinterações de hover e seleção imediata"
    ],
    academicResult: "Criação de páginas de apresentação de hardware e produtos eletrônicos no padrão estético da Apple.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Menephyl/iphone",
    liveUrl: "https://iphone-15-pro-max-landing-page.vercel.app",
  },
  {
    id: "pokemon-pokedex",
    title: "Pokémon Pokédex Interativa",
    skillCategory: "Frontend & React (TypeScript/APIs)",
    institution: "Estudos Práticos",
    badge: "React • PokéAPI REST • Hooks",
    description: "Aplicação de Pokédex interativa que consome a PokéAPI para listar, filtrar e exibir detalhes completos dos Pokémon em tempo real.",
    acquiredSkills: ['Hooks', 'API REST', 'Componentização', 'Gerenciamento de Estado', 'Estilização Responsiva'],
    academicResult: "Desenvolvimento de uma interface front-end dinâmica em React com integração assíncrona de dados externos via PokéAPI.",
    technologies: ['React', 'JavaScript', 'API REST'],
    githubUrl: "https://github.com/Menephyl/pokemon",
    liveUrl: "https://menephylpokedex.vercel.app/",
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone - Interface & Player de Áudio",
    skillCategory: "Multimídia & Web APIs",
    institution: "Engenharia Reversa UI",
    badge: "Audio API & CSS Grid Avançado",
    description: "Engenharia reversa da interface do Spotify com player de áudio nativo, controle temporal e visual moderno.",
    acquiredSkills: [
      "CSS Grid e Flexbox avançado para layouts de mídia",
      "Lógica assíncrona com Async/Await e Fetch API",
      "Cálculo temporal em tempo real (fuso horário e saudações)",
      "Manipulação de tags e controles de áudio no DOM"
    ],
    academicResult: "Capacidade de replicar interfaces de padrão global com fidelidade pixel-perfect e controle multimídia nativo.",
    technologies: ["JavaScript ES6+", "HTML5", "CSS3 Grid", "API REST", "Audio API"],
    githubUrl: "https://github.com/Menephyl/spotify-clone",
    liveUrl: "https://spotify-clone-excercise.vercel.app/",
  },
  {
    id: "cordel-moderno",
    title: "Cordel Moderno com Parallax Puro",
    skillCategory: "UI/UX & CSS Avançado",
    institution: "Curso em Vídeo (Gustavo Guanabara)",
    badge: "Parallax Puro & W3C Standards",
    description: "Experiência de leitura poética com efeito Parallax tridimensional desenvolvido inteiramente em CSS puro.",
    acquiredSkills: [
      "Propriedades avançadas de CSS (background-attachment: fixed)",
      "Semântica HTML5 rigorosa e conformidade com W3C",
      "Tipografia responsiva com medidas relativas (rem e vw)",
      "Carregamento ultra-rápido com pontuação 100 no Google Lighthouse"
    ],
    academicResult: "Domínio de fundamentos de HTML/CSS e semântica rigorosa, explorando técnicas visuais de UX/UI.",
    technologies: ["HTML5 Semântico", "CSS3 Avançado", "Design Responsivo", "Parallax"],
    githubUrl: "https://github.com/Menephyl/cordel",
    liveUrl: "https://cordel-yan.vercel.app",
  },
  {
    id: "watch-apple",
    title: "Watch Apple - Showcase Interativo de Gadgets",
    skillCategory: "UI/UX & CSS Avançado",
    institution: "Estudos de UI / Microinterações",
    badge: "Design de Produto & Microinterações",
    description: "Página de produto com interações e troca dinâmica de cores e modelos de smartwatches.",
    acquiredSkills: [
      "Transições dinâmicas de estados visuais",
      "Manipulação de atributos de imagem e cores no DOM",
      "Design minimalista focado em percepção de valor de produto",
      "Microinterações de hover e seleção imediata"
    ],
    academicResult: "Criação de páginas de apresentação de hardware e produtos eletrônicos no padrão estético da Apple.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Menephyl/APPLEJS",
    liveUrl: "https://watch-apple.vercel.app",
  },
  {
    id: "landing-gta5",
    title: "Landing Page GTA 5 - Imersão & Storytelling",
    skillCategory: "UI/UX & CSS Avançado",
    institution: "Estudos de Mídia & Retenção",
    badge: "Storytelling Visual & Retenção",
    description: "Landing page promocional de videogame focada em impacto visual, contraste e retenção de público.",
    acquiredSkills: [
      "Uso estratégico de contrastes visuais e tipografia temática",
      "Otimização de imagens pesadas para carregamento rápido",
      "Organização hierárquica de chamadas para ação (CTAs)",
      "Layout flexível adaptável para smartphones e monitores widescreen"
    ],
    academicResult: "Compreensão de gatilhos visuais e retenção de visitantes em lançamentos e produtos de entretenimento.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Menephyl/landing-gta5",
    liveUrl: "https://landing-gta5.vercel.app",
  },
  {
    id: "audiobook",
    title: "Audiobook Interativo com Web Audio API",
    skillCategory: "Multimídia & Web APIs",
    institution: "Estudos de Acessibilidade & Multimídia",
    badge: "Web Audio API & Acessibilidade",
    description: "Livro digital com player de narração integrado, permitindo leitura simultânea e controle de reprodução nativo.",
    acquiredSkills: [
      "Controle de eventos da Web Audio API (play, pause, seek, onended)",
      "Sincronização entre progresso do áudio e leitura textual",
      "Interface acessível para deficientes visuais e auditivos",
      "Design sóbrio para leitura prolongada e modo noturno"
    ],
    academicResult: "Capacidade de implementar interfaces acessíveis e manipuladores de mídia sem dependências de terceiros.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Audio API"],
    githubUrl: "https://github.com/Menephyl/audiobook",
    liveUrl: "https://audiobook-js-theta.vercel.app/",
  },
  {
    id: "tabuada",
    title: "Tabuada Interativa & Lógica de Algoritmos",
    skillCategory: "Lógica de Programação & DOM",
    institution: "Estudos de Algoritmos",
    badge: "Algoritmos & Loops de Repetição",
    description: "Aplicação de cálculo e visualização de tabuadas com geração dinâmica de tabelas matemáticas no DOM.",
    acquiredSkills: [
      "Estruturas de repetição rigorosas (laços for e while)",
      "Sanitização e validação de dados de entrada numéricos",
      "Geração procedural de nós no DOM",
      "Prevenção de loops infinitos e travamentos de memória"
    ],
    academicResult: "Base matemática e raciocínio lógico sólido aplicado à programação de softwares.",
    technologies: ["JavaScript Vanilla", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Menephyl/tabuada",
  },
  {
    id: "artigo-android",
    title: "Artigo Histórico Android - Padrões W3C",
    skillCategory: "UI/UX & CSS Avançado",
    institution: "Estudos de Semântica Web",
    badge: "HTML Semântico & SEO On-Page",
    description: "Página editorial detalhando a história do mascote Bugdroid do Android, construída com foco em semântica estrita.",
    acquiredSkills: [
      "Uso avançado de tags semânticas (<article>, <aside>, <section>)",
      "Fundamentos de SEO On-Page para motores de busca",
      "Tipografia editorial com espaçamento harmônico de leitura",
      "Imagens responsivas com tag <picture> e fontes seguras"
    ],
    academicResult: "Criação de portais de conteúdo, blogs e documentações técnicas em conformidade total com padrões W3C.",
    technologies: ["HTML5 Semântico", "CSS3", "Design Responsivo"],
    githubUrl: "https://github.com/Menephyl/artigo-android",
    liveUrl: "https://aandroid.vercel.app/",
  },
];
