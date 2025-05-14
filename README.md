# Joelsantanes.js 🇧🇷🗣️

[![Build Status](https://travis-ci.org/steffencrespo/joelsantanes.js.svg?branch=master)](https://travis-ci.org/steffencrespo/joelsantanes.js)

## Joelsantanate!

Uma palhinha do *very very rich vocabulário* of nosso caro Joel Santana.  
**Agora com UI em Vue + Tailwind** e uma lista expandida de regras para traduzir frases em português para o mais autêntico Joelês.

> _"The team is goodi, but needi to play more focus, you know?"_ – Joel Santana

🚀 Heavily inspirêitedi no [portunhol.js](https://github.com/cv/portunhol.js)  
🧠 Repositório original: https://github.com/steffencrespo/joelsantanes.js
---

## 🌐 Demo online

➡️ [Acesse a versão online aqui](https://steffencrespo.github.io/joelsantanes.js/)

---
## 📦 Instaleiti (modo CLI)

```bash
npm install -g joelsantanes
```

---

## 💻 Como usar

### CLI:
```bash
echo 'para esquerda para direita pro meio de atrás' | joelsantanes
# saída:
# di lefiti di raiti di midiu frlom blihaindiu
```

### Como biblioteca Node:
```js
const joelify = require('joelsantanes');
console.log(joelify('para esquerda para direita pro meio de atrás'));
// di lefiti di raiti di midiu frlom blihaindiu
```

---

## 🖥️ Nova Interface Web (Vite + Vue 3 + Tailwind)

![](docs/demo.png) <!-- coloque uma screenshot real aqui futuramente -->

```bash
cd frontend
npm install
npm run dev
```

---

## 🔤 Exemplos de transformação

| Português                        | Joelês                                  |
|----------------------------------|------------------------------------------|
| Hoje o time jogou muito bem     | Tchudê di equipi prei véri véri gúdi     |
| Primeira oportunidade do Brasil | Faristi oportuniti of bréziu             |
| Vamos fazer churrasco amanhã    | Uí mêki bárbiquiu tomorrow, you know?    |

---

## ⚙️ Roadmap / ideias futuras

- [x] UI com Vue + Tailwind
- [x] Separação do `joelify` como módulo
- [ ] Integração com Google Translate API
- [ ] Geração de áudio Joel Santana style (Text-to-Speech)
- [ ] Bot no Telegram / X (Twitter)
- [ ] Página de demonstração pública (HuggingFace, GitHub Pages…)

---

## 📄 Licença

**Luki di arquivo LICENSE**
