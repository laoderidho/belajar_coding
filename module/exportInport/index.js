//memasukkan deklarasi variable ke 
const {coffeStock, open} = require('./state')

const make = (type, miligram) => {
  if(coffeStock[type] >= miligram){
      return `kopi di buat`
  }else{
      return `kopi tidak bisa di buat`
  }
};

console.log(make('arabica', 100), open);
