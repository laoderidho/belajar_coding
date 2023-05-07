import CatalogData from '../../data/CatalogData';

const Restourant = {
  async render() {
    return ` 
    <div class="card"></div>
    `;
  },

  async afterRender() {
    const movies = await CatalogData.GetData();
    console.log(movies);
  },
};

export default Restourant;
