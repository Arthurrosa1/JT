# Jayson Tatum — Trajetória

Site sobre a carreira de **Jayson Tatum**, da Duke University à seleção dos Estados Unidos e às temporadas no Boston Celtics. A home tem um carrossel 3D. Cada fase da carreira tem uma página com estatísticas, resumo da temporada, galeria de fotos e link para highlights.

Feito com **React** e **Vite**.

---

## Sumário

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Como rodar](#como-rodar)
- [Scripts](#scripts)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Rotas](#rotas)
- [Como editar o conteúdo](#como-editar-o-conteúdo)
- [Fundos animados](#fundos-animados)
- [Deploy](#deploy)
- [Problemas conhecidos](#problemas-conhecidos)
- [Créditos](#créditos)

---

## Funcionalidades

- **Carrossel 3D na home**, com três cards (Boston, Duke e USA). Os botões `01`, `02` e `03` giram o carrossel. Ao passar o mouse num card, o fundo mostra o estádio correspondente.
- **Tema claro/escuro** na home. A escolha fica salva no navegador.
- **Páginas por temporada**: 8 temporadas no Boston, 1 na Duke e 2 na seleção dos EUA. Cada página tem:
  - estatísticas por jogo (pontos, assistências, rebotes, roubos e tocos);
  - um resumo da temporada;
  - um botão para os highlights no YouTube;
  - uma galeria de fotos que abre em lightbox ([Fancybox](https://fancyapps.com/fancybox/));
  - um fundo animado com um lance do jogador.
- **Navegação lateral** entre as temporadas, com a temporada atual destacada.
- **Todo o conteúdo fica num único arquivo de dados**. Para adicionar uma temporada, não é preciso criar uma página nova.

## Tecnologias

| Ferramenta | Uso |
|---|---|
| [React](https://react.dev/) | Interface e componentes |
| [Vite](https://vite.dev/) | Servidor de desenvolvimento e build |
| [React Router](https://reactrouter.com/) | Rotas (`/boston/1`, `/duke` etc.) |
| [Fancybox](https://fancyapps.com/fancybox/) (`@fancyapps/ui`) | Lightbox da galeria |
| CSS puro | Estilos, organizados por página e por componente |

## Como rodar

**Pré-requisito:** [Node.js](https://nodejs.org/) 20.19+ ou 22.12+ (exigência do Vite 8).

```bash
# 1. clonar o repositório
git clone https://github.com/Arthurrosa1/JT.git
cd JT

# 2. instalar as dependências
npm install

# 3. iniciar o servidor de desenvolvimento
npm run dev
```

O site abre em **http://localhost:5173** e atualiza sozinho quando um arquivo é salvo.

> ⚠️ **Não use o Live Server do VS Code.** Ele só entrega os arquivos como estão e não compila React, então a página fica em branco ou sem imagens. Use sempre `npm run dev`.

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento em `http://localhost:5173` |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Serve a pasta `dist/` em `http://localhost:4173`, para testar o build |

## Estrutura do projeto

```
JT/
├── index.html                  # HTML base (carrega a fonte e o src/main.jsx)
├── vite.config.js              # Configuração do Vite (portas, plugin React)
├── package.json
├── public/                     # Arquivos servidos como estão, a partir da raiz "/"
│   └── assets/
│       ├── images/             # Logos, fotos da galeria, imagens dos cards
│       └── backgrounds/        # Fundos animados (.mp4) e primeiro quadro (-poster.gif)
└── src/
    ├── main.jsx                # Ponto de entrada: importa o CSS e monta o <App />
    ├── App.jsx                 # Definição das rotas
    ├── data/
    │   └── sections.js         # ⭐ Todo o conteúdo do site (textos, estatísticas, imagens)
    ├── pages/
    │   ├── HomePage.jsx        # Home com o carrossel
    │   └── SectionPage.jsx     # Página de temporada (usada por todas as seções)
    ├── components/
    │   ├── Backdrop.jsx        # Fundo animado com placeholder e fade-in
    │   ├── CardsCarousel.jsx   # Carrossel 3D de cards
    │   ├── CarouselController.jsx  # Botões 01/02/03 do carrossel
    │   ├── Gallery.jsx         # Galeria com lightbox (Fancybox)
    │   ├── LinkButton.jsx      # Botão "JT highlights"
    │   ├── Menu.jsx            # Menu superior da home
    │   ├── Navigator.jsx       # Navegação lateral entre temporadas
    │   ├── Pills.jsx           # Estatísticas em "pílulas"
    │   └── ThemeToggle.jsx     # Botão de tema claro/escuro
    ├── hooks/
    │   ├── useTheme.js         # Estado do tema + salvamento no localStorage
    │   └── useDocumentTitle.js # Atualiza o título da aba
    └── styles/
        ├── reset.css, global.css
        ├── homePage.css        # Estilos da home
        ├── internal.css        # Estilos das páginas de temporada
        └── components/         # navigator, pills, linkButton, gallery
```

## Rotas

| URL | Página |
|---|---|
| `/` | Home (carrossel) |
| `/boston/1` … `/boston/8` | Boston Celtics, de 2017-18 a 2024-25 |
| `/duke` | Duke University, 2016-17 |
| `/usa/1` | Seleção dos EUA, base (U-17 e U-19) |
| `/usa/2` | Seleção dos EUA, adulta (2019 até hoje) |

Qualquer outra URL redireciona para a home.

## Créditos

Projeto de fã, sem fins comerciais e sem vínculo com a NBA, o Boston Celtics, a Duke University ou a USA Basketball.

- Lances animados: [Tenor](https://tenor.com/), [Tumblr](https://www.tumblr.com/) e [SB Nation](https://www.sbnation.com/).
- Vídeos de highlights: YouTube, com links para os canais originais.
- Logos, nomes e imagens pertencem aos respectivos donos.
