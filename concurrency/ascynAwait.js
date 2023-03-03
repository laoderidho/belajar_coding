const getCoffe = ()=>{
    return new Promise((resolve, reject)=>{
        const seeds = 100
        setTimeout(()=>{
            if(seeds>=10){
                resolve("kopi di tambahkan")
            }else{
                reject("kopi habis")
            }
        }, 1000)
    })
}

const makeCoffe = async ()=>{
    const coffe = await getCoffe()
    console.log(coffe)
}

makeCoffe()