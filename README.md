# 📌 Mural de Recados

Aplicação web desenvolvida com **React e Vite**, com o objetivo de permitir o cadastro, a visualização, a edição e a exclusão de recados de maneira simples e organizada.

O projeto foi desenvolvido como prática de desenvolvimento frontend, utilizando componentes reutilizáveis, gerenciamento de estados, navegação entre páginas e armazenamento persistente no navegador.

## 🚀 Funcionalidades

- [x] Cadastro de novos recados.
- [x] Listagem de recados publicados.
- [x] Edição de recados existentes.
- [x] Exclusão de recados.
- [x] Armazenamento dos dados com localStorage.
- [x] Navegação entre páginas com React Router.
- [x] Formulários controlados com useState.
- [x] Componentes reutilizáveis.
- [x] Estilização com CSS Modules.
- [x] Página para endereços não encontrados.

## 🛠️ Tecnologias utilizadas

- **React:** construção da interface.
- **Vite:** ferramenta de desenvolvimento e inicialização do projeto.
- **JavaScript:** lógica e funcionalidades.
- **React Router DOM:** navegação entre páginas.
- **CSS Modules:** estilização dos componentes.
- **localStorage:** armazenamento dos recados no navegador.

## 📂 Estrutura do projeto

```text
mural-de-recados/
├── public/
├── src/
│   ├── components/
│   │   ├── Menu.jsx
│   │   ├── Menu.module.css
│   │   ├── Recado.jsx
│   │   ├── Recado.module.css
│   │   ├── FormRecado.jsx
│   │   └── FormRecado.module.css
│   │
│   ├── pages/
│   │   ├── Mural.jsx
│   │   ├── NovoRecado.jsx
│   │   ├── EditarRecado.jsx
│   │   └── NaoEncontrada.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── README.md
```

## ⚙️ Como executar o projeto

### 1. Pré-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado (opcional para executar o projeto).

### 2. Clonar o repositório

```bash
git clone https://github.com/EduardoAlmeidaFarias/mural-de-recados-de-uma-turma.git
```

### 3. Entrar na pasta

```bash
cd mural-de-recados-de-uma-turma
```

### 4. Instalar as dependências

```bash
npm install
```

### 5. Executar o projeto

```bash
npm run dev
```

Após iniciar, acesse o endereço indicado pelo Vite, normalmente:

http://localhost:5173/

## 💾 Armazenamento de dados

O projeto utiliza o localStorage para armazenar os recados no próprio navegador.

Dessa forma, as informações continuam disponíveis após atualizar a página ou fechar e abrir novamente o navegador, no mesmo dispositivo e perfil de navegador.

## 📚 Conceitos de React aplicados

- Componentização.
- Props.
- useState.
- useEffect.
- Renderização de listas com map e key.
- Formulários controlados.
- Rotas com React Router.
- Operações CRUD.
- Persistência de dados.
- CSS Modules.

## 🎯 Objetivo acadêmico

Este projeto tem como objetivo aplicar na prática os principais conceitos de desenvolvimento frontend com React, demonstrando a construção de uma aplicação organizada, funcional e reutilizável.

## 👨‍💻 Autor

Desenvolvido por **Eduardo de Almeida Farias**.

Projeto acadêmico — Desenvolvimento Web.

---

⭐ Se este projeto foi útil ou interessante, considere deixar uma estrela no repositório!
