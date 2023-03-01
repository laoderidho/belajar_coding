class mhs {
    constructor(firstName, LastName, age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }

    get fullName(){
        return (`hello ${this.firstName} ${this.LastName}`)
    }

    set fullName(fullName){
        const [firstName, LastName] = fullName.split(' ')
        this.firstName = firstName;
        this.LastName = LastName;
    }
}

const user = new mhs();

user.fullName = 'Ridho Fahreza'

console.log(user.fullName)