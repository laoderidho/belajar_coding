const sessionStorageKey = 'PRESS_FRECUENCY'

if(typeof (Storage) !== 'undefined'){
    if(sessionStorage.getItem(sessionStorageKey) === null){
        sessionStorage.setItem(sessionStorageKey, 0)
    }

    const increment = document.getElementById("incrementButton")
    const clear = document.getElementById("clear")
    const display = document.getElementById("count")


    display.innerText = sessionStorage.getItem(sessionStorageKey)

    increment.addEventListener('click', ()=>{
        let count = sessionStorage.getItem(sessionStorageKey)
        count++
        sessionStorage.setItem(sessionStorageKey, count)
        display.innerText = sessionStorage.getItem(sessionStorageKey)
    })

    clear.addEventListener('click', ()=>{
        sessionStorage.removeItem(sessionStorageKey)
        display.innerText = 0
    })
}else{
    alert('browser tidak suport')
}