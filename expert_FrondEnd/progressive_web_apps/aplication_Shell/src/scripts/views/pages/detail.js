import urlParser from '../../routes/url-parser'
import themoviedb from '../../data/moviedb-source'
import { createMovieDetailTemplate } from '../template/template-creator'

const detail = {
  async render () {
    return `
            <div id="movie" class="movie"></div>
        `
  },

  async afterRender () {
    const url = urlParser.parseActiveUrlWithoutCombiner()
    const movie = await themoviedb.detail(url.id)
    const movieContainer = document.querySelector('#movie')
    console.log(movie)
    movieContainer.innerHTML = createMovieDetailTemplate(movie)
  }
}

export default detail
