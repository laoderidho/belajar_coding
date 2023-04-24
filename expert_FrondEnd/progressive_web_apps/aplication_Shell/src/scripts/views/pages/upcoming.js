import themoviedb from '../../data/moviedb-source'
import { createMovieItemTemplate } from '../template/template-creator'

const upcoming = {
  async render () {
    return ` 
    <div class="content">
        <h2 class="content__heading">Upcoming in Cinema</h2>
        <div id="movies" class="movies">
        </div>
      </div> 
    `
  },

  async afterRender () {
    const movies = await themoviedb.upcoming()
    const moviesContainer = document.querySelector('#movies')
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie)
    })
  }
}

export default upcoming
