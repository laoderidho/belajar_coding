class MailService {
  constructor(sender) {
    this.sender = sender;
  }
}

class WhatsAppService extends MailService {
  // overriding constructor
  constructor(sender, isBusiness) {
    //super memanggil property method constructor parent
    super(sender);
    this.isBusiness = isBusiness;
  }
}


const whatsapp = new WhatsAppService('ridho', true)

console.log(whatsapp)



class animal{
    constructor(name, age, isMamal){
        this.name = name
        this.age = age
        this.isMamal = isMamal
    }

    run(){
        return `${this.name} is run now`
    }
}

class rabbit extends animal{

    //jika ada child memiliki nama method yang sama dengan parent maka method child yang di jalankan
    // run(){
    //     return `${this.name} is run`
    // }

    //ini untuk memanggil override class dengan method super
    run(){
        const getParent = super.run()
        return `hi is child run is ${getParent}`
    }
}

const getAnimal = new rabbit('rabbit', 14, true)

const call = getAnimal.run()

console.log(call)

