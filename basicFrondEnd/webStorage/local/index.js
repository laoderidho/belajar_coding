
//mendefinisikan localStorage
const localStorageKey = "PRESS_FREQUENCY";

//men cek apakah type storage di dukung browser
if(typeof (Storage)!== 'undefined'){
    // cek apakah local storage pernah di definisikan 
    if(localStorage.getItem(localStorageKey) === null){ 
        // menambahkan localStorageKey di dalam local storage browser
        localStorage.setItem(localStorageKey, 0)
    }

    //menangkap semua yang ber id di bawah ini
    const increment = document.getElementById("incrementButton")
    const clear = document.getElementById("clear")
    const count = document.getElementById("count")

    // mendefinisikan local storage dalam web 
    count.innerText = localStorage.getItem(localStorageKey)


    // memberikan fungsi dalam local storage
    increment.addEventListener('click', ()=>{
        let getCount = localStorage.getItem(localStorageKey)
        getCount++;
        localStorage.setItem(localStorageKey, getCount)
        count.innerText = localStorage.getItem(localStorageKey)
    })

    clear.addEventListener('click', ()=>{
        localStorage.removeItem(localStorageKey)
        count.innerText = 0
    })
}else{
    alert('browser yang anda gunakan tidak mendukung local storage')
}

