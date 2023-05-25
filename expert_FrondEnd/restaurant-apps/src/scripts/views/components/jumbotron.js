// make custom element components

class Jumbotron extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

        <style>    
        .jumbotron {
            background-image: url('/images/hero-image_2-large.jpg');

            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
            top: 0;
            right: 0;
            left: 0;
            }

            .jumbotron-title {
            font-size: 400%;
            color: white;
            font-weight: bold;
            margin-bottom: 20px;
            margin-top: 18vh;
            }

            .jumbotron-subtitle {
            font-size: 22px;
            color: white;
            margin-bottom: 20px;
            }

            .jumbotron-content {
            background-color: rgba(0, 0, 0, 0.6);
            background-size: cover;
            padding: 30px;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            }

            .jumbotron-title,
            .jumbotron-subtitle, .explore {
            animation: header_animation 1s ease-in-out;
            text-align: center;
            }

            .explore {
            background-color: #19a7ce;
            color: #030303;
            padding: 10px 20px;
            border-radius: 5px;
            min-height: 44px;
            text-decoration: none;
            font-size: 18px;
            }


            @keyframes header_animation {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
            }

            @media screen and (max-width: 600px) {
                .jumbotron-title {
                    font-size: 35px;
                }
                .jumbotron-subtitle {
                    font-size: 18px;
                }
                .jumbotron{
                    background-image: url('/images/hero-image_2-small.jpg');
                }
            }
        </style>
        <section class="jumbotron">
            <div class="jumbotron-content">
                <h1 class="jumbotron-title">Restaurant Catalog</h1>
                <p class="jumbotron-subtitle">Find the best restaurants around you</p>
                <a href="#/restaurant" class="explore">Explore</a>
            </div>
        </section>
        `;
  }
}

customElements.define('jumbotron-component', Jumbotron);
