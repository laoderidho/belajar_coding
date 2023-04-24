import upcoming from '../views/pages/upcoming'
import nowPlaying from '../views/pages/now-playing'
import detail from '../views/pages/detail'

const routes = {
  '/': nowPlaying, // default page
  '/now-playing': nowPlaying,
  '/upcoming': upcoming,
  '/detail/:id': detail
}

export default routes
