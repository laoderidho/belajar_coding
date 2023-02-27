//rest parameter terjadi jika beberapa argument terlalu banyak tetapi semuanya memiliki 1 tujuan
//contohnya hanya untuk menjumlahkan semua argument

const sum = (...args)=>{
    let temp = 0;

    for(let i=0; i<args.length; i++){
        temp+=args[i]
    }
    return temp
}

console.log(sum(1,3,1,4,1,21,4,1,12,4,1))