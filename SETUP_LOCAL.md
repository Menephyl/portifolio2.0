# Guia de Importação e Configuração Local do Portfólio

Este documento fornece instruções detalhadas para importar e executar o projeto do portfólio Yan Menephyl na sua máquina local.

---

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas no seu computador:

### Node.js e pnpm

O projeto requer **Node.js versão 18 ou superior** e utiliza **pnpm** como gerenciador de pacotes.

**Verificar instalação do Node.js:**
```bash
node --version
# Deve retornar v18.x.x ou superior
```

**Instalar Node.js** (caso não tenha):
- Acesse [nodejs.org](https://nodejs.org/) e baixe a versão LTS
- Ou use um gerenciador de versões como [nvm](https://github.com/nvm-sh/nvm)

**Instalar pnpm globalmente:**
```bash
npm install -g pnpm
```

**Verificar instalação do pnpm:**
```bash
pnpm --version
# Deve retornar 8.x.x ou superior
```

### Git

O projeto utiliza Git para controle de versão.

**Verificar instalação do Git:**
```bash
git --version
```

**Instalar Git** (caso não tenha):
- Windows: [git-scm.com](https://git-scm.com/download/win)
- macOS: `brew install git` (requer Homebrew)
- Linux: `sudo apt install git` (Ubuntu/Debian) ou `sudo yum install git` (CentOS/RHEL)

---

## Passo 1: Baixar o Projeto

Existem duas formas de obter o código do projeto na sua máquina:

### Opção A: Download via Manus Platform (Recomendado)

1. Acesse a interface do Manus onde o projeto está hospedado
2. Navegue até a seção **Code** no painel de gerenciamento
3. Clique no botão **Download All Files** (ícone de download)
4. Extraia o arquivo ZIP baixado em uma pasta de sua escolha
5. Abra o terminal/prompt de comando e navegue até a pasta extraída:
   ```bash
   cd caminho/para/portfolio-yan-menephyl
   ```

### Opção B: Clone via Git (se disponível)

Se o projeto estiver em um repositório Git, você pode cloná-lo diretamente:

```bash
git clone <URL_DO_REPOSITORIO>
cd portfolio-yan-menephyl
```

---

## Passo 2: Instalar Dependências

Após ter o código na sua máquina, instale todas as dependências do projeto:

```bash
pnpm install
```

Este comando irá:
- Ler os arquivos `package.json` e `pnpm-lock.yaml`
- Baixar e instalar todas as bibliotecas necessárias (React, TypeScript, Tailwind, Framer Motion, etc.)
- Configurar o ambiente de desenvolvimento

**Tempo estimado:** 2-5 minutos (dependendo da velocidade da internet)

---

## Passo 3: Configurar Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configurações sensíveis. Você precisa criar um arquivo `.env` na raiz do projeto.

### Criar arquivo .env

Na raiz do projeto (pasta `portfolio-yan-menephyl`), crie um arquivo chamado `.env`:

```bash
# No Windows (PowerShell)
New-Item .env

# No macOS/Linux
touch .env
```

### Adicionar variáveis necessárias

Abra o arquivo `.env` em um editor de texto e adicione as seguintes variáveis:

```env
# Banco de Dados (MySQL/TiDB)
DATABASE_URL="mysql://usuario:senha@localhost:3306/portfolio_db"

# Autenticação JWT
JWT_SECRET="sua_chave_secreta_aqui_minimo_32_caracteres"

# Configurações do App
VITE_APP_TITLE="Yan Menephyl - Portfólio Full-Stack"
VITE_APP_LOGO="/profile-photo.jpg"

# OAuth (Manus - opcional para desenvolvimento local)
OAUTH_SERVER_URL="https://api.manus.im"
VITE_OAUTH_PORTAL_URL="https://portal.manus.im"
OWNER_OPEN_ID="seu_open_id"
OWNER_NAME="Yan Menephyl"

# APIs Internas (Manus - opcional)
BUILT_IN_FORGE_API_URL="https://forge.manus.im"
BUILT_IN_FORGE_API_KEY="sua_chave_api"
VITE_FRONTEND_FORGE_API_KEY="sua_chave_frontend"
VITE_FRONTEND_FORGE_API_URL="https://forge.manus.im"

# Analytics (opcional)
VITE_ANALYTICS_ENDPOINT="https://analytics.manus.im"
VITE_ANALYTICS_WEBSITE_ID="seu_website_id"
```

**Notas importantes:**

- **DATABASE_URL**: Para desenvolvimento local, você pode usar um banco MySQL local ou comentar esta linha se não for usar funcionalidades de banco de dados
- **JWT_SECRET**: Gere uma string aleatória de pelo menos 32 caracteres para segurança
- **Variáveis OAUTH e FORGE**: São específicas da plataforma Manus. Para desenvolvimento local sem autenticação, você pode omitir essas variáveis

### Configuração Mínima para Desenvolvimento

Se você quer apenas visualizar o portfólio localmente sem funcionalidades de backend, use esta configuração mínima:

```env
VITE_APP_TITLE="Yan Menephyl - Portfólio Full-Stack"
VITE_APP_LOGO="/profile-photo.jpg"
JWT_SECRET="desenvolvimento_local_chave_secreta_minimo_32_caracteres_aqui"
```

---

## Passo 4: Configurar Banco de Dados (Opcional)

Se você deseja usar funcionalidades que dependem de banco de dados (formulário de contato, autenticação), siga estas etapas:

### Instalar MySQL

**Windows:**
- Baixe o [MySQL Installer](https://dev.mysql.com/downloads/installer/)
- Execute o instalador e siga as instruções

**macOS:**
```bash
brew install mysql
brew services start mysql
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
```

### Criar Banco de Dados

```bash
# Acessar MySQL
mysql -u root -p

# Criar banco de dados
CREATE DATABASE portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Criar usuário (opcional)
CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'sua_senha_segura';
GRANT ALL PRIVILEGES ON portfolio_db.* TO 'portfolio_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### Executar Migrações

Após configurar o banco, execute as migrações para criar as tabelas:

```bash
pnpm db:push
```

Este comando irá:
- Ler o schema definido em `drizzle/schema.ts`
- Criar as tabelas necessárias no banco de dados
- Sincronizar a estrutura

---

## Passo 5: Executar o Projeto

Agora você está pronto para executar o portfólio localmente!

### Modo Desenvolvimento

```bash
pnpm dev
```

Este comando irá:
- Iniciar o servidor de desenvolvimento na porta **3000**
- Habilitar Hot Module Replacement (HMR) - mudanças no código refletem automaticamente no navegador
- Compilar TypeScript e processar Tailwind CSS em tempo real

**Acesse o portfólio em:** [http://localhost:3000](http://localhost:3000)

### Modo Produção (Build)

Para testar a versão otimizada de produção:

```bash
# Gerar build de produção
pnpm build

# Executar build localmente
pnpm preview
```

O comando `build` irá:
- Compilar todo o código TypeScript
- Otimizar e minificar JavaScript e CSS
- Gerar assets otimizados na pasta `dist/`

---

## Estrutura do Projeto

Entenda a organização dos arquivos para facilitar modificações:

```
portfolio-yan-menephyl/
├── client/                      # Frontend (React + Vite)
│   ├── public/                  # Assets estáticos (imagens, vídeos)
│   │   ├── profile-photo.jpg    # Foto de perfil
│   │   ├── projects/            # Imagens dos projetos
│   │   └── react-particles.mp4  # Vídeo de fundo
│   ├── src/
│   │   ├── components/          # Componentes React
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── FeaturedProjectsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── AnimatedBackground.tsx
│   │   ├── data/                # Dados estáticos
│   │   │   ├── projects.ts      # Projetos antigos
│   │   │   └── realProjects.ts  # Projetos reais
│   │   ├── pages/               # Páginas da aplicação
│   │   │   └── Home.tsx         # Página principal
│   │   ├── lib/                 # Utilitários
│   │   │   └── trpc.ts          # Cliente tRPC
│   │   ├── App.tsx              # Componente raiz
│   │   ├── main.tsx             # Entry point
│   │   └── index.css            # Estilos globais + Tailwind
│   └── index.html               # HTML base
├── server/                      # Backend (Express + tRPC)
│   ├── routers.ts               # Rotas da API
│   ├── db.ts                    # Funções de banco de dados
│   └── github.ts                # Integração GitHub API
├── drizzle/                     # Schema do banco de dados
│   └── schema.ts                # Definição de tabelas
├── .env                         # Variáveis de ambiente (criar)
├── package.json                 # Dependências do projeto
├── tsconfig.json                # Configuração TypeScript
├── tailwind.config.js           # Configuração Tailwind CSS
└── vite.config.ts               # Configuração Vite
```

---

## Personalizações Comuns

### Alterar Informações Pessoais

**Foto de perfil:**
- Substitua o arquivo `client/public/profile-photo.jpg`
- Ou atualize a variável `VITE_APP_LOGO` no `.env`

**Dados pessoais:**
- Edite `client/src/components/HeroSection.tsx` (nome, título, descrição)
- Edite `client/src/components/AboutSection.tsx` (biografia, trajetória)

**Links sociais:**
- Edite `client/src/components/Footer.tsx` (LinkedIn, GitHub, Instagram, etc.)

### Adicionar/Remover Projetos

**Projetos em destaque:**
- Edite o arquivo `client/src/data/realProjects.ts`
- Adicione/remova objetos no array `featuredProjects`

**Todos os projetos:**
- Edite o array `allProjects` no mesmo arquivo
- Adicione imagens correspondentes em `client/public/projects/`

### Modificar Habilidades

Edite o arquivo `client/src/components/SkillsSection.tsx`:
- Seção `Frontend Skills`
- Seção `Backend Skills`
- Seção `Tools & Platforms`
- Seção `UI/UX Design`

### Atualizar Depoimentos

Edite o arquivo `client/src/components/TestimonialsSection.tsx`:
- Substitua os depoimentos de exemplo por depoimentos reais
- Adicione fotos dos autores em `client/public/testimonials/`

---

## Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia servidor de desenvolvimento |
| `pnpm build` | Gera build de produção |
| `pnpm preview` | Visualiza build de produção localmente |
| `pnpm db:push` | Sincroniza schema do banco de dados |
| `pnpm lint` | Verifica erros de código |
| `pnpm type-check` | Verifica erros de TypeScript |

---

## Solução de Problemas

### Erro: "Cannot find module"

**Causa:** Dependências não instaladas corretamente

**Solução:**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Erro: "Port 3000 is already in use"

**Causa:** Outra aplicação está usando a porta 3000

**Solução:**
```bash
# Parar processo na porta 3000 (Linux/macOS)
lsof -ti:3000 | xargs kill -9

# Windows (PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

Ou altere a porta no arquivo `vite.config.ts`:
```typescript
export default defineConfig({
  server: {
    port: 3001, // Altere para outra porta
  },
});
```

### Erro: "Database connection failed"

**Causa:** Banco de dados não está rodando ou credenciais incorretas

**Solução:**
1. Verifique se o MySQL está rodando:
   ```bash
   # Linux/macOS
   sudo systemctl status mysql
   
   # Windows
   net start MySQL80
   ```
2. Verifique as credenciais no arquivo `.env`
3. Teste a conexão manualmente:
   ```bash
   mysql -u usuario -p -h localhost
   ```

### Erro de TypeScript

**Causa:** Tipos incompatíveis ou faltando

**Solução:**
```bash
pnpm type-check
```

Corrija os erros indicados no terminal.

### Imagens não carregam

**Causa:** Caminho incorreto ou arquivo não existe

**Solução:**
1. Verifique se o arquivo existe em `client/public/`
2. Use caminhos absolutos começando com `/`:
   ```tsx
   <img src="/profile-photo.jpg" alt="Yan Menephyl" />
   ```

---

## Deploy em Produção

### Opção 1: Vercel (Recomendado para Next.js/Vite)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale o Vercel CLI:
   ```bash
   pnpm install -g vercel
   ```
3. Execute o deploy:
   ```bash
   vercel
   ```
4. Siga as instruções no terminal
5. Configure as variáveis de ambiente no dashboard da Vercel

### Opção 2: Netlify

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Instale o Netlify CLI:
   ```bash
   pnpm install -g netlify-cli
   ```
3. Execute o build:
   ```bash
   pnpm build
   ```
4. Faça o deploy:
   ```bash
   netlify deploy --prod
   ```

### Opção 3: Manus Platform (Atual)

O projeto já está configurado para deploy na plataforma Manus:

1. Acesse o painel de gerenciamento do projeto
2. Clique no botão **Publish** no canto superior direito
3. Aguarde o processo de build e deploy
4. O site estará disponível em `https://seu-dominio.manus.space`

---

## Suporte e Recursos

### Documentação das Tecnologias

- **React**: [react.dev](https://react.dev)
- **TypeScript**: [typescriptlang.org](https://www.typescriptlang.org/docs/)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)
- **Vite**: [vitejs.dev](https://vitejs.dev/guide/)
- **tRPC**: [trpc.io](https://trpc.io/docs)
- **Drizzle ORM**: [orm.drizzle.team](https://orm.drizzle.team/docs/overview)

### Comunidade e Ajuda

- **Stack Overflow**: Pesquise por erros específicos
- **GitHub Issues**: Reporte bugs ou solicite funcionalidades
- **Discord da Manus**: Suporte da plataforma

---

## Licença

Este projeto é de propriedade de **Yan Menephyl**. Todos os direitos reservados.

---

## Autor

**Yan Menephyl**  
Desenvolvedor Full-Stack & AI Engineering

- LinkedIn: [linkedin.com/in/yanisonelpereira](https://www.linkedin.com/in/yanisonelpereira)
- GitHub: [github.com/Menephyl](https://github.com/Menephyl)
- Instagram: [@yan_menephyl_works](https://www.instagram.com/yan_menephyl_works)
- YouTube: [@menephyDev](https://www.youtube.com/@menephyDev)

---

**Documentação criada por Manus AI**  
Última atualização: 17 de novembro de 2025
