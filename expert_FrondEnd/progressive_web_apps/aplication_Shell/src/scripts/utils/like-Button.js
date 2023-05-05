import FavoriteDb from '../data/favorite_db'
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/template/template-creator'

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, movie }) {
    this._likeButtonContainer = likeButtonContainer
    this._movie = movie
    await this._renderButton()
  },
  async _renderButton () {
    const { id } = this._movie
    if (await this._isMovieExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },
  async _isMovieExist (id) {
    const movie = await FavoriteDb.getMovie(id)
    return !!movie
  },
  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()
    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteDb.putMovie(this._movie)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()
    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteDb.deleteMovie(this._movie.id)
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator
