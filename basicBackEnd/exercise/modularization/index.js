const Tiger = require("./tiger")
const Wolf = require("./wolf")

const tiger = new Tiger()
const wolf = new Wolf()

const figth = (tiger, wolf)=>{

    if(tiger.strength > wolf.strength){
       return tiger.growl()
    }
    
    if(wolf.strength > tiger.strength){
        return wolf.howl()
    }

    console.log('same strengh')
}

figth(tiger, wolf)
