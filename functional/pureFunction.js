//pure function tidak boleh memiliki nilai di luar function 
//pure function tidak boleh mempengaruhi function lain


//impure function

let PI = 3.14 //nilai ini keluar dan tidak di dalam function

const countCircle = (jari)=>{
    return PI * (jari * jari)
}

console.log(countCircle(4))

// const personAge = (person, age)=>{
//     person.age = age;
//     return person
// }

// const person={
//     name:'Ridho'
// }
// const newPerson = personAge(person, 14)
// //hasil di bawah ini menunjukkan bahwa function person age memiliki akses mengubah object person
// console.log({person})

//pure function
const hitung = (jari)=>{
    return 3.14 * (jari*jari)
}


//kode ini tidak mempengaruhi object function
const personAge = (person, age)=>{
    return{...person, age}
}
const person = {
    name : 'Ridho'
}

const getPersonAge = personAge(person, 13)
console.log({person, getPersonAge})