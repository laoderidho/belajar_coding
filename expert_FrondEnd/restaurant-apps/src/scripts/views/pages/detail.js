import CatalogData from '../../data/CatalogData';
import Url from '../../routes/url-parser';
import { createDetailTemplate } from '../template/TemplateCall';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="detail"></div>
        <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = Url.parseActiveWithoutCombiner();
    const detail = await CatalogData.GetDetail(url.id);
    console.log(detail);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createDetailTemplate(detail);

    // this header will be hidden
    document.querySelector('header').style.display = 'none';
    document.querySelector('footer').style.display = 'none';

    // this button like
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        rating: detail.rating,
        description: detail.description,
        pictureId: detail.pictureId,
      },
    });
  },
};

export default Detail;
