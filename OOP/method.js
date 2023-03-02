class Math {
    constructor(number1, number2){
        this.number1 = number1;
        this.number2 = number2
    }

    //ini adalah method
    plus(){
        return this.number1 + this.number2;
    }

    minus(){
        return this.number1 - this.number2
    }

    multiply(){
        return this.number1 * this.number2
    }

    divided(){
        return this.number1 / this.number2
    }
}

const math = new Math(13, 15)

const getPlus = math.plus()
const getMin = math.minus()
const getMultiply = math.multiply()
const getDivided = math.divided()

console.log(getPlus)
console.log(getMin)
console.log(getMultiply)
console.log(getDivided)

