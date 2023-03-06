const div = document.getElementsByTagName('div')

for(let el of div){
    el.addEventListener('click', ()=>{
        alert('elemen ' + el.getAttribute('id').toUpperCase())
    }, true)
}