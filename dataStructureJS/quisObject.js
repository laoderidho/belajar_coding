const restaurant = {
  name: "Mixue",
  city: "Jakarta",
  "favorite drink": "ice cream",
  "favorite food": "mie ayam",
  isVegan: false
};

let name = restaurant.name;

//jika objct memiliki spasi maka key object harus bernilai string dan di panggil menggunakan kurung siku
let favoriteDrink = restaurant["favorite drink"];


console.log(`selamat datang di restoran ${name} dengan minuman favorit ${favoriteDrink}`)