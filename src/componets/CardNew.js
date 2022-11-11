// Criando um componente na mão
class Cardnews extends HTMLElement {
  constructor() {
    super();

    // DOM "Fantasma"
    const shodow = this.attachShadow({ mode: "open" });
    // Adicionado filhos na shadow DOM
    shodow.appendChild(this.build());
    shodow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    // Criando os filhos de card left
    const author = document.createElement("span");
    author.textContent = "By" + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__rigth");

    // Criando o filho de card right
    const img = document.createElement("img");
    img.src = "/assets/img/Veder.jpg";

    // Anexando os filhos no componente root
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    // Anexando os filhos de card left
    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    // Anexando o filho de card right
    cardRight.appendChild(img);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
            
    .card {
      width: 80%;
      justify-content: space-between;
      -webkit-box-shadow: 7px 9px 35px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 7px 9px 35px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 7px 9px 35px 0px rgba(0, 0, 0, 0.75);
      display: flex;
      flex-direction: row;
    }

    .card__left > span {
      font-weight: 400;
    }

    .card__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
    }

    .card__left > h1 {
      margin-top: 15px;
      font-size: 25px;
    }

    .card__left > p {
      color: rgba(70, 70, 70);
      font-size: 12px;
    }

        `;
        return style;
      }
    }

// Definindo o nome do elemento
customElements.define("card-news", Cardnews);
