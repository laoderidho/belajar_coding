import FavoriteData from '../../data/favoriteData';
import { createCatalogTemplate } from '../template/TemplateCall';

const Favorite = {
  async render() {
    return `
         <main id="favorite" class="favorite">
            <h2>Favorite Page</h2>
            <div class="card" id="card"></div>
         </main>
    `;
  },

  async afterRender() {
    const dataRestaurant = await FavoriteData.getAllRestaurant();

    const favoriteContainer = document.querySelector('#card');
    dataRestaurant.forEach(restaurant => {
      console.log(createCatalogTemplate(restaurant));
      favoriteContainer.innerHTML += createCatalogTemplate(restaurant);
    });
  },
};

export default Favorite;
