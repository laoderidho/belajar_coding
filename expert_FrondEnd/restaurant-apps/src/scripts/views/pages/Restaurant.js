import CatalogData from '../../data/CatalogData';
import { createCatalogTemplate } from '../template/TemplateCall';

const Restaurant = {
  async render() {
    return `
    <div class="Restaurant" id="Restaurant">
      <h2 class="title">Restaurant</h2>
       <loading-component></loading-component>
      <div class="card" id="card"></div>
    </div>

    <footer-component></footer-component>
    `;
  },

  async afterRender() {
    const getLoading = document.querySelector('.loading');
    const RenderData = await CatalogData.GetData();
    getLoading.style.display = 'none';
    const CatalogContainer = document.querySelector('#card');
    RenderData.forEach(resto => {
      CatalogContainer.innerHTML += createCatalogTemplate(resto);
    });
  },
};

export default Restaurant;
