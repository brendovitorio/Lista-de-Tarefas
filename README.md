# 📝 To-Do List - Next.js

Uma aplicação simples de lista de tarefas desenvolvida com **Next.js** e **salvamento local** utilizando `localStorage`. Ideal para quem busca produtividade com uma interface leve e responsiva.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) *(opcional)*
- [TypeScript](https://www.typescriptlang.org/) *(opcional)*

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/todo-next-app.git
   ```

2. Acesse o diretório:
   ```bash
   cd todo-next-app
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

4. Inicie o projeto:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## ✅ Funcionalidades

- Adicionar tarefas
- Marcar como concluídas
- Remover tarefas
- Salvar automaticamente no navegador (localStorage)
- Interface responsiva e leve

## 📂 Estrutura Básica

```
📦 todo-next-app
 ┣ 📂components
 ┃ ┗ 📜TodoItem.tsx
 ┣ 📂pages
 ┃ ┗ 📜index.tsx
 ┣ 📂styles
 ┃ ┗ 📜globals.css
 ┣ 📜package.json
 ┣ 📜tailwind.config.js
 ┗ 📜README.md
```

## 🧠 Lógica de Salvamento

As tarefas são armazenadas no `localStorage`, o que significa que elas persistem mesmo após fechar ou recarregar o navegador. Nenhum backend é necessário.

## 📄 Licença

Projeto desenvolvido com fins educacionais. Licença MIT.

---

Feito com 💻 por [Brendo Vitorio](https://github.com/brendovitorio/Lista-de-Tarefas)
```
