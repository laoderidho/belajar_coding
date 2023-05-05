import upcoming from '../views/pages/upcoming'
import nowPlaying from '../views/pages/now-playing'
import detail from '../views/pages/detail'
import favorite from '../views/pages/favorite'

const routes = {
  '/': nowPlaying, // default page
  '/now-playing': nowPlaying,
  '/upcoming': upcoming,
  '/detail/:id': detail,
  '/favorite': favorite
}

export default routes
