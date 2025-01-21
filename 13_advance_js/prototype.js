const { LEGAL_TLS_SOCKET_OPTIONS } = require("mongodb");

function createUser(name,age){
    this.name=name;
    this.age=age
}

createUser.prototype.incrementAge=function(){
    this.age++;
}

createUser.prototype.printMe=function(){
    console.log(`My name is ${this.name} and I am ${this.age} years old.`)
}

const shushant = new createUser("Shushant",18)
const rajneet = new createUser("Rajneet",18)

// shushant.incrementAge();
// rajneet.incrementAge();

// shushant.printMe();
// rajneet.printMe();

//+++++++++++++++++++++++++++++++++++++++++++=+++==+++++++++++++++++++++++++++++++++++

String.prototype.trueLength = function () {
    console.log("True Length is:", this.trim().length);
    return this.trim().length; // Return the true length if needed
  };
  
  const userName = "Shushant      ";
  userName.trueLength(); // Output: "True Length is: 8
  
