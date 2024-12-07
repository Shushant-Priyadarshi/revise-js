/*
Block Scope Error:
In Js variables declares with var are unware of their scope , it will be accessed and can be modified
from outside of their scope.
*/
{
    let x =10;
    var y =11;
}
console.log(x);
console.log(y); //This will give error as it is out of scope

/*
Funtional Scope Error:
In Js variable declares with var can be access throughout the funtion even it is inside a block scope
*/
function hello(){
   if(true){
    var x = 12;
    let y =12;
   }
   console.log(x);
   console.log(y); //This will give error as it is out of scope
   
}
hello();


