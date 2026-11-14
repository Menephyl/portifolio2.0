export interface RealProject {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: 
    | "Captação & Vendas de Alta Conversão"
    | "Automação & Atendimento com IA"
    | "Sistemas & Gestão Operacional"
    | "Plataformas SaaS & Métricas"
    | "Formação Técnica & Engenharia"
    | "Outros";
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  businessResult: string; // RESULTADO CONCRETO DE NEGÓCIO OU IMPACTO ENTREGUE
  developerSkills?: string[]; // HABILIDADES TÉCNICAS PRATICADAS
}

export const realProjects: RealProject[] = [
  // PROJETOS EM DESTAQUE PRINCIPAL
  {
    id: 0,
    title: "Site Psicólogo 8-bits",
    description: "Landing page temática gamer pixel art com foco em quebra de barreiras e agendamento de consultas.",
    longDescription: "Projeto desenvolvido para público gamer e desenvolvedores com estética retro 8-bits, eliminando a frieza de sites convencionais de saúde e facilitando a busca por apoio psicológico.",
    image: "/assets/psicologo8bits.png",
    tags: ["Conversão", "Pixel Art", "Gamer", "Saúde"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Menephyl",
    featured: true,
    businessResult: "Aumento na taxa de agendamento de consultas com público gamer através de identificação imediata e CTA humanizado.",
    developerSkills: ["Design Temático Pixel Art", "Arquitetura Componentizada", "Gatilhos de Empatia e Conversão"]
  },
  {
    id: 1,
    title: "Brazukas Delivery",
    description: "Ecossistema completo de food delivery com painel admin, gestão de pedidos e catálogo digital.",
    longDescription: "Solução completa que atende clientes no cardápio, cozinhas no controle de comandas e motoboys no despacho, com arquitetura própria sem depender de iFood ou terceiros.",
    image: "/assets/BrazukasDelivery.png",
    tags: ["Delivery", "Full-Stack", "E-Commerce", "Admin"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "Tailwind CSS"],
    liveUrl: "https://brazukas-delivery2.vercel.app/",
    githubUrl: "https://github.com/Menephyl/brazukas_delivery",
    featured: true,
    businessResult: "Redução de até 27% em taxas de comissão para o lojista e controle 100% autônomo da base de clientes e faturamento.",
    developerSkills: ["Arquitetura Full-Stack End-to-End", "Modelagem Relacional MySQL", "Comunicação tRPC Type-Safe", "Fluxos de Checkout"]
  },
  {
    id: 2,
    title: "Treinador Roth - Consultoria com IA",
    description: "Página de conversão de personal trainer com assistente inteligente de IA para qualificação e atendimento.",
    longDescription: "Landing page de alto impacto focada em consultoria esportiva. O visitante é recepcionado por um agente inteligente de IA treinado para tirar dúvidas, calcular metas e encaminhá-lo pronto para o WhatsApp.",
    image: "/assets/personaltrainer.png",
    tags: ["Agente IA", "Fitness", "WhatsApp", "Alta Conversão"],
    category: "Automação & Atendimento com IA",
    technologies: ["React", "Tailwind CSS", "IA Assistant", "OpenAI API"],
    liveUrl: "https://treinadorroth.com.br",
    featured: true,
    businessResult: "Dobro de leads qualificados captados através de atendimento 24 horas por dia sem deixar visitantes esperando resposta.",
    developerSkills: ["Integração de Agentes de IA Conversacional", "Funil de Vendas Automatizado", "Prompt Engineering Comercial", "Mobile First"]
  },
  {
    id: 3,
    title: "A Plataforma Prime Team",
    description: "Ecossistema SaaS da software house com dashboard interativo, métricas corporativas e captação B2B.",
    longDescription: "Dashboard corporativo dinâmico que centraliza serviços, vitrine tecnológica, gestão de leads e esteira de desenvolvimento de software em um único ambiente escalável.",
    image: "/assets/primeTeam.png",
    tags: ["SaaS", "Dashboard", "B2B", "Gestão"],
    category: "Plataformas SaaS & Métricas",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://a-plataforma-prime-team.vercel.app/",
    githubUrl: "https://github.com/Menephyl",
    featured: true,
    businessResult: "Canal estruturado para captação de clientes corporativos de alto ticket para desenvolvimento sob demanda.",
    developerSkills: ["Design System Corporativo B2B", "Dashboard em React 19", "Métricas & Gestão de Leads", "Performance de Renderização"]
  },
  {
    id: 4,
    title: "E-book Ordem do Seraphim",
    description: "Landing page de vendas de alta conversão integrada a gateway de checkout transparente para tráfego pago.",
    longDescription: "Estruturada para campanhas de anúncios em grande escala, com tempo de carregamento inferior a 1 segundo, storytelling convincente e fechamento imediato.",
    image: "/assets/ordemdoseraphim.png",
    tags: ["Infoproduto", "Checkout", "Tráfego Pago"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn"],
    liveUrl: "https://www.ordemdoseraphim.com/",
    featured: true,
    businessResult: "Maximização do ROI de campanhas de tráfego pago com checkout direto e zero atrito de compra.",
    developerSkills: ["Integração com Gateway de Pagamento", "Otimização de Carregamento e SEO", "Copywriting Visual Estruturado"]
  },
  {
    id: 41,
    title: "Fono de Bebês",
    description: "Landing page institucional humanizada para apresentação e agendamento de consultas de fonoaudiologia infantil.",
    longDescription: "Ambiente digital com design calmo e acolhedor para pais que buscam atendimento especializado para recém-nascidos e crianças na região.",
    image: "/assets/fonoaudiologa.png",
    tags: ["Saúde", "Institucional", "Agendamento", "Local"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://www.fonodebebes.com.br/",
    featured: true,
    businessResult: "Fidelização e atração contínua de famílias locais para consultas particulares com forte credibilidade médica.",
    developerSkills: ["Design Visual Humanizado", "Formulários de Contato Ágeis", "Otimização para Busca Local"]
  },
  {
    id: 5,
    title: "EcoPlay Creations",
    description: "Loja virtual e landing page sustentável para comercialização de brinquedos e materiais pedagógicos ecológicos.",
    longDescription: "Plataforma focada no nicho de sustentabilidade infantil, apresentando catálogo de produtos que conscientizam crianças sobre reciclagem e ecologia.",
    image: "/assets/EcoplayCreations.png",
    tags: ["E-Commerce", "Sustentabilidade", "Kids", "Vendas"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ecoplay-creations.vercel.app/",
    featured: true,
    businessResult: "Abertura de canal de venda digital direto ao consumidor com apelo visual sustentável de alta conversão.",
    developerSkills: ["E-Commerce Componentizado", "Filtros de Catálogo", "Animações Suaves de Engajamento"]
  },
  {
    id: 6,
    title: "Academia One Page",
    description: "Landing page fitness focada em conversão de matrículas e apresentação dos planos da academia.",
    longDescription: "Página moderna com fotos do espaço, modalidades de treino, depoimentos de alunos e gatilhos de escassez com link direto para o balcão virtual no WhatsApp.",
    image: "/assets/academia.png",
    tags: ["Fitness", "Matrículas", "Lead Gen"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://academia-one-page.vercel.app/",
    featured: true,
    businessResult: "Crescimento de matrículas com captação direta de interessados pelo celular.",
    developerSkills: ["Design Mobile-First", "CTAs Estratégicos com WhatsApp", "Hierarquia Visual de Planos"]
  },
  {
    id: 7,
    title: "Confeitaria Afeto & Delícias",
    description: "Vitrine digital artesanal com quiz interativo para montagem de bolos e pedidos automáticos.",
    longDescription: "Sistema inovador que guia o cliente por um quiz visual escolhendo recheio, massa e tamanho, gerando o resumo do pedido pronto para envio.",
    image: "/assets/bolo.png",
    tags: ["Food", "Quiz Interativo", "WhatsApp API"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://a-car-afeto-delights.vercel.app/",
    featured: true,
    businessResult: "Aumento do ticket médio e redução de 80% do tempo gasto atendendo mensagens no balcão tirando dúvidas de sabores.",
    developerSkills: ["Quiz Interativo com Estado Reativo", "Carrosséis Otimizados", "Encode de Mensagens Formatadas"]
  },
  {
    id: 8,
    title: "Pilates Academia & Bem-Estar",
    description: "Espaço online para atração e agendamento de aulas experimentais de pilates e fisioterapia postural.",
    longDescription: "Landing page que transmite profissionalismo clínico e bem-estar, com apresentação dos estúdios, certificações dos instrutores e horários disponíveis.",
    image: "/assets/pilatesacademia.png",
    tags: ["Saúde", "Pilates", "Agendamento"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://pilates-academia.vercel.app/",
    featured: true,
    businessResult: "Preenchimento regular de turmas com redução de horários ociosos do estúdio.",
    developerSkills: ["Design Clean e Confortável", "Carregamento Rápido", "Integração de Agenda"]
  },
  {
    id: 9,
    title: "Painel de Monitoramento MVP",
    description: "Micro-SaaS para controle de métricas e status operacional de projetos digitais em tempo real.",
    longDescription: "Dashboard para acompanhamento de uptime de servidores, consumo de recursos e status de entregas em tempo real.",
    image: "/assets/painelmonitoriamento.png",
    tags: ["SaaS", "Dashboard", "Métricas", "Admin"],
    category: "Plataformas SaaS & Métricas",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://painelmonitoriamento.vercel.app/",
    githubUrl: "https://github.com/Menephyl/dashboard",
    featured: true,
    businessResult: "Visibilidade em tempo real da saúde operacional das aplicações, evitando tempo de inatividade.",
    developerSkills: ["Monitoramento de Indicadores Chave", "Cards de Status Reativos", "UI Escura de Alta Legibilidade"]
  },
  {
    id: 10,
    title: "DevFlix SaaS - Streaming Educacional",
    description: "Plataforma de streaming de cursos e mentorias técnicas com interface moderna estilo Netflix.",
    longDescription: "Micro-SaaS focado em formação técnica, com carrosséis por temas, catálogo dinâmico de vídeos e acompanhamento de progresso do aluno.",
    image: "/assets/devflixsass0.png",
    tags: ["SaaS", "Streaming", "Educação", "Assinatura"],
    category: "Plataformas SaaS & Métricas",
    technologies: ["React", "JavaScript", "CSS3"],
    liveUrl: "https://devflix-sass.vercel.app/",
    githubUrl: "https://github.com/Menephyl",
    featured: true,
    businessResult: "Retenção contínua de alunos através de experiência visual de consumo agradável no estilo de grandes streamings.",
    developerSkills: ["Interface no Padrão Streaming", "Carrosséis Horizontais Fluidos", "Modularização de Módulos"]
  },
  {
    id: 11,
    title: "Tempero Artesanal & Especiarias",
    description: "Página gastronômica focada em venda de condimentos caseiros e receitas exclusivas.",
    longDescription: "Landing page com apelo sensorial e visual, fotos em alta resolução de receitas e botão de compra rápida para pedidos via delivery.",
    image: "/assets/tempero.png",
    tags: ["Gastronomia", "Food", "Delivery"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://temperoartesanal.vercel.app/",
    featured: true,
    businessResult: "Venda direta de temperos da marca sem depender de distribuidores físicos.",
    developerSkills: ["Design Visual Gastronômico", "Cards de Ingredientes", "Layout Fluido"]
  },
  {
    id: 12,
    title: "Sanderson AMK - Captação de Revendedores",
    description: "Funil de recrutamento de novos afiliados com apresentação interativa de ganhos e plano de carreira.",
    longDescription: "Landing page com passo a passo ilustrado para se tornar um consultor associado, esclarecendo dúvidas comuns e coletando pré-cadastros.",
    image: "/assets/amksan.png",
    tags: ["Afiliados", "Vendas", "Cadastro"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://sandersonamk.vercel.app/",
    featured: true,
    businessResult: "Geração consistente de novas adesões e expansão da rede de revendedores associados.",
    developerSkills: ["Formulário Multi-Etapas", "Gatilhos de Oportunidade", "Design Otimizado para Smartphones"]
  },
  {
    id: 13,
    title: "E-book IA Fitness",
    description: "One-page com distribuição de material rico gratuito em troca de e-mails de leads qualificados.",
    longDescription: "Landing page de baixíssima latência para campanhas de captação de contatos qualificados interessados em tecnologia aplicada ao esporte.",
    image: "/assets/vendaebookfit.png",
    tags: ["Captura de Leads", "Automação", "E-book"],
    category: "Automação & Atendimento com IA",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://iafitnessia.vercel.app/",
    featured: true,
    businessResult: "Construção de lista de e-mails engajados com custo por lead otimizado para futuras ofertas.",
    developerSkills: ["Integração de Formulários de Captura", "Disparo Imediato de Download", "Página Leve e Rápida"]
  },
  {
    id: 14,
    title: "Ah! Cardápio Dinâmico",
    description: "Cardápio QR Code de mesa e balcão com seleção ágil de itens e envio instantâneo para a cozinha.",
    longDescription: "Solução prática para bares e restaurantes: o cliente escaneia com a câmera do celular, navega pelas fotos, adiciona observações e envia o pedido formatado sem fricção.",
    image: "/assets/cardapio.png",
    tags: ["Cardápio Digital", "QR Code", "Food", "PWA"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    liveUrl: "https://ahcardapio.vercel.app/",
    githubUrl: "https://github.com/Menephyl/cardapio_dinamico",
    featured: true,
    businessResult: "Redução de até 40% no tempo de espera do cliente nas mesas e atendimento sem necessidade de garçom fixo por mesa.",
    developerSkills: ["Experiência Mobile PWA-like", "Integração Direta com WhatsApp", "Gestão de Estado de Pedidos"]
  },
  {
    id: 15,
    title: "Sistema de Usuários Sage (CRUD Corporativo)",
    description: "Painel administrativo de controle de usuários, com controle de permissões por perfil (RBAC) e logs.",
    longDescription: "Sistema corporativo com tabela paginada, filtros em tempo real, proteção contra exclusões indevidas e relatórios de colaboradores.",
    image: "/assets/cadastrousuarios.png",
    tags: ["Admin", "CRUD", "Segurança", "RBAC"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["React", "JavaScript", "Styled Components", "Node.js"],
    liveUrl: "https://cadastro-usuarios-sage.vercel.app/",
    githubUrl: "https://github.com/Menephyl",
    featured: true,
    businessResult: "Segurança de dados e conformidade interna com níveis de acesso estruturados por departamento.",
    developerSkills: ["Operações CRUD Completas", "Filtros e Paginação de Tabela", "Validação de Entrada de Dados"]
  },
  {
    id: 16,
    title: "Arquitetura de Império",
    description: "Landing page executiva para captação de clientes para consultoria de gestão de alto padrão.",
    longDescription: "Design sofisticado com narrativa estratégica para demonstrar a autoridade do consultor e fechar contratos corporativos.",
    image: "/assets/arquiteturaimperio.png",
    tags: ["Consultoria", "B2B", "High Ticket"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://sergiodias.vercel.app/",
    featured: false,
    businessResult: "Fechamento de contratos de mentoria empresarial de alto ticket através de prova social e autoridade.",
    developerSkills: ["Storytelling Corporativo", "Design Premium com Fundo Escuro", "Seções de Prova Social"]
  },
  {
    id: 17,
    title: "Fashion Store E-Commerce",
    description: "Loja virtual de vestuário com filtros combinados por categoria, tamanho e sacola de compras.",
    longDescription: "Plataforma de moda moderna com fotos de modelos, cálculo automático de sacola e navegação ágil entre coleções.",
    image: "/assets/store.png",
    tags: ["E-Commerce", "Moda", "Varejo"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://biancaloja.vercel.app/",
    githubUrl: "https://github.com/Menephyl",
    featured: false,
    businessResult: "Venda de roupas em escala nacional com vitrine limpa e processo de compra sem barreiras.",
    developerSkills: ["Filtros Combinados de Produtos", "Carrinho Persistente no LocalStorage", "Componentes Reutilizáveis"]
  },
  {
    id: 18,
    title: "Brazukas Partners Hub",
    description: "Portal administrativo para restaurantes associados gerenciarem preços, fotos e repasses financeiros.",
    longDescription: "Painel do lojista no ecossistema Brazukas, permitindo pausar itens esgotados, alterar valores e visualizar histórico diário de faturamento.",
    image: "/assets/BrazukasPartners.png",
    tags: ["Admin", "Logística", "Dashboard"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://brazukasspartners.vercel.app/",
    githubUrl: "https://github.com/Menephyl/brazukas_delivery",
    featured: false,
    businessResult: "Autonomia completa do lojista sem necessidade de suporte manual para alterações de catálogo.",
    developerSkills: ["Painel de Métricas Diárias", "Gerenciamento de Cardápio em Tempo Real", "Design Operacional Ágil"]
  },

  // PROJETOS ADICIONAIS REFERENCIADOS EM IMAGENS
  {
    id: 28,
    title: "Filipe AMK - Expansão de Franquias",
    description: "Página de captação de líderes e revendedores com apresentação detalhada do modelo de negócios.",
    longDescription: "Página desenvolvida com apresentação de produtos, simulador de ganhos e redirecionamento direto para entrevista individual no WhatsApp.",
    image: "/assets/amk-filipe.png",
    tags: ["Recrutamento", "Vendas", "WhatsApp"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://sandersonamk.vercel.app/",
    featured: false,
    businessResult: "Aceleração do fechamento de novos parceiros com apresentação persuasiva do plano de expansão.",
    developerSkills: ["Simulador Visual de Ganhos", "Carregamento Otimizado para Celulares", "Design Comercial"]
  },
  {
    id: 29,
    title: "Cardápio React PWA (Versão Interativa)",
    description: "Aplicação web progressiva para bares e lanchonetes com busca em tempo real e carrinho reativo.",
    longDescription: "Cardápio construído em React com busca instantânea por ingrediente ou nome de prato, cálculo de frete e resumo automático do pedido.",
    image: "/assets/cardapio-react.png",
    tags: ["PWA", "Food", "Delivery", "React"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://ahcardapio.vercel.app/",
    githubUrl: "https://github.com/Menephyl/cardapio_dinamico",
    featured: false,
    businessResult: "Experiência de aplicativo nativo sem ocupar espaço na memória do aparelho do cliente.",
    developerSkills: ["Arquitetura PWA", "Controle de Estado de Carrinho", "Busca em Tempo Real com Filtros"]
  },
  {
    id: 30,
    title: "Psicologia Clínica & Acolhimento",
    description: "Landing page para atendimento clínico com design suave e formulário de triagem inicial.",
    longDescription: "Página desenvolvida para psicólogos que buscam posicionamento profissional humanizado, com explicação das abordagens terapêuticas e agendamento discreto.",
    image: "/assets/psicologo.png",
    tags: ["Saúde Mental", "Consultório", "Agendamento"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
    featured: false,
    businessResult: "Construção de autoridade e acolhimento que converte visitantes com dúvidas em consultas agendadas.",
    developerSkills: ["Design Minimalista e Empático", "Estruturação de Dúvidas Frequentes (FAQ)", "Formulário Seguro"]
  },
  {
    id: 31,
    title: "San Amakha - Portal do Empreendedor",
    description: "Portal de apoio e captação para consultores com catálogo digital de perfumes e cosméticos.",
    longDescription: "Vitrine digital com todos os produtos da linha, depoimentos de clientes satisfeitos e direcionamento para compra direta.",
    image: "/assets/san-amakha.png",
    tags: ["Cosméticos", "Catálogo", "Vendas Diretas"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://sandersonamk.vercel.app/",
    featured: false,
    businessResult: "Catálogo sempre atualizado no bolso de cada consultor para apresentação em qualquer lugar.",
    developerSkills: ["Catálogo de Produtos em Grade", "Otimização de Imagens", "Acesso Rápido a Links de Compra"]
  },

  // PROJETOS EM ANDAMENTO (SINCRONIZADOS COM GITHUB)
  {
    id: 19,
    title: "Projeto em Andamento 01 - Menephyl Burguer",
    description: "Sistema Full-Stack de hamburgueria com API dedicada, painel de cozinha e área de cliente.",
    longDescription: "Plataforma completa para gestão de hamburgueria: o cliente monta o lanche customizado, o pedido cai na tela do chapeiro em tempo real e o motoboy recebe o alerta de rota.",
    image: "/assets/andamento01.png",
    tags: ["Em Andamento", "Full-Stack", "Delivery", "API"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["React", "Node.js", "Express", "API REST"],
    liveUrl: "https://github.com/Menephyl/Menephyl_dev_burguer",
    githubUrl: "https://github.com/Menephyl/menephyl_dev_burguer_api",
    featured: true,
    businessResult: "Sincronização instantânea da cozinha evitando atrasos e perdas de comandas no horário de pico.",
    developerSkills: ["Arquitetura RESTful no Node.js", "Integração Front-to-Back", "Gerenciamento de Estados de Pedidos"]
  },
  {
    id: 20,
    title: "Projeto em Andamento 02 - DevBills API",
    description: "API de gestão financeira com foco em segurança, autenticação JWT e conciliação bancária.",
    longDescription: "Backend escalável para controle financeiro pessoal e empresarial: lançamentos de receitas e despesas, centro de custos, categorias e segurança por token.",
    image: "/assets/andamento02.png",
    tags: ["Em Andamento", "Finanças", "API", "JWT"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["Node.js", "TypeScript", "Express", "JWT"],
    liveUrl: "https://github.com/Menephyl/menephyl-devbills-api",
    githubUrl: "https://github.com/Menephyl/menephyl-devbills-api",
    featured: true,
    businessResult: "Precisão contábil e proteção contra fraudes financeiras com conciliação automática.",
    developerSkills: ["Autenticação Segura JWT", "Regras de Negócio Financeiras", "Middlewares de Tratamento de Erro"]
  },
  {
    id: 21,
    title: "Projeto em Andamento 03 - ParkingOps Enterprise .NET",
    description: "Arquitetura escalável em C# e .NET para controle de pátio, cancelas e faturamento por hora.",
    longDescription: "Sistema robusto em C# para controle de fluxo de estacionamentos rotativos e mensalistas, com leitura de placas, controle de vagas e faturamento por fração de tempo.",
    image: "/assets/andamento03.jpg",
    tags: ["Em Andamento", "C#", ".NET", "Enterprise"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["C#", ".NET", "Entity Framework", "Swagger"],
    liveUrl: "https://github.com/Menephyl/ParkingOps-Enterprise-.NET",
    githubUrl: "https://github.com/Menephyl/ParkingOps-Enterprise-.NET",
    featured: true,
    businessResult: "Eliminação de evasão de receita em estacionamentos com controle automatizado de entrada e saída.",
    developerSkills: ["Orientação a Objetos em C#", "Documentação com Swagger/OpenAPI", "Modelagem com Entity Framework"]
  },
  {
    id: 22,
    title: "Projeto em Andamento 04 - Brazukas System Logística",
    description: "Módulo avançado de logística com rastreamento de entregas em tempo real e mapas interativos.",
    longDescription: "Evolução do ecossistema Brazukas adicionando rastreamento de rota por geolocalização no mapa, comunicação contínua via WebSockets e despacho automático.",
    image: "/assets/BrazukasDelivery.png",
    tags: ["Em Andamento", "Logística", "Real-Time", "WebSockets"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "Leaflet"],
    liveUrl: "https://brazukas-delivery2.vercel.app/",
    githubUrl: "https://github.com/Menephyl/brazukas_delivery",
    featured: true,
    businessResult: "Redução em até 30% do tempo de rota de entregadores e redução de suporte com rastreamento na mão do cliente.",
    developerSkills: ["Eventos em Tempo Real via WebSockets", "Geolocalização & Mapas Interativos", "Despacho Inteligente"]
  },
  {
    id: 23,
    title: "Projeto em Andamento 05 - Dashboard Analytics & SaaS",
    description: "Painel modular de controle empresarial com gráficos analíticos, métricas MRR e gestão de acessos.",
    longDescription: "Dashboard para gestão de startups e empresas, com gráficos dinâmicos de faturamento, gestão de contratos, permissões por usuário (RBAC) e relatórios em PDF.",
    image: "/assets/painelmonitoriamento.png",
    tags: ["Em Andamento", "SaaS", "Dashboard", "Analytics"],
    category: "Plataformas SaaS & Métricas",
    technologies: ["Next.js", "React", "TypeScript", "Recharts", "Tailwind CSS"],
    liveUrl: "https://github.com/Menephyl/dashboard",
    githubUrl: "https://github.com/Menephyl/dashboard",
    featured: true,
    businessResult: "Tomada de decisão baseada em números reais de receita, churn e novos contratos em tela única.",
    developerSkills: ["Visualização de Dados com Recharts", "Autenticação RBAC", "Componentes Modulares de Dashboard"]
  }
];

export const projectCategories = [
  "Todos",
  "Captação & Vendas de Alta Conversão",
  "Automação & Atendimento com IA",
  "Sistemas & Gestão Operacional",
  "Plataformas SaaS & Métricas"
] as const;

export const projectTags = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "Full-Stack",
  "E-Commerce",
  "SaaS",
  "Admin",
  "Dashboard",
  "IA",
  "API"
];
