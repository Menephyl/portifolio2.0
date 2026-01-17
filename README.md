# 🚀 Portfólio Yan Menephyl 2.0

![Status](https://img.shields.io/badge/Status-Finalizada-brightgreen)
![Framework](https://img.shields.io/badge/Framework-React_19_%2B_Vite-blue)
![Backend](https://img.shields.io/badge/Backend-tRPC_%2B_Express-purple)
![Database](https://img.shields.io/badge/Database-MySQL_%2B_Drizzle-blue)

Bem-vindo ao repositório do meu portfólio pessoal. Esta é uma aplicação Full-Stack moderna, desenvolvida para demonstrar minhas habilidades em **Engenharia de Software**, **AI Engineering** e **Web Design**.

---

## 🛠️ Stack Tecnológica

O projeto utiliza o que há de mais moderno no ecossistema JavaScript/TypeScript:

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Backend & API**: [tRPC](https://trpc.io/) (Type-safe API), [Express.js](https://expressjs.com/)
- **Banco de Dados**: [MySQL](https://www.mysql.com/), [Drizzle ORM](https://orm.drizzle.team/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/), [Lucide React](https://lucide.dev/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Formulários & Validação**: [Zod](https://zod.dev/), [React Hook Form](https://react-hook-form.com/)

---

## 🌟 Projetos em Destaque

Baseado em minha experiência real e projetos profissionais:

### 🍱 Brazukas Delivery

*Plataforma Full-Stack de delivery completo.*

- **Destaques**: Rastreamento GPS em tempo real, checkout dinâmico, painel admin e suporte via chat.
- **Tech**: React 19, tRPC, MySQL, Leaflet Maps.

### 📘 E-book Manual da Vida Moderna

*Landing Page de alta conversão.*

- **Destaques**: Copywriting persuasivo, design responsivo premium e animações fluidas.
- **Tech**: React, Framer Motion, Tailwind CSS.

### 🛍️ Amakha Filipe / Sanderson AMK

*Showcase de E-commerce e Recrutamento.*

- **Destaques**: Catálogo dinâmico de produtos, storytelling visual e foco em conversão de leads.
- **Tech**: React, TypeScript, Tailwind CSS.

---

## ✨ Funcionalidades Principais

- **Carrossel Dinâmico**: Integração direta com a API do GitHub via tRPC.
- **AI Personal Assistant**: Chat integrado para interação direta com visitantes.
- **Interface Dark/Light**: Persistência de tema e design focado em UX.
- **Formulário de Contato**: Validação robusta com Zod e armazenamento em banco de dados.
- **Base de Dados Profesional**: Estrutura centralizada para gestão de projetos em `client/src/data/realProjects.ts`.

---

## 📂 Organização do Projeto

```bash
├── client/              # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/  # Componentes reutilizáveis (Hero, Projects, AIChat)
│   │   ├── data/        # "Banco de dados" estático de projetos
│   │   ├── pages/       # Páginas principais (Home, NotFound)
│   │   └── lib/         # Configurações do tRPC e utilitários
├── server/              # Backend (Express + tRPC)
│   ├── routers.ts       # Definição das rotas e lógica da API
│   ├── db.ts            # Conexão e queries com Drizzle ORM
│   └── _core/           # Infraestrutura do servidor (OAuth, Vite setup)
├── drizzle/             # Schemas e migrações do banco de dados
└── shared/              # Tipos compartilhados entre Front e Back
```

---

## ⚙️ Configuração Local

1. **Instalar dependências**:

   ```bash
   pnpm install
   ```

2. **Configuração de Ambiente**:
   Crie um arquivo `.env` na raiz seguindo o exemplo abaixo:

   ```env
   DATABASE_URL="mysql://usuario:senha@localhost:3306/portfolio_db"
   JWT_SECRET="sua_chave_secreta_aqui"
   ```

3. **Rodar em modo Desenvolvimento**:

   ```bash
   pnpm dev
   ```

---

## ✉️ Contato

- **LinkedIn**: [/in/yanisonelpereira](https://www.linkedin.com/in/yanisonelpereira)
- **GitHub**: [@Menephyl](https://github.com/Menephyl)
- **Instagram**: [@yan_menephyl_works](https://www.instagram.com/yan_menephyl_works)

---

Desenvolvido com ❤️ por **Yan Menephyl**.
