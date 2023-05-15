import FavoriteData from '../data/favoriteData';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/template/TemplateCall';

const likeButtonInitiator = {
  async init({ likeButtonContainer, favoriteResto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteResto = favoriteResto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._favoriteResto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteData.getRestaurant(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteData.putRestaurant(this._favoriteResto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteData.deleteRestaurant(this._favoriteResto.id);
      this._renderButton();
    });
  },
};

export default likeButtonInitiator;
