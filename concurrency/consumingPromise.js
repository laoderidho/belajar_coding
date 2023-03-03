const stock = {
    arabica: 250,
    water: 1000
}

const checkStock = ()=>{
    return new Promise((resolve, reject)=>{
        if(stock.arabica >= 16 && stock.water >=250 ){
            resolve('stok cukup membuat kopi')
        }else{
            reject('stok tidak cukup, silahkan membeli')
        }
    })
}

const succes = resultValue=>{
    console.log(resultValue);
}

const failure = rejectValue =>{
    console.log(rejectValue);
}

//.then method untuk menjalankan promise dengan baik
checkStock().then(succes).catch(failure)
