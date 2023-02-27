class Car{
    constructor(brand, color, maxSpeed, chassisNumber){
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;
    }
    drive(){
        return `${this.brand} is drive now`
    }
}

const tesla = new Car('tesla', 'black', 180, 'ge1331')

const driveTesla = tesla.drive()

console.log(driveTesla)

