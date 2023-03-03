const executorFunc = (resolve, reject)=>{
    let machineCoffe = true

    if(machineCoffe){
        resolve('kopi anda di buat')
    }else{
        reject('maaf mesin kopi sedang rusak')
    }
}

const makeCoffe = ()=>{
    return new Promise(executorFunc)
}

const buat = makeCoffe()
console.log(buat);