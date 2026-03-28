# 🚀 Portfólio Yan Menephyl 2.0

![Status](https://img.shields.io/badge/Status-Desenvolvimento_Ativo-blue?style=for-the-badge&logo=react)
![Framework](https://img.shields.io/badge/Frontend-React_19_%2B_Vite-61DAFB?style=for-the-badge&logo=react)
![Backend](https://img.shields.io/badge/Backend-tRPC_%2B_Express-9333EA?style=for-the-badge&logo=trpc)
![Database](https://img.shields.io/badge/Database-MySQL_%2B_Drizzle-00758F?style=for-the-badge&logo=mysql)

Bem-vindo ao repositório do meu portfólio pessoal de última geração. Esta é uma aplicação **Full-Stack moderna**, desenvolvida para demonstrar competências avançadas em **Engenharia de Software**, **AI Engineering**, e **Web Design de Alta Performance**.

---

## 🛠️ Stack Tecnológica

O projeto foi construído utilizando um ecossistema de ponta para garantir escalabilidade, tipagem segura e experiência do usuário fluida:

### **Frontend**

- **React 19**: Versão mais recente para máxima performance e recursos modernos.
- **Tailwind CSS v4**: Estilização baseada em utilitários com suporte nativo a variáveis CSS e performance otimizada.
- **Framer Motion**: Animações complexas e micro-interações fluidas.
- **Radix UI**: Componentes acessíveis e sem estilização base (Headless UI).
- **TanStack Query & tRPC**: Sincronização de estado e API Full-Stack com tipagem 100% segura (End-to-End Type Safety).
- **Lucide React & Recharts**: Ícones e visualização de dados dinâmica.
- **Wouter**: Roteamento ultra-leve e focado em performance.

### **Backend & Infraestrutura**

- **Node.js & Express**: Servidor robusto e flexível.
- **tRPC**: Camada de API que elimina a necessidade de definições REST/GraphQL manuais.
- **MySQL & Drizzle ORM**: Banco de Dados relacional com ORM TypeScript-first.
- **Zod**: Validação rigorosa de dados em tempo de execução e compilação.
- **OpenAI / Gemini SDK**: Integração de inteligência artificial generativa.
- **AWS S3**: Gestão de assets e uploads.

---

## 🌟 Projetos em Destaque

O portfólio centraliza meus principais trabalhos profissionais, categorizados por complexidade técnica:

### 🍱 **Brazukas Delivery**

*Plataforma Full-Stack completa de delivery.*

- **Destaques**: Rastreamento GPS em tempo real, checkout dinâmico, painel administrativo e sistema de notificações via WebSocket.
- **Tech**: React 19, tRPC, MySQL, Leaflet Maps.

### 📘 **E-book Manual da Vida Moderna**

*Landing Page de alta conversão para infoprodutos.*

- **Destaques**: Design focado em UX acadêmica, animações de scroll, copywriting persuasivo e integração de pagamentos simulada.
- **Tech**: React, Framer Motion, Tailwind CSS.

### 🛍️ **Amakha Filipe / Sanderson AMK**

*Shoecase de E-commerce e LPs profissionais.*

- **Destaques**: Catálogo dinâmico de produtos, storytelling visual e foco em geração de leads qualificados.
- **Tech**: React, TypeScript, Tailwind CSS.

---

## ✨ Funcionalidades Principais

1. **Assistente de IA Integrado (WIP)**: Chat interativo que utiliza LLMs para responder dúvidas sobre minha carreira e projetos em tempo real.
2. **Showcase de Componentes**: Uma galeria completa (`/showcase`) demonstrando a implementação de todos os componentes do Design System (Shadcn/ui).
3. **Carrossel Dinâmico via GitHub**: Busca automática de repositórios reais do GitHub utilizando procedures tRPC e cache inteligente.
4. **Sistema de Filtros Dinâmicos**: Categorização de projetos (Full-Stack & AI vs. Web Design & E-Commerce) com animações de transição.
5. **Performance de Elite**: Implementação de `React.memo`, `useCallback` e otimização de imagens (WebP) para atingir notas máximas no Core Web Vitals.
6. **Dark/Light Mode Nativo**: Suporte completo a temas com persistência via LocalStorage e Context API.

---

## 📂 Organização do Projeto

```bash
├── client/              # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/  # Core components, UI (Shadcn) e Seções (Hero, About, etc)
│   │   ├── data/        # Dados reais dos projetos (realProjects.ts)
│   │   ├── hooks/       # Custom hooks (Ex: useTheme)
│   │   ├── lib/         # Configurações do tRPC e utilitários de estilo
│   │   └── pages/       # Páginas principais (Home, Showcase, NotFound)
├── server/              # Backend (Express + tRPC)
│   ├── routers.ts       # Router principal da API
│   ├── db.ts            # Configuração do Drizzle e queries
│   ├── _core/           # Infraestrutura (LLM, Auth, Vite Setup, Notificações)
├── drizzle/             # Schemas e migrações do MySQL
└── shared/              # Tipos e constantes compartilhados (DRY)
```

---

## ⚙️ Configuração Local

### **Pré-requisitos**

- [Node.js](https://nodejs.org/) (v20+)
- [PNPM](https://pnpm.io/) (v9+)
- MySQL Server

### **Passos para Instalação**

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/Menephyl/portifolio2.0.git
    cd portifolio2.0
    ```

2. **Instale as dependências**:

    ```bash
    pnpm install
    ```

3. **Configuração de Ambiente**:

    Crie um arquivo `.env` na raiz seguindo o exemplo:

    ```env
    DATABASE_URL="mysql://usuario:senha@localhost:3306/portfolio_db"
    JWT_SECRET="sua_chave_secreta"
    OPENAI_API_KEY="sua_chave_openai" # Opcional para o chat
    ```

4. **Migrações do Banco**:

    ```bash
    pnpm db:push
    ```

5. **Rodar em Desenvolvimento**:

    ```bash
    pnpm dev
    ```

---

## 📜 Sobre o Desenvolvedor

**Yan Menephyl** é um Desenvolvedor Full-Stack apaixonado por criar soluções que unem design impecável e engenharia robusta.

- **2015-2017**: Formação técnica simultânea ao ensino médio (Técnico em Informática + C# Microlins).
- **2018-2024**: Consultoria de TI e desenvolvimento autônomo.
- **2025**: Especialização Full Stack avançada.

---

## ✉️ Contato & Redes

- **LinkedIn**: [in/yanisonelpereira](https://www.linkedin.com/in/yanisonelpereira)
- **GitHub**: [@Menephyl](https://github.com/Menephyl)
- **Instagram**: [@yan_menephyl_works](https://www.instagram.com/yan_menephyl_works)
- **YouTube**: [@menephyDev](https://www.youtube.com/@menephyDev)

---

Desenvolvido com dedicação por **Yan Menephyl**. 2025 - 2026.
