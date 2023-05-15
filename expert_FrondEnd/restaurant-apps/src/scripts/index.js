import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/css/all.min.css';
import Drawer from './views/app';
import setActiveNavbar from './utils/activeNavbar';
import ScrollDownMenuBlack from './utils/Scrool_Initiator';
import hiddenHeader from './utils/hidden_navbar';
import swRegister from './utils/sw-register';

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

// scroll down menu black
ScrollDownMenuBlack.init(document.querySelector('header > nav'));

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
  window.location.hash = '#/home';
});
