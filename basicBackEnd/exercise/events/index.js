const { EventEmitter } = require("events")

const happyBirthday = ({name})=>{
    console.log(`happy birthday ${name}`)
}

const myEmitter = new EventEmitter()

myEmitter.on("birthday", happyBirthday)



const time = setInterval(()=>{
        myEmitter.emit("birthday", {name: 'Ridho'})
        clearInterval(time)
    }, 2000)

