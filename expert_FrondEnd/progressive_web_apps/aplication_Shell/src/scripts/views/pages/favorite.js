import FavoriteDb from '../../data/favorite_db'
import { createMovieItemTemplate } from '../template/template-creator'

const favorite = {
  async render () {
    return `
      <div class= "content">
        <h2 class="content_heading">Your Like Movie</h2>
        <div id="movies" class="movies">
         
        </div>
      </div>
    `
  },
  async afterRender () {
    const movies = await FavoriteDb.getAllMovies()
    const moviesContainer = document.querySelector('#movies')

    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie)
    })
  }
}

export default favorite
