const hamburgerMenu = document.querySelector('#hamburger')
const draw = document.querySelector('#drawer')
const main = document.querySelector('main')

hamburgerMenu.addEventListener('click', e=>{
    draw.classList.toggle('open')
    //di gunakan untuk menghentikan event jika sudah sampai sini
    e.stopPropagation()
})

main.addEventListener('click', event=>{
    draw.classList.remove('open')
    event.stopPropagation()
})