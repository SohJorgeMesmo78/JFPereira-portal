# JFPereira Portal

Portfólio pessoal de Jorge Fernando Pereira, desenvolvido em Angular para apresentar perfil profissional, competências, experiências, formação, projetos e canais de contato.

## Stack

- Angular 19 com módulos (`NgModule`)
- TypeScript 5.8 em modo estrito
- SCSS e Angular Material
- SSR, hidratação e prerender com Angular SSR e Express
- Jasmine e Karma para testes unitários

## Estrutura

```text
src/app/
├── components/  # Seções e navegação da página
├── models/      # Contratos dos dados exibidos
├── pages/       # Composição das páginas
└── services/    # Conteúdo local e regras derivadas
```

Os estilos globais e tokens visuais ficam em `src/styles.scss` e `src/styles/`. A identidade usa o amarelo `#FFAA00` como destaque nos temas claro e escuro.

## Desenvolvimento

Instale as dependências já declaradas no projeto e inicie o servidor:

```bash
npm install
npm start
```

A aplicação ficará disponível em `http://localhost:4200/`.

## Comandos

```bash
npm start                         # servidor de desenvolvimento
npm test -- --watch=false         # testes unitários uma vez
npm run build                     # build de produção, SSR e prerender
npm run watch                     # build incremental de desenvolvimento
npm run serve:ssr:JFPereira-portal # serve o build SSR na porta 4000
```

O projeto ainda não possui formatter ou linter configurados. Não use comandos de formatação em massa sem revisar o diff.

## Validação esperada

Antes de entregar mudanças:

1. Execute os testes unitários relevantes.
2. Execute `npm run build`.
3. Verifique os temas claro e escuro.
4. Teste navegação por teclado e responsividade.

Os artefatos de produção são gerados em `dist/jfpereira-portal`.
