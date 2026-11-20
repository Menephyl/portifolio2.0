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
  | "Outros" | "Painel"
  ;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  businessResult: string; // RESULTADO CONCRETO DE NEGÓCIO OU IMPACTO ENTREGUE
  developerSkills?: string[]; // HABILIDADES TÉCNICAS PRATICADAS
}

export const realProjects: RealProject[] = [
  // PROJETOS EM DESTAQUE PRINCIPAL VALIDADO EM PRODUÇÃO
  {
    id: 3,
    title: "A Plataforma Prime Team",
    description: "Ecossistema SaaS da software house com dashboard interativo, métricas corporativas e captação B2B (+300% engajamento).",
    longDescription: "Dashboard corporativo dinâmico que centraliza serviços, vitrine tecnológica, gestão de leads e esteira de desenvolvimento de software em um único ambiente escalável.",
    image: "/assets/primeTeam.png",
    tags: ["SaaS", "Dashboard", "B2B", "Gestão"],
    category: "Plataformas SaaS & Métricas",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://a-plataforma-prime-team.vercel.app/",
    githubUrl: "https://github.com/Menephyl",
    featured: true,
    businessResult: "+300% de engajamento corporativo e canal estruturado para captação de clientes B2B de alto ticket.",
    developerSkills: ["Design System Corporativo B2B", "Dashboard em React 19", "Métricas & Gestão de Leads", "Performance de Renderização"]
  },
  {
    id: 101,
    title: " Salão de beleza SASS — Área do Cliente & Assinaturas",
    description: "Plataforma de agendamento online e clube de fidelidade por assinatura para salões de beleza e barbearias.",
    longDescription: "Ecossistema client-facing que permite aos clientes agendarem horários em tempo real, escolherem profissionais e assinarem planos mensais com renovação automática, reduzindo faltas e garantindo faturamento previsível. Salão SaaS é um sistema para agendamento de serviços em salões de beleza e barbearias. Com ele, os clientes podem agendar serviços em tempo real, escolher profissionais e assinar planos mensais com renovação automática, reduzindo faltas e garantindo faturamento previsível.",
    image: "/assets/salaovitrine.png",
    tags: ["SaaS", "Assinatura", "Agendamento", "Clube VIP"],
    category: "Plataformas SaaS & Métricas",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Stripe"],
    liveUrl: "https://salao-sass-para-clientes.vercel.app/",
    githubUrl: "https://github.com/Menephyl",
    featured: true,
    businessResult: "Previsibilidade de receita recorrente (MRR) via clube de assinaturas e redução de 70% no no-show de agendamentos.",
    developerSkills: ["Modelagem de Assinaturas Recorrentes", "Agendamento em Tempo Real", "UX Mobile-First Fluida"]
  },
  {
    id: 102,
    title: "Salão SaaS — Painel Administrativo & PDV",
    description: "Sistema completo de gestão com agenda multithread, frente de caixa (PDV), controle de comissões e DRE.",
    longDescription: "Painel empresarial completo para donos de salão: controle unificado da agenda de múltiplos profissionais, frente de caixa (PDV) com múltiplos meios de pagamento, cálculo automático de comissões e relatórios financeiros analíticos. Salão SaaS é um sistema para agendamento de serviços em salões de beleza e barbearias. Com ele, os clientes podem agendar serviços em tempo real, escolher profissionais e assinar planos mensais com renovação automática, reduzindo faltas e garantindo faturamento previsível.",
    image: "/assets/salaoadmin.png",
    tags: ["SaaS", "PDV", "Comissões", "Financeiro", "Admin"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["html", "css", "javascript", "firebase"],
    liveUrl: "https://salao-sass-admin.vercel.app/",
    githubUrl: "https://github.com/Menephyl",
    featured: true,
    businessResult: "Eliminação total de erros manuais no repasse de comissões e redução de 15 horas semanais no fechamento contábil.",
    developerSkills: ["Painel Administrativo Completo", "Frente de Caixa (PDV)", "Cálculo de Comissões Automatizado", "Relatórios Financeiros"]
  },
  {
    id: 1,
    title: "Brazukas Delivery — Plataforma Completa",
    description: "Ecossistema full-stack de food delivery para eliminação de taxas abusivas de marketplaces (Cliente, Lojista e Motoboy).",
    longDescription: "Solução completa que atende clientes no cardápio, cozinhas no controle de comandas e motoboys no despacho, com arquitetura própria e zero dependência de plataformas terceiras.",
    image: "/assets/BrazukasDelivery.png",
    tags: ["Delivery", "Full-Stack", "E-Commerce", "Admin"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "Tailwind CSS"],
    liveUrl: "https://brazukas-delivery2.vercel.app/",
    githubUrl: "https://github.com/Menephyl/brazukas_delivery",
    featured: true,
    businessResult: "Economia de até 27% em taxas de comissão por pedido e controle 100% autônomo da base de clientes e faturamento. Lucro por percentual similar ao ifood",
    developerSkills: ["Arquitetura Full-Stack End-to-End", "Modelagem Relacional MySQL", "Comunicação tRPC Type-Safe", "Fluxos de Checkout"]
  },
  {
    id: 103,
    title: "S-Move Mobilidade Urbana — Rede & Expansão",
    description: "Página de captação e redirecionamento estratégico para marketing multinível com vídeo hero e entrega de e-book.",
    longDescription: "Plataforma desenhada para alta conversão em campanhas de expansão de rede, integrando vídeo de apresentação, captura de leads em formulário multi-etapas e entrega imediata de e-book explicativo.",
    image: "/assets/recadastro1.png",
    tags: ["Marketing Multinível", "Captação", "Vídeo Hero", "E-book"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Automação"],
    liveUrl: "https://smovesan.vercel.app/",
    githubUrl: "https://github.com/Menephyl",
    featured: true,
    businessResult: "Multiplicação da taxa de adesão de novos afiliados através de storytelling persuasivo e automação de e-book.",
    developerSkills: ["Player de Vídeo Otimizado", "Funil de Captação Rápido", "Automação de Envio de Material Rico"]
  },
  {
    id: 41,
    title: "Fono de Bebês — Dra. Priscilla Miranda",
    description: "Plataforma institucional e de agendamento para fonoaudiologia materno-infantil com assistente virtual integrado.",
    longDescription: "Ambiente digital com design humanizado para atendimento especializado em amamentação, motricidade orofacial e desenvolvimento infantil, com triagem e agendamento automatizado.",
    image: "/assets/fonoaudiologa.png",
    tags: ["Saúde", "Institucional", "Agendamento", "Assistente IA"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["Html", "Css", "JavaScript",],
    liveUrl: "https://www.fonodebebes.com.br/",
    featured: true,
    businessResult: "Fidelização e atração contínua de famílias com pré-triagem automatizada e redução de faltas em consultas.",
    developerSkills: ["Design Visual Humanizado", "Formulários de Triagem Ágeis", "Otimização para Busca Local"]
  },
  {
    id: 2,
    title: "Treinador Roth — Consultoria com IA",
    description: "Página de conversão com agente inteligente de IA integrado para qualificação e atendimento de alunos 24/7.",
    longDescription: "Landing page de alto impacto focada em consultoria esportiva. O visitante é recepcionado por um agente inteligente de IA treinado para tirar dúvidas, calcular metas e encaminhá-lo pronto para o WhatsApp.",
    image: "/assets/personaltrainer.png",
    tags: ["Agente IA", "Fitness", "WhatsApp", "Alta Conversão"],
    category: "Automação & Atendimento com IA",
    technologies: ["React", "Tailwind CSS", "IA Assistant", "OpenAI API"],
    liveUrl: "https://treinadorroth.com.br",
    featured: true,
    businessResult: "Dobro de leads qualificados captados através de atendimento ininterrupto 24 horas por dia.",
    developerSkills: ["Integração de Agentes de IA Conversacional", "Funil de Vendas Automatizado", "Prompt Engineering Comercial", "Mobile First"]
  },
  {
    id: 4,
    title: "Manual da Vida Moderna (Ordem do Seraphim)",
    description: "Landing page de vendas de alta conversão integrada a gateway de checkout transparente para tráfego pago (+45% conversão).",
    longDescription: "Estruturada para campanhas de anúncios em grande escala, com tempo de carregamento inferior a 1 segundo, storytelling convincente e fechamento imediato.",
    image: "/assets/ordemdoseraphim.png",
    tags: ["Infoproduto", "Checkout", "Tráfego Pago", "Alta Conversão"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn"],
    liveUrl: "https://www.ordemdoseraphim.com/",
    featured: true,
    businessResult: "Crescimento de +45% na taxa de conversão direta com checkout sem fricção e alta retenção de tráfego.",
    developerSkills: ["Integração com Gateway de Pagamento", "Otimização de Carregamento e SEO", "Copywriting Visual Estruturado"]
  },
  {
    id: 7, // ajustar para o próximo índice do seu array
    title: "RA Moda Masculina — E-commerce & Catálogo",
    description: "Loja virtual de moda masculina com busca de produtos, filtro por categorias, carrinho lateral interativo e checkout completo para entrega ou retirada agendada.",
    longDescription: "E-commerce desenvolvido para a marca RA Moda Masculina com vitrine promocional, pesquisa em tempo real e navegação por categorias. O carrinho lateral gerencia itens, cálculo automático de subtotal, descontos e total, além de oferecer fluxo em abas para entrega com seleção de forma de pagamento ou retirada na loja com agendamento de horário (08h às 18h).",
    image: "/assets/modamasculina.png",
    tags: ["E-commerce", "Moda Masculina", "Carrinho", "Checkout", "Conversão"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    liveUrl: "https://moda-e-commerce.vercel.app/",
    githubUrl: "https://github.com/Menephyl", // atualizar caso queira apontar para o repositório específico
    featured: true,
    businessResult: "Autonomia total na montagem de pedidos com escolha de entrega, retirada agendada e forma de pagamento, reduzindo atrito no atendimento e acelerando o fechamento de vendas.",
    developerSkills: ["Arquitetura de Carrinho e Checkout", "Filtros Dinâmicos e Busca de Produtos", "Acessibilidade (ARIA) e UX Mobile-First"]
  },
  {
    id: 14,
    title: "Cardápio Dinâmico",
    description: "Cardápio digital via QR Code com pedidos instantâneos enviados diretamente para a cozinha e WhatsApp.",
    longDescription: "Solução prática para bares e restaurantes: o cliente escaneia com a câmera do celular, navega pelas fotos, adiciona observações e envia o pedido formatado sem fricção.",
    image: "/assets/cardapio2.png",
    tags: ["Cardápio Digital", "QR Code", "Food", "PWA"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    liveUrl: "https://cardapiodinamico-5rhp.vercel.app/",
    githubUrl: "",
    featured: true,
    businessResult: "Redução de até 40% no tempo de espera do cliente nas mesas e atendimento sem necessidade de garçom fixo por mesa.",
    developerSkills: ["Experiência Mobile PWA-like", "Integração Direta com WhatsApp", "Gestão de Estado de Pedidos"]
  },
  {
    id: 21,
    title: "Parking Apps & API (C# / .NET / Kubernetes)",
    description: "Arquitetura corporativa em C#, .NET e Kubernetes para controle automatizado de estacionamentos e cancelas.",
    longDescription: "Sistema robusto em C# para controle de fluxo de estacionamentos rotativos e mensalistas, com leitura de placas, controle de vagas e faturamento por fração de tempo.",
    image: "/assets/andamento03.jpg",
    tags: ["C#", ".NET", "Kubernetes", "Enterprise"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["C#", ".NET", "Kubernetes", "Entity Framework", "Swagger"],
    liveUrl: "https://github.com/Menephyl/ParkingOps-Enterprise-.NET",
    githubUrl: "https://github.com/Menephyl/ParkingOps-Enterprise-.NET",
    featured: true,
    businessResult: "Eliminação total de evasão de receita em estacionamentos com controle automatizado e monitoramento escalável.",
    developerSkills: ["Orientação a Objetos em C#", "Orquestração com Kubernetes", "Documentação com Swagger/OpenAPI"]
  },
  {
    id: 19,
    title: "Dev Burguer — PDV & Gestão de Cozinha",
    description: "Sistema Full-Stack de hamburgueria com API dedicada, painel de cozinha em tempo real e área do cliente.",
    longDescription: "Plataforma completa para gestão de hamburgueria: o cliente monta o lanche customizado, o pedido cai na tela do chapeiro em tempo real e o motoboy recebe o alerta de rota.",
    image: "/assets/andamento01.jpg",
    tags: ["Food", "PDV", "Full-Stack", "Gestão"],
    category: "Sistemas & Gestão Operacional",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://github.com/Menephyl/Menephyl_dev_burguer",
    githubUrl: "https://github.com/Menephyl/menephyl_dev_burguer_api",
    featured: true,
    businessResult: "Aceleração de 50% na linha de produção da cozinha e controle unificado de caixa e insumos.",
    developerSkills: ["Arquitetura de PDV em Tempo Real", "Modelagem com PostgreSQL", "Gestão de Estado Global"]
  },
  {
    id: 6, // ajustar para o próximo índice do seu array
    title: "CRM Codex — Gestão de Leads e Funil Comercial",
    description: "Sistema CRM full stack para centralização de leads, acompanhamento de funil de vendas e métricas comerciais em tempo real.",
    longDescription: "Aplicação web de CRM desenvolvida para organizar a operação comercial de ponta a ponta, reunindo gestão de contatos, pipeline de oportunidades por etapa e painel analítico para tomada de decisão estratégica sem perda de follow-ups.",
    image: "/assets/crm-codex.png", // ajustar para o caminho da sua imagem
    tags: ["CRM", "Painel", "Gestão Comercial", "Funil de Vendas", "Dashboard"],
    category: "Painel", // ajustar se usar outra categoria no filtro do portfólio
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"], // confirmar stack exata do projeto
    liveUrl: "https://crm-codex-alpha.vercel.app/",
    githubUrl: "https://github.com/Menephyl/crm-codex",
    featured: true,
    businessResult: "Centralização do histórico de clientes e visibilidade clara do funil de vendas, reduzindo a perda de leads e acelerando a conversão comercial.",
    developerSkills: ["Arquitetura Full Stack de CRM", "Modelagem de Dados e Funil Comercial", "Dashboard Analítico e Gestão de Estado"]
  },
  {
    id: 0,
    title: "Site Psicólogo 8-bits",
    description: "Landing page temática gamer pixel art com foco em quebra de barreiras e agendamento de consultas.",
    longDescription: "Projeto desenvolvido para público gamer e desenvolvedores com estética retro 8-bits, eliminando a frieza de sites convencionais de saúde e facilitando a busca por apoio psicológico.",
    image: "/assets/psicologo8bits.png",
    tags: ["Conversão", "Pixel Art", "Gamer", "Saúde"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.psicolana.com.br/",
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
    title: "Academia",
    description: "Landing page fitness focada em conversão de matrículas e apresentação dos planos da academia.",
    longDescription: "Página moderna com fotos do espaço, modalidades de treino, depoimentos de alunos e gatilhos de escassez com link direto para o balcão virtual no WhatsApp.",
    image: "/assets/academia.png",
    tags: ["Fitness", "Landing Page"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://academia-one-page.vercel.app/",
    featured: true,
    businessResult: "Crescimento de matrículas com captação direta de interessados pelo celular.",
    developerSkills: ["Design Mobile-First", "CTAs Estratégicos com WhatsApp", "Hierarquia Visual de Planos"]
  },
  {
    id: 7,
    title: "Confeitaria Açúcar & Afeto ",
    description: "Vitrine digital artesanal com quiz interativo para montagem de bolos e pedidos automáticos.",
    longDescription: "pagina inovadora que guia o cliente por um quiz visual escolhendo recheio, massa e tamanho, gerando o resumo do pedido pronto para envio.",
    image: "/assets/bolo.png",
    tags: ["Food", "Quiz Interativo", "Agendamento", "Landing Page"],
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
    tags: ["Saúde", "Pilates", "Agendamento", "Landing Page"],
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
    id: 2, // ajustar para o próximo índice do seu array
    title: "Barbearia — Painel de Agendamentos & Gestão",
    description: "Painel administrativo completo para barbearias com gestão de agendamentos, cadastro de clientes com planos recorrentes, controle de pagamentos e relatórios financeiros com gráficos.",
    longDescription: "Sistema web de gestão desenvolvido para centralizar a operação diária de barbearias em um único painel. Reúne cadastro e listagem de clientes com status de planos ativos, agenda filtrável por profissional e serviço, controle de pagamentos mensais, indicadores de faturamento e ticket médio, além de relatório detalhado e gráfico de faturamento por serviço.",
    image: "/assets/barbearia-painel.png", // ajustar para o caminho da sua imagem
    tags: ["Painel", "Agendamentos", "Gestão", "Dashboard", "Financeiro"],
    category: "Painel", // ajustar caso o filtro do seu portfólio use um rótulo maior (ex: "Painéis & Sistemas de Gestão")
    technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Vercel"], // adicionar Firebase ou LocalStorage caso utilize persistência de dados
    liveUrl: "https://barbeaira-agendamentos.vercel.app/",
    githubUrl: "https://github.com/Menephyl/barbeaira-agendamentos",
    featured: true,
    businessResult: "Centralização da agenda, dos planos de mensalistas e do controle financeiro em tempo real, oferecendo visibilidade imediata de faturamento, ticket médio e desempenho por serviço.",
    developerSkills: ["Arquitetura de Dashboard Administrativo", "Gestão de Estado e Filtros Dinâmicos", "Visualização de Dados e Relatórios Financeiros"]
  },

  {
    id: 12,
    title: "Sanderson AMK - Captação de Revendedores",
    description: "Funil de recrutamento de novos afiliados com apresentação interativa de ganhos e plano de carreira.",
    longDescription: "Landing page com passo a passo ilustrado para se tornar um consultor associado, esclarecendo dúvidas comuns e coletando pré-cadastros.",
    image: "/assets/amksan.png",
    tags: ["Afiliados", "Vendas", "Cadastro", "Multinível"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://sandersonamk.vercel.app/",
    featured: true,
    businessResult: "Geração consistente de novas adesões e expansão da rede de revendedores associados.",
    developerSkills: ["Formulário Multi-Etapas", "Gatilhos de Oportunidade", "Design Otimizado para Smartphones"]
  },
  {
    id: 2, // ajustar para o próximo índice do seu array
    title: "Proposta Comercial & Contrato Digital - Prime Team",
    description: "Página web interativa de proposta comercial com detalhamento de escopo, planos de investimento e fluxo direto para aceite, assinatura e impressão de contrato.",
    longDescription: "Solução desenvolvida pela Prime Team Dev para substituir PDFs estáticos por uma experiência web profissional de fechamento comercial. Organiza identificação, objetivos, entregáveis, prazos, política de manutenção, comparativo de pacotes e direciona o cliente no clique de aceite para o contrato pronto para assinatura e impressão.",
    image: "/assets/proposta-comercial.png", // ajustar para o caminho da sua imagem
    tags: ["Proposta Comercial", "Contrato Digital", "B2B", "Conversão"],
    category: "Captação & Vendas de Alta Conversão", // ajustar se usar outra categoria fixa no filtro
    technologies: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    liveUrl: "https://proposta-umber.vercel.app/",
    githubUrl: "https://github.com/Menephyl/proposta",
    featured: true,
    businessResult: "Elevação da autoridade comercial na apresentação de orçamentos, garantindo alinhamento transparente de escopo e agilizando o aceite e a formalização do contrato.",
    developerSkills: ["Arquitetura de Documentos Interativos", "Fluxo de Aceite e Impressão Web", "Layout Corporativo Responsivo"]
  },
  {
    id: 13,
    title: "E-book IA Fitness",
    description: "One-page com distribuição de material rico gratuito em troca de e-mails de leads qualificados.",
    longDescription: "Landing page de baixíssima latência para campanhas de captação de contatos qualificados interessados em tecnologia aplicada ao esporte.",
    image: "/assets/vendaebookfit.png",
    tags: ["Captura de Leads", "infoproduto", "E-book"],
    category: "Automação & Atendimento com IA",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://iafitnessia.vercel.app/",
    featured: true,
    businessResult: "Construção de lista de e-mails engajados com custo por lead otimizado para futuras ofertas.",
    developerSkills: ["Integração de Formulários de Captura", "Disparo Imediato de Download", "Página Leve e Rápida"]
  },
  {
    id: 91, // ajustar para o próximo índice do seu array
    title: "Tech Store - Vitrine Digital", // confirmar nome oficial da loja
    description: "Vitrine online de produtos de tecnologia focada em apresentação visual de catálogo e conversão direta.",
    longDescription: "Plataforma de vitrine digital desenvolvida para exposição de eletrônicos e acessórios de tecnologia, com navegação fluida, destaque de produtos e fluxo direto para fechamento de pedidos.",
    image: "/assets/lojatech.png", // ajustar para o caminho da sua imagem
    tags: ["E-commerce", "Vitrine", "Tecnologia", "Conversão"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["React", "TypeScript", "Tailwind CSS"], // confirmar stack real pelo deploy ou package.json
    liveUrl: "https://barbearia-vitrine-one.vercel.app/", // enviar o link de deploy para eu analisar o site real
    githubUrl: "https://github.com/Menephyl/tech_store-vitrine",
    featured: true,
    businessResult: "Agilidade na visualização do catálogo de produtos e redução de atrito no contato para compra direta.",
    developerSkills: ["Arquitetura de Catálogo/Vitrine", "Design Responsivo Focado em Produto", "Otimização de Conversão"]
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
    businessResult: "Desenvolvimento e chamadas de dados",
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
    liveUrl: "https://sergiodias-git-v015-yan-menephyls-projects.vercel.app",
    featured: false,
    businessResult: "Fechamento de contratos de mentoria empresarial de alto ticket através de prova social e autoridade. Com tradutor em espanhol, tanto para brasileiros quanto paraguaianos",
    developerSkills: ["Storytelling Corporativo", "Design Premium com Fundo Escuro", "Seções de Prova Social"]
  },
  {
    id: 99, // ajustar para o próximo índice do seu array
    title: "CRM Codex — Gestão de Leads e Funil Comercial",
    description: "Sistema CRM full stack para centralização de leads, acompanhamento de funil de vendas e métricas comerciais em tempo real.",
    longDescription: "Aplicação web de CRM desenvolvida para organizar a operação comercial de ponta a ponta, reunindo gestão de contatos, pipeline de oportunidades por etapa e painel analítico para tomada de decisão estratégica sem perda de follow-ups.",
    image: "/assets/crm-codex.png", // ajustar para o caminho da sua imagem
    tags: ["CRM", "Painel", "Gestão Comercial", "Funil de Vendas", "Dashboard"],
    category: "Painel", // ajustar se usar outra categoria no filtro do portfólio
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"], // confirmar stack exata do projeto
    liveUrl: "https://crm-codex-alpha.vercel.app/",
    githubUrl: "https://github.com/Menephyl/crm-codex",
    featured: true,
    businessResult: "Centralização do histórico de clientes e visibilidade clara do funil de vendas, reduzindo a perda de leads e acelerando a conversão comercial.",
    developerSkills: ["Arquitetura Full Stack de CRM", "Modelagem de Dados e Funil Comercial", "Dashboard Analítico e Gestão de Estado"]
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
    liveUrl: "https://amakha-filipe.vercel.app/",
    featured: false,
    businessResult: "Aceleração do fechamento de novos parceiros com apresentação persuasiva do plano de expansão.",
    developerSkills: ["Simulador Visual de Ganhos", "Carregamento Otimizado para Celulares", "Design Comercial"]
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
    title: "Apresentação para cadastro - MMN",
    description: "Página de captação para consultores com catálogo digital de perfumes e cosméticos.",
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
  {
    id: 5, // ajustar para o próximo índice do seu array
    title: "Catálogo Digital Interativo - Prime Team",
    description: "Catálogo web interativo da Prime Team com navegação paginada, sumário dinâmico e canais diretos de conversão para solicitação de projetos.",
    longDescription: "Aplicação web desenvolvida para apresentar o portfólio de serviços e soluções da Prime Team Dev & IA em formato de catálogo digital paginado. Conta com indicador de páginas em tempo real, modal de sumário interativo para navegação rápida entre seções e barra fixa de conversão direta para WhatsApp (com mensagem pré-preenchida para orçamento), Instagram e LinkedIn.",
    image: "/assets/catalog-prime.png", // ajustar para o caminho da sua imagem
    tags: ["Catálogo Digital", "Portfólio Comercial", "Institucional", "Conversão"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify"], // adicionar a lib de paginação/flipbook caso utilize (ex: PageFlip, PDF.js ou Swiper)
    liveUrl: "https://catalogprime.netlify.app/",
    githubUrl: "https://github.com/Menephyl", // atualizar com o link exato do repositório, se público
    featured: true,
    businessResult: "Apresentação comercial diferenciada e acessível em qualquer dispositivo, substituindo catálogos estáticos por uma experiência interativa com chamada direta para fechamento no WhatsApp.",
    developerSkills: ["Navegação Paginada Dinâmica", "Modal de Sumário Interativo", "UI Comercial Focada em Conversão"]
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
    liveUrl: "",
    githubUrl: "https://github.com/Menephyl/Menephyl_dev_burguer",
    featured: true,
    businessResult: "Sincronização instantânea da cozinha evitando atrasos e perdas de comandas no horário de pico. Pedidos e Pagamentos e muito mais!",
    developerSkills: ["Arquitetura RESTful no Node.js", "Integração Front-to-Back", "Gerenciamento de Estados de Pedidos, PostgresSQL, Mongo"]
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
    liveUrl: "",
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
    liveUrl: "",
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
    title: "Projeto em Andamento 05 - Dashboard Next.js & Analytics",
    description: "Painel modular em Next.js e TypeScript com controle de métricas MRR, gráficos dinâmicos Recharts e gestão de acessos RBAC.",
    longDescription: "Dashboard analítico de alta performance para startups e empresas, com gráficos dinâmicos de faturamento, controle de contratos, gestão de permissões RBAC e relatórios exportáveis.",
    image: "/assets/painelmonitoriamento.png",
    tags: ["Em Andamento", "Next.js", "Dashboard", "Analytics", "SaaS"],
    category: "Plataformas SaaS & Métricas",
    technologies: ["Next.js", "React", "TypeScript", "Recharts", "Tailwind CSS"],
    liveUrl: "https://github.com/Menephyl/dashboard",
    githubUrl: "https://github.com/Menephyl/dashboard",
    featured: true,
    businessResult: "Tomada de decisão baseada em números reais de receita, churn e novos contratos em tela única.",
    developerSkills: ["Visualização de Dados com Recharts", "Autenticação RBAC", "Componentes Modulares Next.js", "Arquitetura SaaS"]
  },
  {
    id: 24,
    title: "Projeto em Andamento 06 - App Live Stream & Gamificação PIX",
    description: "Aplicação estilo TikTok com feed interativo, salas ao vivo (calls), loja in-app, monetização por moedas e conversão direta em PIX.",
    longDescription: "Ecossistema completo de streaming ao vivo e vídeos curtos no formato TikTok: permite a criadores abrirem salas ao vivo com chamadas em tempo real, receberem presentes virtuais e moedas de espectadores na loja integrada, com carteira digital e conversão/saque automatizado dessas moedas diretamente via PIX.",
    image: "/assets/applive-moedas.png",
    tags: ["Em Andamento", "Streaming", "Live Rooms", "Gamificação", "PIX", "Social App"],
    category: "Plataformas SaaS & Métricas",
    technologies: ["React", "TypeScript", "WebRTC", "Node.js", "WebSockets", "PIX API"],
    liveUrl: "",
    githubUrl: "https://github.com/Menephyl",
    featured: true,
    businessResult: "Monetização de criadores com economia in-app de alta recorrência, compra de presentes virtuais e saque instantâneo via chave PIX.",
    developerSkills: ["Streaming de Vídeo & WebRTC", "Economia In-App & Carteira Digital", "Integração de Saques via PIX API", "Salas Interativas com WebSockets"]
  },
  {
    id: 8, // ajustar para o próximo índice do seu array
    title: "Mineiro Gourmet — Plataforma de Delivery & Cardápio Digital",
    description: "Aplicação web de delivery gastronômico com cardápio segmentado por categorias, storytelling de marca, prova social e fluxo direto para pedidos e atendimento via WhatsApp.",
    longDescription: "Plataforma desenvolvida em Next.js para o restaurante Mineiro Gourmet, unindo posicionamento premium de culinária artesanal mineira a uma experiência rápida de pedido. Conta com arquitetura multipáginas (Início, Cardápio, Sobre Nós e Histórias), filtros dinâmicos por categoria via URL (Clássicos de Minas, Executivo, Família, Café Mineiro, Sobremesas e Fit), vitrine de pratos favoritos com avaliação, tempo estimado de entrega e preço, além de depoimentos e integração direta com WhatsApp.",
    image: "/assets/restaurante.png", // ajustar para o caminho da sua imagem
    tags: ["Delivery", "Gastronomia", "Cardápio Digital", "E-commerce", "Conversão"],
    category: "Captação & Vendas de Alta Conversão",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://delivery-gourmet.vercel.app/",
    githubUrl: "https://github.com/Menephyl", // atualizar caso queira apontar para o repositório específico
    featured: true,
    businessResult: "Aumento do valor percebido da marca e agilidade na escolha dos pratos por categoria, incentivando pedidos diretos sem dependência de marketplaces com altas comissões.",
    developerSkills: ["Arquitetura Multipáginas com Next.js", "Navegação Filtrada por Query Params", "UI Gastronômica Focada em Prova Social e Conversão"]
  },

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
