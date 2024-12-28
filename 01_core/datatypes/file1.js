let str1 = "Hello";
let str2 = " World!";
let str3 = str1+str2;
let str4 = str1-str2;

// console.log(str4);
// console.log(true++);


// Types of datatypes :
// 1)Primitive : 
//  a) String 
//  b) Number 
//  c) Boolean 
//  d) Null
//  e) undefined
//  f) Symbol

const id = Symbol(123);
const Oid = Symbol(123);
// console.log(id === Oid); // false (unique values)



// 2) Reference (Non Primitive) 
//  a) Arrays
//  b) Objects
//  c) Funtions 

const heros = ["Me","Shushant","Me again"]

const obj = {
    name:"Shushant",
    crush:"Fuck girls they all are the same!!"
}

console.log( typeof obj);
console.log( typeof heros);
