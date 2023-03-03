const orderCoffe = callback=>{
    let coffe = null;
    console.log('sedang membuat kopi')
    setTimeout(()=>{
        coffe = 'kopi sudah jadi'
        callback(coffe)
    }, 3000)
}


orderCoffe(coffe=>{
    console.log(coffe)
})