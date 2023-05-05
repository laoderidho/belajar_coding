import urlParser from '../../routes/url-parser'
import themoviedb from '../../data/moviedb-source'
import { createMovieDetailTemplate } from '../template/template-creator'
import LikeButtonInitiator from '../../utils/like-Button'

const detail = {
  async render () {
    return `
            <div id="movie" class="movie"></div>
            <div id="likeButtonContainer"></div>
        `
  },

  async afterRender () {
    const url = urlParser.parseActiveUrlWithoutCombiner()
    const movie = await themoviedb.detail(url.id)
    const movieContainer = document.querySelector('#movie')
    movieContainer.innerHTML = createMovieDetailTemplate(movie)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        vote_average: movie.vote_average
      }
    })
  }
}

export default detail
