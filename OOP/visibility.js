class Car{

    //ini adalah private
    #chassisNumber = null;

    constructor(brand, color, maxSpeed, chassisNumber){
        this.brand = brand
        this.color = color
        this.maxSpeed = maxSpeed
        this.#chassisNumber = chassisNumber;
    }

    get chassisNumber(){
        return this.#chassisNumber
    }

    set chassisNumber(chassisNumber){
        console.log('not allowed')
    }

    // #generate(){
    //     return 60
    // }
}

const tesla = new Car('tesla', 'black', 900, 21312)

console.log(tesla)