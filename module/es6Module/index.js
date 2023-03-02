import coffeStock from "./state.js";

const make = (type, miligram) => {
  if (coffeStock[type] >= miligram) {
    return `kopi di buat`;
  } else {
    return `kopi tidak bisa di buat`;
  }
};

console.log(make('arabica', 100))