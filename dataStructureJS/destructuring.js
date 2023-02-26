//destructuring object
const user = {
    firstname : "La Ode",
    lastname : "Fahreza"
}

//ini mendeklarasikan object dan memanggil object tanap dot / tanda .(titik)
//pendeklarasian destructuring object harus di namakan dengan nama key
const {firstname, lastname } = user;

console.log(firstname, lastname)


//destructuring object

const arr = ['fahreza', 'Ridho', 'yourdi']

//pendeklarasikan destructuring array bisa di namakan dengan bebas
const [namaDepan, namaBelakang] = arr;

console.log(namaBelakang)