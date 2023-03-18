const arr = ['Ridho', 'Fahreza', 'myDaftar']

// const setRandom = Math.floor(Math.random() * arr.length)
// const getRandom = arr[setRandom]

// console.log(getRandom)

//destructuring 

//nama variable bisa di buat sesuka hati tapi yang penting harus sesuai index
const [firstName, lastName] = arr

//jika tidak di deklarasikan maka haru menggunakan , agar ingin mendeklarasikan array setelahnya

const [, , daftar] = arr


console.log(daftar)

//default values 
//jika tidak ada kita bisa menambahkan array baru dalam deklarasi variable
const food = ["rice Padang"]

const [, myFavorite = "Rendang"] = food

console.log(myFavorite)