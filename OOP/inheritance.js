class MailServices{
    constructor(sender){
        this.sender = sender
    }

    sendMessage(message, receiver){
        return `${this.sender} send ${message} to ${receiver}`
    }
}


//inheritance class dari parent Mail service
//class ini juga bisa mengakses method dari class parent / super class
class whatsApp extends MailServices{
    sendBroad(message, receivers){
        for(let receiver of receivers){
            //ini memanggil method dari parent class
            this.sendMessage(message, receiver)
        }
    }
}

class emailServices extends MailServices {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

// const waSend = new whatsApp('Ridho')

// const message = 'Hello how are you'
// const receiver = 'syafa'

// console.log(waSend.sendMessage(message, receiver))

const getWhatsApp = new whatsApp('0821313121')
const email = new emailServices('trimulyani2602@gmail.com')

getWhatsApp.sendMessage("Hello", "6289876543210");
getWhatsApp.sendBroad("Hello", ["+6289876543210", "+6282234567890"]);

email.sendMessage("Hello", "john@doe.com");
email.sendDelayedMessage("Hello", "john@doe.com", 3000);


console.log(getWhatsApp)
console.log(email)

