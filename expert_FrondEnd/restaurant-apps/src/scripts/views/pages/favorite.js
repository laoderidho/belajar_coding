import FavoriteData from '../../data/favoriteData';
import { createCatalogTemplate } from '../template/TemplateCall';

const Favorite = {
  async render() {
    return `
         <main id="favorite" class="favorite">
            <h1 class="title">Favorite Page</h1>
            <null-favorite></null-favorite>
            <loading-component></loading-component>
            <div class="card" id="card"></div>
         </main>

          <footer-component></footer-component>
    `;
  },

  async afterRender() {
    const dataRestaurant = await FavoriteData.getAllRestaurant();
    const getLoading = document.querySelector('.loading');

    if (dataRestaurant.length !== 0) {
      document.querySelector('null-favorite').style.display = 'none';
    } else {
      document.querySelector('null-favorite').style.display = 'block';
    }

    getLoading.style.display = 'none';
    const favoriteContainer = document.querySelector('#card');
    dataRestaurant.forEach(restaurant => {
      console.log(createCatalogTemplate(restaurant));
      favoriteContainer.innerHTML += createCatalogTemplate(restaurant);
    });
  },
};

export default Favorite;
