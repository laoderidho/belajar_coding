// create custom element for loading

class Load extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
                    .loading{
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    }

                    .loading > .loading-item{
                    background-color: #19a7ce;
                    width: 100px;
                    height: 100px;
                    animation: loading 1s infinite;
                    }
                    
                    @keyframes loading {
                    0% {
                        transform: rotate(0deg);
                    }
                    
                    100% {
                        transform: rotate(360deg);
                    }
                }
            </style>
            
            <div class="loading">
                <div class="loading-item"></div>
            </div>
            `;
  }
}

customElements.define('loading-component', Load);
