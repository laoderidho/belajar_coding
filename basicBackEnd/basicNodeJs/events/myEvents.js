const { EventEmitter } = require("events");
const myEvent = new EventEmitter();

const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};


myEvent.on("coffee-order", makeCoffee);
myEvent.on("coffee-order", makeBill);

myEvent.emit("coffee-order", { name: "Tubruk", price: 15000 });
