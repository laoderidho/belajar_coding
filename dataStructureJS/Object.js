const user = {
    name: "Ridho",
    jurusan: "Teknik Informatika",
    NIM: 2081007,
    mylife: "Buru Maluku"
}

console.log(`hello ${user.name} study ${user.jurusan} your NIM is ${user.NIM}`)

//di bawah ini akan jalan jika pemanggilan key nya memiliki tipe data string
console.log(`hello ${user["mylife"]}`)

user.name = "Fahreza"
console.log(`hello your last name is ${user.name}`)

delete user.mylife;

console.log(user)


