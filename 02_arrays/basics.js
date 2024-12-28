// An array is an object with multiple items in single variable

// const arr = [23,434,554,32];
// const arr2 =  new Array(23,12,"array");
//console.log(typeof arr); // object

// When we use any array copy methods it makes a shallow copy


// 1) Shallow copy: arrays share the same reference point (change in copy reflects the original) 
// 2) Deep copy: arrays does not share the same reference point (change in copy does not reflects the original) 

// console.log(arr2);
// arr2.push(34); // add to last
// console.log(arr2);
// arr2.pop(); // delete the last
// console.log(arr2);
// arr2.unshift(0); // adds 0 to first
// console.log(arr2);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//const arr = [1,2,3,4,5];
// arr.shift() // deletes the first element
// console.log(arr.includes(3));
// console.log(arr.indexOf(3));

// join =>  add all the elements of an array with the delimeter provided and converts it to string

// console.log(arr.join(" % ")); //1*2*3*4*5

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// SLICE and SPLICE
//slice=> return slice of index writeen ignoring the uppervalue and it does not change the original array
//splice=> return slice of index writeen and number of remove elements and it does change the original array
// const arr = [1,2,3,4,5];
// // console.log("Before Slice: ",arr);
// // const arr2= arr.slice(1,3)
// // console.log("After Slice ",arr2);
// const arr2=arr.splice(0,3) // starts from 0 index and remove 3 elements
// console.log("After Splice ",arr2);
// console.log("Original Array ",arr);

// const arr= [1,2,3];
// const copyArr=[...arr]
// copyArr.unshift(0);
// console.log("Copy Array: ",copyArr);
// console.log("Original Array: ",arr);

//+++++++++++++++++++++++++++++++++++ CONCAT AND PUSH +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const arr1 = [1,2,3,4]
// const arr2 = [5,6,7,8]
// // arr1.push(arr2)
// // console.log(arr1);
// const resultArr = arr1.concat(arr2)
// console.log(resultArr);

//+++++++++++++++++++++++++++++++++++++++++++++ SPREAD OPERATOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const marvel = ["Ironman","Spiderman","Hulk"]
const dc = ["Batman","Superman","Flash"]
const spread = [...marvel,...dc]


const arr = [1,2,3,[32,23,[3243,5443,23],32],43]
const result = arr.flat(Infinity)
console.log(result);









