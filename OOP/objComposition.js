class Developer{
    constructor(name){
        this.name = name;
    }

    commitChange(){
        return `${this.name} is commiting change`
    }
}

class frontEnd extends Developer{
    buildUI(){
        return `${this.name} is a front end developer`
    }
}

class backEnd extends Developer{
    buildAPI(){
        return `${this.name} is a backend developer`
    }
}

class devOps extends Developer{
    deployApp(){
        return `${this.name} us a devOPS enginerr`
    }
}



