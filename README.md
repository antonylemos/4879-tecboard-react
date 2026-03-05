![Tecboard](.github/thumbnail.png)

# Tecboard - Hub de Eventos de Tecnologia

Aplicação web desenvolvida em React para gerenciar e visualizar eventos de tecnologia. O projeto permite criar, listar, filtrar e favoritar eventos com diferentes temas como Front-end, Design e Marketing.

## 🔨 Funcionalidades do projeto

- **Listagem de eventos**: Visualização de eventos em cards com imagem, nome, data e tema
- **Cadastro de eventos**: Formulário para criação de novos eventos com validação
- **Paginação**: Navegação entre páginas de eventos
- **Filtros por tema**: Filtrar eventos por categoria (Front-end, Design, Marketing)
- **Busca por nome**: Campo de busca com debounce integrado
- **Favoritos**: Favoritar/desfavoritar eventos com persistência no localStorage
- **Dark/Light mode**: Alternância de tema visual com persistência
- **Detalhe do evento**: Página dedicada para cada evento
- **Interface responsiva**: Design adaptável usando Material-UI

## ✔️ Técnicas e tecnologias utilizadas

- `React 18`: Biblioteca principal para construção da interface
- `TypeScript 5`: Tipagem estática
- `Vite 6`: Build tool e servidor de desenvolvimento rápido
- `Material-UI (MUI) 6`: Biblioteca de componentes para React
- `React Hook Form 7`: Gerenciamento de formulários com alta performance
- `Zod 3`: Validação e parsing de schemas
- `TanStack Query 4`: Gerenciamento de estado para requisições HTTP
- `Zustand 4`: Gerenciamento de estado global (favoritos, tema)
- `React Router DOM 6`: Roteamento SPA
- `JSON Server`: API mock para desenvolvimento
- `ESLint 9`: Linting e padronização de código

## 🚀 Como rodar o projeto

```bash
# Instalar dependências
pnpm install

# Iniciar a API mock (em um terminal)
pnpm run server

# Iniciar o servidor de desenvolvimento (em outro terminal)
pnpm run dev
```

## 🔧 Scripts disponíveis

```bash
pnpm run dev       # Servidor de desenvolvimento
pnpm run build     # Build de produção
pnpm run preview   # Preview do build
pnpm run lint      # Linting
pnpm run server    # API mock (json-server na porta 3000)
```

## 📁 Estrutura do projeto

```
src/
├── components/     — Componentes reutilizáveis
├── features/       — Tipos e lógica de domínio
├── hooks/          — Hooks customizados
├── lib/            — Utilitários (api, formatters, constants)
├── pages/          — Páginas da aplicação
├── stores/         — Stores Zustand
├── App.tsx
├── main.tsx
├── schema.ts
└── theme.ts
```
