import CatalogData from '../../data/CatalogData';
import { createCatalogTemplate } from '../template/TemplateCall';

const Home = {
  async render() {
    return `
    <div class="Home" id="Home">
      <h2>Home Page</h2>
      <div class="card" id="card"></div>
    </div>
    `;
  },

  async afterRender() {
    const RenderData = await CatalogData.GetData();
    const CatalogContainer = document.querySelector('#card');
    RenderData.forEach(resto => {
      CatalogContainer.innerHTML += createCatalogTemplate(resto);
    });
  },
};

export default Home;
