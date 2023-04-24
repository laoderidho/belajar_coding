import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/responsive.css'
import App from './views/app'

// deklarasinya bisa dilihat di file app.js
// eslint-disable-next-line no-unused-vars
const myApp = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  myApp.renderPage()
})

window.addEventListener('load', () => {
  myApp.renderPage()
})
