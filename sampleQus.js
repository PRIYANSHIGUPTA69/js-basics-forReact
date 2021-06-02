/*function pos(num){
    return num>0;
}

function sqr(num){
    return num*num;
}
function isInt(n) {
   return n % 1 === 0;
}
const squareList = arr => {
  // Only change code below this line
  let newArr = arr.filter(pos);
  let integerArr = newArr.filter(isInt);
  let final = integerArr.map(sqr);
  arr= final;
  return arr;
  // Only change code above this line
};

 

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);*/
/*
const object = {
 message: 'Hello, World!',
 logMessage() {
 console.log(this.message); // What is logged?
 }
 };
setTimeout(object.logMessage, 1000);*/
/*const object = {
  message: 'Hello, World!'
  };
  function logMessage() {
  console.log(this.message); // "Hello, World!"
  }
  let fn =  logMessage.bind(object);
  fn()*/
  const object = {
    who: 'World',
    greet() {
    return `Hello, ${this.who}!`;
    },
    farewell: () => {
    return `Goodbye, ${this.who}!`;
    }
   };
   console.log(object.greet()); // What is logged?
   console.log(object.farewell()); // What is logged?
   