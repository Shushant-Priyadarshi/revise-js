console.log("Hello Maths!!");

const num1 = 100;
const num2 = new Number(200);

//console.log(num2); [Number: 200]

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    ToFixed method : Return a string ,takes a number between 0 - 100(for rounding off the number entered)
    the default value is 0  
*/
// let num = 23.456;
// console.log(num.toFixed());
// console.log(num.toFixed(2));
// console.log(num.toFixed(6)); add extra zeros for padding  result =23.456000

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    toString : converts number to string
 

let num = 23.34;
console.log(typeof(num.toString()));
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// tolocalString
// let num = 100000000;
// console.log(num.toLocaleString());
// console.log(num.toLocaleString("en-IN"));

//++++++++++++++++++++++++++++++++++++++++++++  Maths Lib  +++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.PI.toFixed(2));
// console.log(Math.abs(-34));
// console.log(Math.round(4.3));
// console.log(Math.ceil(45.32));
// console.log(Math.floor(45.32));

//++++++++++++++++++++++++++++++++++++++++++++  Maths Random  +++++++++++++++++++++++++++++++++++

// console.log(Math.random());// between 0 and 1
// console.log((Math.random()*10).toFixed(0));  // between 0 and 10 (including them too)

//formula for generating values when min and max given
let min = 10;
let max = 20;

for (let i = 0; i < 20; i++) {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
