# 🎬 Sistema de Filmes com TMDB

![React](https://img.shields.io/badge/react-19.1.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/typescript-4.9.5-3178C6?logo=typescript)
![Redux Toolkit](https://img.shields.io/badge/redux--toolkit-2.8.2-purple?logo=redux)
![React Router](https://img.shields.io/badge/react--router--dom-6.0.0-CA4245?logo=react-router)
![Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?logo=jest)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

Aplicação React que permite aos usuários explorar filmes, criar listas personalizadas de favoritos e descobrir novos conteúdos através da [API do The Movie Database (TMDB).](https://developers.themoviedb.org/3).

## 🧰 Tecnologias utilizadas

- React19 + TypeScript
- Redux Toolkit
- React Router
- Axios
- Jest + React Testing Library
- TMDB API

## ✅ Funcionalidades

- Listagem dinâmica de filmes populares
- Busca de filmes
- Listagem de favoritos com ordenação
- Página de detalhes
- Testes unitários com Jest

## 📦 Configurações

Para o funcionamento da api, será preciso [criar uma API Key e User Token em:](https://www.themoviedb.org/)

Após isso, crie um arquivo .env.local na raiz do projeto, e preencha as seguintes variáveis:

REACT_APP_TMDB_API_BASE_URL="https://api.themoviedb.org/3"
REACT_APP_TMDB_BASE_POSTER='https://image.tmdb.org/t/p/w300'
REACT_APP_TMDB_BASE_BACKDROP='https://image.tmdb.org/t/p/original'
REACT_APP_TMDB_API_KEY=<sua api key>
REACT_APP_TMDB_API_TOKEN=<seu user token>

## Execução local do projeto

Execute o seguinte comando para instalação das dependências:

### `yarn install`

Após finalizar a instalação das dependências, na raiz do projeto execute:

### `yarn start`

Este comando executará o projeto no navegador em [http://localhost:3000](http://localhost:3000).\

## Scripts adicionais

### `yarn test`

Executa o test runner em watch mode.\

## Dependências

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
