import './styles/main.css';


const hamburger_Menu = document.getElementById("toogleMenu")
const getNav = document.querySelector('nav ul')

hamburger_Menu.addEventListener('click', event=>{
    getNav.classList.toggle('nav__list')
})