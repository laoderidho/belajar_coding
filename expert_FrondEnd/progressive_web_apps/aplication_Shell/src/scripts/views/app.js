import DrawerInitiator from '../utils/drawer-initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'

// menjadikan class app dan mendeklarasikannya value dan deklarasinya di constructor
// dengan parameter button, drawer, content dengan tanda {} berarti value nyua adalah objek
class App {
  constructor ({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content
    this._initialAppSale()
  }
  // menjadikan method _initialAppSale dan memanggil method init dari class DrawerInitiator

  _initialAppSale () {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App
