class Animal{
    constructor(name, age, isMammal){
        this.name = name
        this.age = age
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal{
    constructor(name, age){
        super(name, age)
        this.isMammal = true;
    }
    eat(){
        return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal {
    constructor(name, age) {
        super(name, age);
        this.isMammal = false;
    }

    fly() {
        return `${this.name} sedang terbang!`;
    }
}

const myRabbit = new Rabbit('Labi', 2)

console.log(myRabbit)

const myEagle = new Eagle('Elo', 4)

console.log(myEagle)

class Car {}
const car = new Car();
console.log(typeof Car);

