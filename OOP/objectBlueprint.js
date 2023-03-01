
//ini adalah blueprint yang di buat dalam class 
class Car{
    //di dalam constructor adalah property yang menghasilkan nilai 
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

//ini cara memanggil nya 
const tesla = new Car('tesla', 'black', 180, 'ge1331')

const driveTesla = tesla.drive()

console.log(driveTesla)


const bmw = new Car('BMW', 'silver', 200, 'gee1221')

const driveBmw = bmw.drive()

console.log(driveBmw)

