class nullFav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
                .nullDataFavorite{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 65vh;
                    font-size: 40px;
                    font-weight: 100;
                    color: #19a7ce;
                }
            @media screen and (max-width: 700px){
                 .nullDataFavorite{
                        font-size: 25px;
                    }
                }  
            @media screen and (max-width: 700px){
                 .nullDataFavorite{
                        font-size: 19px;
                    }
                } 
            </style>
            <div class="nullDataFavorite">
                        <h1>Belum ada Favorite</h1>
            </div>
            `;
  }
}

customElements.define('null-favorite', nullFav);
