import themoviedb from '../../data/moviedb-source'
import { createMovieItemTemplate } from '../template/template-creator'

const nowPlaying = {
  async render () {
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies">
        </div>
      </div>`
  },
  async afterRender () {
    const movies = await themoviedb.nowPlaying()
    const moviesContainer = document.querySelector('#movies')
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie)
    })
  }
}

export default nowPlaying
