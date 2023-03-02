//immutability artinya tidak di ubah jika di ubah maka menghasilkan object baru

const user = {
    firstName :'Ridho',
    lastName : 'fanreja'
}

const createNewLastName= (newLastName, user)=>{
    return {...user, lastName:newLastName}
}

const newUser = createNewLastName('fahreza', user)

//object user tidak berubah
console.log(user)

//di ubah dalam object baru
console.log(newUser)
