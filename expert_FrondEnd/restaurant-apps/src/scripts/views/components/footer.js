// create custom footer component
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
           footer{
                background-color: #19a7ce;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #030303;
                font-size: 20px;
                font-weight: bold;
                margin-top: 100px;
                position: relative;
                bottom: 0;
                left: 0;
                right: 0;
            }

            @media screen and (max-width: 600px) {
                footer{
                    font-size: 15px;
                }
            }
            </style>
            <footer>
                <p>&copy; 2023 - Resto Catalog By: La Ode Ridho Fahreza</p>
            </footer>
            `;
  }
}

customElements.define('footer-component', Footer);
