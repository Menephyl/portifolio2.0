export interface AcademicProject {
  id: string;
  title: string;
  institution: string;
  badge: string;
  description: string;
  acquiredSkills: string[];
  academicResult: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const academicProjects: AcademicProject[] = [
  {
    id: "pass-in",
    title: "Pass In - Gestão de Eventos & Credenciamento",
    institution: "Rocketseat (NLW Unite)",
    badge: "React & TypeScript Avançado",
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
    id: "spotify-clone",
    title: "Spotify Clone - Interface & Player de Áudio",
    institution: "Dev Club (Front-End Club)",
    badge: "Engenharia Reversa de UI",
    description: "Engenharia reversa fiel da interface desktop do Spotify, com saudação dinâmica conforme o relógio e reprodução musical.",
    acquiredSkills: [
      "CSS Grid e Flexbox avançado para layouts de mídia",
      "Lógica assíncrona com Async/Await e Fetch API",
      "Cálculo temporal em tempo real (fuso horário e saudações)",
      "Manipulação de tags e controles de áudio no DOM"
    ],
    academicResult: "Capacidade de replicar interfaces de padrão global com fidelidade pixel-perfect e controle multimídia nativo.",
    technologies: ["JavaScript ES6+", "HTML5", "CSS3 Grid", "API REST", "Audio API"],
    githubUrl: "https://github.com/Menephyl/spotify-clone",
    liveUrl: "https://spotify-clone-yan.vercel.app",
  },
  {
    id: "cardapio-dinamico",
    title: "Cardápio Dinâmico & Checkout WhatsApp",
    institution: "Dev Club",
    badge: "Lógica Comercial & APIs",
    description: "Catálogo interativo com montagem de pedidos, cálculo em tempo real de subtotal e finalização automática via WhatsApp.",
    acquiredSkills: [
      "Manipulação estruturada de objetos e arrays JSON",
      "Lógica de carrinho (adicionar, remover, totalizadores)",
      "Encode de parâmetros de URL para WhatsApp Click-to-Chat",
      "Programação funcional e manipulação reativa do DOM"
    ],
    academicResult: "Compreensão da jornada de compra sem atrito e criação de automações comerciais integradas a mensageiros.",
    technologies: ["JavaScript ES6+", "HTML5", "CSS3", "WhatsApp API"],
    githubUrl: "https://github.com/Menephyl/cardapio_dinamico",
    liveUrl: "https://cardapio-digital.vercel.app",
  },
  {
    id: "cordel-moderno",
    title: "Cordel Moderno com Parallax Puro",
    institution: "Curso em Vídeo (Gustavo Guanabara)",
    badge: "CSS Avançado & Performance",
    description: "Experiência de leitura poética com efeito Parallax tridimensional desenvolvido inteiramente em CSS puro.",
    acquiredSkills: [
      "Propriedades avançadas de CSS (background-attachment: fixed)",
      "Semântica HTML5 rigorosa e conformidade com W3C",
      "Tipografia responsiva com medidas relativas (rem e vw)",
      "Carregamento ultra-rápido com pontuação 100 no Google Lighthouse"
    ],
    academicResult: "Domínio profundo da fundação da web e efeitos visuais imersivos sem dependência de bibliotecas externas pesadas.",
    technologies: ["HTML5 Semântico", "CSS3 Avançado", "Design Responsivo", "Parallax"],
    githubUrl: "https://github.com/Menephyl/cordel",
    liveUrl: "https://cordel-yan.vercel.app",
  },
  {
    id: "cadastro-checkin",
    title: "Sistema de Cadastro & Check-In em Tempo Real",
    institution: "Rocketseat",
    badge: "Manipulação de Dados",
    description: "Tabela dinâmica de participantes com confirmação instantânea de presença e auditoria de cadastros.",
    acquiredSkills: [
      "Validação de formulários e estados de input",
      "Formatação e manipulação de datas no JavaScript",
      "Filtros de busca instantâneos sem recarregar a tela",
      "Arquitetura de componentes limpos e reutilizáveis"
    ],
    academicResult: "Aperfeiçoamento de lógica de dados em tempo real e controle de consistência de entradas de usuário.",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM Events"],
    githubUrl: "https://github.com/Menephyl/cadastro-checkin",
  },
  {
    id: "watch-apple",
    title: "Watch Apple - Showcase Interativo de Gadgets",
    institution: "Estudos de UI / Microinterações",
    badge: "Design de Produto",
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
    institution: "Estudos de Mídia & Retenção",
    badge: "Storytelling & Conversão",
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
    institution: "Estudos de Acessibilidade & Multimídia",
    badge: "Web Audio API",
    description: "Livro digital com player de narração integrado, permitindo leitura simultânea e controle de reprodução.",
    acquiredSkills: [
      "Controle de eventos da Web Audio API (play, pause, seek, onended)",
      "Sincronização entre progresso do áudio e leitura textual",
      "Interface acessível para deficientes visuais e auditivos",
      "Design sóbrio para leitura prolongada e modo noturno"
    ],
    academicResult: "Capacidade de implementar interfaces acessíveis e manipuladores de mídia sem dependências de terceiros.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Audio API"],
    githubUrl: "https://github.com/Menephyl/audiobook",
  },
  {
    id: "tabuada",
    title: "Tabuada Interativa & Lógica de Algoritmos",
    institution: "Fundamentos de Ciência da Computação",
    badge: "Lógica de Programação",
    description: "Aplicação de cálculo e visualização de tabuadas com geração dinâmica de tabelas matemáticas.",
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
    institution: "Curso em Vídeo (Gustavo Guanabara)",
    badge: "Semântica Web & SEO",
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
  },
  {
    id: "cv-online",
    title: "CV Online Interativo com Menu Lateral",
    institution: "Portfólio de Formação Inicial",
    badge: "Arquitetura SPA Vanilla",
    description: "Primeira versão de portfólio pessoal interativo com menu lateral fixo e navegação dinâmica por seções.",
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
  }
];

