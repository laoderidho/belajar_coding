import ConfigDataApi from '../../global/config';

const createCatalogTemplate = resto => `
         <section class="card-content">
                    <img src="${ConfigDataApi.ImageLink + resto.pictureId}" alt="gambar dari ${resto.name}" crossorigin="anonymous">
                    <h1 class="location"> <i class="fas fa-location-dot"></i> ${resto.city}</h1>
                    <div class="card-item">
                        <h1>${resto.name}</h1>
                        <h3><i class="fas fa-star"></i><span>${resto.rating}</span></h3>
                        <a href ="#/detail/${resto.id}" class="detail">Detail</a>
                    </div>
            </section>
    `;

const createDetailTemplate = detail => `
                <div class="detail_content">
                  <div class="header-content">     
                    <img src="${ConfigDataApi.ImageLink + detail.pictureId}" alt=" gambar dari ${detail.name}" crossorigin="anonymous">
                    <h3><span><i class="fas fa-star"></i></span>${detail.rating}</h3>
                </div>
                <div class="detail_item">
                    <h1>${detail.name}</h1>
                    <br>
                    <h2><i class="fas fa-location-dot"></i> ${detail.address} kota ${detail.city}</h2>
                    <br>
                    <p>${detail.description}</p>
                    <br>
                    <h3>Foods Menu</h3>
                    <div class="food"> 
                        ${detail.menus.foods.map(food => `
                        <div class="food-item food-red">
                          <p>${food.name}</p>
                        </div>`).join('')}
                    </div>
                    <br>
                    <h3>drinks Menu</h3>
                    <div class="drink">
                      ${detail.menus.drinks.map(drink => `
                      <div class="drink-item drink-blue">
                        <p>${drink.name}</p>
                      </div>`).join('')}
                    </div>

                    <h3 class="coment-header">Comentar</h3>
                     ${detail.customerReviews.map(review => `
                     <div class="coment-item">
                          <div class="coment-item-header">
                              <img src="./images/heros/profile.jpg" alt="">
                              <h3>${review.name}</h3>
                          </div>
                          <div class="coment-item-content">
                              <p>${review.review}</p>
                          </div>
                      </div>`).join('')}

                    <a href="#/favorite" class="link link-blue">Go To Favorite</a>
                    <button onclick="window.history.back()" href="" class="link link-red">Cancel</button>
                    
        </div>`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like like-white">
     <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like like-red">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createCatalogTemplate,
  createDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
