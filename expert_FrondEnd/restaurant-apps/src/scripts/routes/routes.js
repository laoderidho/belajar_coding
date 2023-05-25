import Home from '../views/pages/Home';
import Restaurant from '../views/pages/Restaurant';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/restaurant': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
