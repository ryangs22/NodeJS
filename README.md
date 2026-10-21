<div align="center"> 

# *Aplicação Back-end com Node.js, Express e PostgreSQL*

> Este é um projeto focado no aprendizado e desenvolvimento de APIs em Node.js com o uso do Express e o ORM Sequelize para estruturação robusta de Rotas, Models e Controllers integrados ao banco de dados PostgreSQL. O ambiente conta com práticas modernas de mercado, incluindo compilação em tempo de execução com Sucrase, automação com Nodemon, padronização de código com ESLint e Prettier, além de segurança via variáveis de ambiente.

<p align="center"> 
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" /> 
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" /> 
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize" /> 
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>
</div>

---

## 🛠️ Tecnologias e Ferramentas

* **Runtime:** Node.js (v24.x)
* **Framework Web:** Express
* **Banco de Dados Relacional:** PostgreSQL
* **ORM:** Sequelize (v6+)
* **Compilador de Sintaxe:** Sucrase (Suporte a ES Modules / Import e Export)
* **Qualidade de Código:** ESLint (v10+ Flat Config) & Prettier
* **Testes de Endpoints:** Insomnia

---

## 📋 Pré-requisitos

O projeto pode ser executado utilizando tanto o **npm** quanto o **Yarn** como gerenciadores de pacotes.

<p align="center"> 
    <img src="https://img.shields.io/badge/Node.js-Versão_≥_18.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" /> 
    <img src="https://img.shields.io/badge/npm-Versão_≥_9.x-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm" /> 
    <img src="https://img.shields.io/badge/Yarn-Versão_≥_1.22.x-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />
</p>

> ⚠️ **Aviso de Compatibilidade:** O projeto foi originalmente estruturado utilizando o pacote **npm**. Se você optar por executar utilizando o **Yarn**, lembre-se de deletar o arquivo `package-lock.json` antes de rodar a instalação para gerar o arquivo de trava correspondente (`yarn.lock`) de forma limpa.

---

## 🗂️ Estrutura de Pastas

A arquitetura do projeto segue o padrão MVC (Model-View-Controller) isolado para o back-end, organizada da seguinte forma:

```text
NodeJS_Project/
├── docs/                  # Documentações e diagramas da aplicação
├── src/
│   ├── app/
│   │   ├── controllers/   # Regras de negócio e intermediação de requisições
│   │   │   └── CustomersController.js
│   │   └── models/        # Mapeamento e abstração das tabelas do banco
│   │       ├── Customer.js
│   │       ├── Contact.js
│   │       └── User.js
│   ├── config/            # Parâmetros de conexões externas
│   │   └── database.js    # Configuração do Sequelize via variáveis de ambiente
│   ├── database/          # Histórico evolutivo do banco de dados
│   │   └── migrations/    # Scripts estruturais das tabelas (vias de controle CLI)
│   ├── app.js             # Inicialização e middlewares do Express
│   ├── routes.js          # Definição e distribuição dos endpoints HTTP
│   └── server.js          # Inicialização do servidor na porta ativa
├── .editorconfig          # Padronização de espaçamento do editor
├── .env.example           # Modelo limpo e seguro para distribuição pública
├── .gitignore             # Bloqueio de subida de arquivos sensíveis e locais
├── eslint.config.mjs      # Configuração moderna de regras do linter ESLint v10
├── prettierrc.json        # Regras de formatação automática do Prettier
├── sequelizerc            # Mapeamento de caminhos para a CLI do Sequelize
└── package.json           # Manifesto de dependências e scripts de automação
```

---

## 🚀 Como Executar o Projeto Localmente

### 1. Clonar o Repositório e Instalar Dependências
```bash
# Clone este repositório
git clone https://github.com/ryangs22/NodeJS.git

# Acesse a pasta do projeto
cd NodeJS

# Instale os pacotes de dependências (Escolha apenas um gerenciador)
npm install
# ou
yarn install
```

### 2. Configurar Variáveis de Ambiente
O projeto utiliza um sistema estrito de proteção de credenciais. Duplique o arquivo de exemplo e insira suas credenciais locais do PostgreSQL no arquivo `.env` gerado:
```bash
cp .env.example .env
```
Abra o arquivo `.env` e preencha com as suas informações:
```env
DB_DIALECT=postgres
DB_HOST=localhost
DB_USER=postgres
DB_PASS=sua_senha_do_postgre
DB_NAME=nome_do_banco_criado_no_pgadmin
```

### 3. Executar as Migrations do Banco
Certifique-se de que criou um banco de dados vazio no seu gerenciador (ex: pgAdmin) correspondente ao nome colocado na variável `DB_NAME`. Depois, execute a criação das tabelas em lote:
```bash
# Se estiver usando npm
npx sequelize-cli db:migrate

# Se estiver usando Yarn
yarn sequelize db:migrate
```

### 4. Inicializar a Aplicação
Você pode utilizar os atalhos configurados no `package.json` para rodar os ambientes locais:

```bash
# Iniciar o servidor principal de desenvolvimento (Nodemon + Sucrase)
npm run dev
# ou
yarn dev

# Iniciar o ambiente de testes rápidos isolados (Playground local) // Arquivo deletado por questões de organização (para ter um noção de como é o arquivo verifique o histórico de commit)
npm run playground
# ou
yarn playground
```

---

## 🔒 Boas Práticas de Segurança e Código
* **Proteção no GitHub:** O arquivo real `.env` contendo credenciais está explicitamente bloqueado pela expressão `.env*` dentro do `.gitignore`, impedindo o vazamento acidental de chaves locais.
