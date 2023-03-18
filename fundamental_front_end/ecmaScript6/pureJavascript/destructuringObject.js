const obj = {
    name: "Ridho",
    age: 20,
    major: 'informatic engginering'
}

const {name, age} = obj

console.log(`Hello ${name} your age is ${age}`)


//destructuring asigment 

const Profile = {
    firstName: 'John Doe',
    experience: 2,
    major: 'software developer'
}

let firstName = "Ridho"
let experience = 4;

({firstName, experience} = Profile);

console.log(firstName)