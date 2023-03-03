 const avaibleMachine = ()=>{
     return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                if(machine.avaliable){
                    resolve('Mesin Kopi bisa di gunakan')
                }else{
                    reject('Mesin Kopi tidak bisa di gunakan')
                }
            }, 2000)
    })
 }


const stockCheck = ()=>{
    return new Promise((resolve, reject)=>{
        machine.avaliable = false
        setTimeout(()=>{
            if(machine.stock.coffeBeans >= 16 && machine.stock.water >=250){
                resolve("stock cukup, bisa membuat kopi")
            }else{
                reject("stock tidak cukup")
            }
        }, 1500)
    })
}

const MakeCoffe = ()=>{
    console.log('membuat kopi anda')
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('kopi anda sudah datang')
        }, 500)
    })
}

function gabungSemua(){
    avaibleMachine()
      .then((value) => {
        console.log(value);
        return stockCheck();
      })
      .then((value) => {
        console.log(value);
        return MakeCoffe();
      })
      .then((value) => {
        console.log(value);
        machine.avaliable = true;
      })
      .catch((rejected) => {
        console.log(rejected);
        machine.avaliable = true;
      });
}

 const machine = {
    stock:{
        coffeBeans: 250,
        water: 1000
    },
    avaliable: true
 }


gabungSemua()
