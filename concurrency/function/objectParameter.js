const obj = {
    name : "La Ode Ridho Fahreza",
    jurusan: "Teknik Informatika",
    umur : 20
}

//pemanggilan parameter object bisa di definisikan sebagai berikut

const objFunc = ({name, jurusan})=>{
    console.log(`hello ${name} anda berada di jurusan ${jurusan}`)
}

//pemanggilan obj bisa di jadikan sebagai argument
objFunc(obj)