
let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
const dateArray = myDate.toLocaleString().toString().split(",");
// console.log(`Date:${dateArray[0]}`);
// console.log(`Time:${dateArray[1]}`);

let createdDate = new Date(2006 , 8 , 24);
let createdDate2 = new Date("2006-9-24");
let createdDate3 = new Date("24-9-2006"); //Invalid Date
// console.log(createdDate);
// console.log(createdDate.toString());
// console.log(createdDate.toLocaleDateString());
// console.log(createdDate.toLocaleString());
// console.log(createdDate2.toLocaleString());
// console.log(createdDate3.toLocaleString());


let timeStamp = Date.now();
let time = new Date();
// console.log(typeof time); // obj
// console.log(typeof timeStamp); //number
const notMillisecond = time.getTime()/1000
// console.log(Math.floor(notMillisecond));


let date = new Date();
console.log(date.toLocaleString('default',{
    weekday:"long"
}));






