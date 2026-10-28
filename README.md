<div align="center">

# *Aplicação Back-end Avançada com Node.js, Express e PostgreSQL*

> Uma API REST robusta desenvolvida em Node.js seguindo a arquitetura MVC (Model-View-Controller) isolada para o ecossistema back-end. A aplicação conta com persistência em banco de dados relacional via ORM Sequelize, gerenciamento de filas de segundo plano assíncronas em memória com Redis/Bee-Queue para envio automatizado de e-mails, monitoramento integrado de logs de erros em produção e autenticação segura via JSON Web Tokens (JWT).

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
</p>
</div>

---

## 🛠️ Tecnologias, Serviços e Arquiteturas

* **Runtime & Framework:** Node.js (v24.x) com Express unificado via Sucrase.
* **Persistência de Dados Relacional:** PostgreSQL acoplado via Sequelize ORM.
* **Processamento Assíncrono (Background Jobs):** Redis como banco de dados em memória gerenciado pelo Bee-Queue.
* **Autenticação:** Tokens JWT de duas vias (Bearer Authentication).
* **Envio de Mensagens (E-mail):** Integração SMTP via Nodemailer utilizando caixas de teste isoladas.
* **Tratamento de Exceções:** Coleta ativa de falhas integradas ao Sentry.

---

## 📋 Pré-requisitos Obrigatórios

O ecossistema depende de gerenciadores de pacotes ativos e serviços locais inicializados.

<p align="center">
    <img src="https://img.shields.io/badge/Node.js-Versão_≥_24.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/npm-Versão_≥_11.x-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
    <img src="https://img.shields.io/badge/Yarn-Versão_≥_1.22.x-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />
</p>

* **Docker Desktop:** Necessário para subir a instância local do Redis.
* **PostgreSQL:** Banco de dados ativo localmente (via pgAdmin ou container).

---

## 🗂️ Estrutura Arquitetural do Projeto

A organização interna segue o fluxo moderno de distribuição e isolamento de dependências:

```text
NodeJS_Project/
├── docs/                  # Documentações estruturais adicionais
├── src/
│   ├── app/
│   │   ├── controllers/   # Intermediação de rotas e regras (Contact, Customer, File, Session, User)
│   │   ├── jobs/          # Estruturas isoladas de tarefas demoradas (DummyJob, WelcomeEmailJob)
│   │   ├── middlewares/   # Interceptadores de segurança de rotas (auth.js)
│   │   └── models/        # Abstrações e tabelas nativas (Contact, Customer, File, User)
│   ├── config/            # Parametrizações de serviços (auth, database, mail, multer, redis, sentry)
│   ├── database/          # Histórico de tabelas físicas (migrations e index principal)
│   ├── lib/               # Motores centrais de processamento assíncrono (Mail.js, Queue.js)
│   ├── app.js             # Configurações de Middlewares, Rotas e tratamento do Sentry
│   ├── queue.js           # Inicializador dedicado e independente da fila do Redis
│   ├── routes.js          # Mapeamento completo e exposição dos endpoints HTTP
│   └── server.js          # Arquivo de ignição e escuta da API Express
├── tmp/uploads/           # Pasta física para recebimento local de mídias do Multer
├── .env.example           # Arquivo modelo estrutural para replicação de ambiente
├── .gitignore             # Bloqueador de commits para dados sensíveis e arquivos locais
├── eslint.config.mjs      # Linter moderno com regras estritas unificadas
├── prettierrc.json        # Formatador de estilo visual automatizado
├── sequelizerc            # Mapeador estático de caminhos locais para a CLI clássica
└── package.json           # Manifesto de controle de atalhos e dependências instaladas
```

---

## 🚀 Guia de Execução Local da Aplicação

### 1. Clonar Projeto e Instalar Dependências
```bash
git clone https://github.com/ryangs22/NodeJS.git
cd NodeJS
# Instale os pacotes de dependências (Escolha apenas um gerenciador)
npm install
# ou
yarn install
```

### 2. Configurar Variáveis de Ambiente
Gere uma cópia do arquivo de exemplo para as suas configurações locais:
```bash
cp .env.example .env
```
Abra o arquivo `.env` gerado e preencha as variáveis de acordo com os seus acessos:
```env
NODE_ENV=development
PORT=3000
APP_SECRET=sua_chave_secreta_jwt_aqui

DB_DIALECT=postgres
DB_HOST=localhost
DB_USER=postgres
DB_PASS=sua_senha_do_postgre
DB_NAME=nome_do_banco_criado_no_pgadmin

REDIS_HOST=localhost
REDIS_PORT=6379

MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=seu_usuario_do_mailtrap
MAIL_PASS=sua_senha_do_mailtrap

SENTRY_DSN=seu_DSN_do_Sentry
```

### 3. Rodar as Migrations do Banco
Com o PostgreSQL ativo e o banco criado no pgAdmin, monte as tabelas:
```bash
# Se estiver usando npm
npx sequelize-cli db:migrate

# Se estiver usando Yarn
yarn sequelize db:migrate
```

### 4. Importante: Inicialização do Redis via Docker
Para evitar falhas de conexão recusada (`ECONNREFUSED`), você **precisa** garantir que a imagem do Redis esteja ativa no Docker Desktop antes de chamar as filas. Abra o seu terminal e execute:
```bash
# Baixa e inicia uma imagem padrão do Redis na porta padrão 6379
docker run --name node-redis -p 6379:6379 -d redis:alpine
```

### 5. Executar os Serviços da Aplicação
Com o Redis e o PostgreSQL operando, inicialize os servidores necessários em abas separadas do terminal:

* **Servidor HTTP Principal:**
  ```bash
  # Se estiver usando npm
  npm run dev

  # Se estiver usando yarn
  yarn dev
  ```
* **Processador de Filas Independente (Background Queue):**
  ```bash
  # Se estiver usando npm
  npm run queue

  # Se estiver usando yarn
  yarn queue
  ```

---

## 🔒 Boas Práticas de Segurança e Código
* **Proteção no GitHub:** O arquivo real `.env` contendo credenciais está explicitamente bloqueado pela expressão `.env*` dentro do `.gitignore`, impedindo o vazamento acidental de chaves locais.
