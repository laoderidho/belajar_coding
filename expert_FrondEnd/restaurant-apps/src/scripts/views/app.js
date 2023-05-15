import DrawerInitiator from '../utils/drawerInitiator';
import Url from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async _renderPages() {
    const url = Url.parseActiveWithCombiner();
    const pages = routes[url];
    this._content.innerHTML = await pages.render();
    await pages.afterRender();
    const skipLinkElem = document.querySelector('#skip_content');
    skipLinkElem.addEventListener('click', event => {
      event.preventDefault();
      document.querySelector('#content').focus();
    });
  }
}

export default App;
