import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/css/all.min.css';

// utils import
import Drawer from './views/app';
import setActiveNavbar from './utils/activeNavbar';
import hiddenHeader from './utils/hidden_navbar';
import swRegister from './utils/sw-register';
import handleScrool from './utils/ScrollAnimation';

// components import
import './views/components/jumbotron';
import './views/components/footer';
import './views/components/loading';
import './views/components/nullFavorite';

// style import
import '../styles/main.css';
import '../styles/responsive.css';

// hamburger menu toogle
// eslint-disable-next-line no-unused-vars
const getApp = new Drawer({
  button: document.querySelector('#hamburger-menu'),
  drawer: document.querySelector('.nav-item ul'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  getApp._renderPages();
  hiddenHeader.init({
    header: document.querySelector('header'),
    pages: '#/detail',
  });

  setActiveNavbar.init({
    link: document.querySelectorAll('.nav-item ul li a'),
    currentHash: window.location.hash,
  });
});

window.addEventListener('load', () => {
  getApp._renderPages();
  swRegister();
  setActiveNavbar.init({
    link: document.querySelectorAll('.nav-item ul li a'),
    currentHash: window.location.hash,
  });
});

window.addEventListener('scroll', () => {
  handleScrool(document.querySelectorAll('.contentHome'));
});
