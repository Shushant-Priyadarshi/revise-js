// Stack and Heap Memory

// Stack = used when primitive data i.e. when a variable is copied  the copy of the value is given to 
// the variable

let x = 32;
let y = x;
y = 23;

//changing y does not changes x
console.log("x = ",x);
console.log("y = ",y);



// Heap = used when non primitive data i.e when modified the actual value also get changed because 
// the refernce to memory is passed 

let obj = {
    id:23,
    name:"Shushant"
}

let obj2 = obj;
obj2.id = 33;
//changed the original object
console.log(obj);
