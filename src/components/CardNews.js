class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    cardLeft() {
        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card_left');

        const autor = document.createElement('span');
        autor.textContent = "By " + (this.getAttribute('autor') || "Anonymous");

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link-url')

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        return cardLeft;
    }

    cardRight() {
        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card_right');

        const newsImage = document.createElement('img');
        const srcImg = this.getAttribute('srcImg');
        newsImage.src = srcImg || './assets/defaultPhoto.png'

        cardRight.appendChild(newsImage);
        return cardRight;
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = this.cardLeft();
        const cardRight = this.cardRight()

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            .card {
                width: 80%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: 10px 10px 32px -7px rgba(0, 0, 0, 0.29);
                -webkit-box-shadow: 10px 10px 32px -7px rgba(0, 0, 0, 0.29);
                -moz-box-shadow: 10px 10px 32px -7px rgba(0, 0, 0, 0.29);

            }

            /* .card_left,
            .card_right {
                border: 1px solid blue;
            } */

            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-size: 20px;
                padding-left: 10px;
            }

            .card_left>a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }

            .card_left>p {
                color: gray;
            }

            .card_left>span {
                font-weight: 400;
            }
        `;
        return style;
    }


}

customElements.define('card-news', CardNews)




