import ConfigDataApi from '../../global/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createCatalogTemplate = resto => `
         <section class="card-content">
                    <img class="lazyload" src="${ConfigDataApi.ImageLink + resto.pictureId}" alt="gambar dari ${resto.name}" crossorigin="anonymous">
                    <p class="location"> <i class="fas fa-location-dot"></i> ${resto.city}</p>
                    <div class="card-item">
                        <h2 class="restoName" >${resto.name}</h2>
                        <h3><i class="fas fa-star"></i><span>${resto.rating}</span></h3>
                        <hr>
                        <a href ="#/detail/${resto.id}" class="detail">Detail</a>
                    </div>
            </section>
    `;

const createDetailTemplate = detail => `
                <div class="detail_content">
                  <div class="header-content">     
                    <img src="${ConfigDataApi.ImageLink + detail.pictureId}" alt=" gambar dari ${detail.name}" crossorigin="anonymous">
                </div>
                <div class="detail_item">
                    <h1 class="detail_title" >${detail.name}</h1>
                    <br>
                    <h2><i class="fas fa-location-dot"></i> ${detail.address} kota ${detail.city}</h2>
                    <br>
                    <p>${detail.description}</p>
                    
                    <div class="navigationMenu">
                      <button class="menuButton active"  data-target="food"><i class="fa-solid fa-bowl-food"></i></button>
                      <button class="menuButton" data-target="drink"><i class="fa-solid fa-martini-glass-citrus"></i></button>
                      <button class="menuButton" data-target="coment-item"><i class="fa-regular fa-message"></i></button>
                    </div>

                    <div class="menu-view">       
                        <div class="menus activeMenus" id="food"> 
                            ${detail.menus.foods.map(food => `
                            <div class="food-item food-red">
                              <p>${food.name}</p>
                            </div>`).join('')}
                        </div>


                      <div class="menus" id="drink">
                          ${detail.menus.drinks.map(drink => `
                          <div class="drink-item drink-blue">
                            <p>${drink.name}</p>
                          </div>`).join('')}
                        </div>

                    <div class="menus" id="coment-item">
                    ${detail.customerReviews.map(review => `
                    <div class="comment-parent">
                          <div class="coment-item-header">
                              <img src="./images/heros/profile.jpg" alt="">
                              <h3>${review.name}</h3>
                              <p>${review.date}</p>
                          </div>
                          <div class="coment-item-content">
                              <p>${review.review}</p>
                          </div>
                      </div>`).join('')}
                    </div>
                    </div>
                    <a href="#/favorite" class="link link-blue">Go To Favorite</a>
                    <button onclick="window.history.back()" id="back"><i class="fa-solid fa-arrow-right"></i> </button>
                    
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
