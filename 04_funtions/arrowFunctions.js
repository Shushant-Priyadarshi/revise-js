
const user = {
    userName: "Shushant",
    age:18,
    greet:function(){
        console.log(`${this.userName} is ${this.age} years old!`);
        
    }
}


// user.greet();
//Changing the context of the object
// user.userName= "Prisha";
// user.age=23;
// user.greet();

//console.log(this);  //this will print the window object on the browser but
                    // {} on node 


//+++++++++++++++++++++ Arrow functions ++++++++++++++++++++++++++++++++++++++++++++++

// function thisPrint(){
//     let userName = "shushant"
//     console.log(this.userName); //undefined
    
// }

// const thisPrint =function(){
//     let userName = "shushant"
//     console.log(this.userName); //undefined
    
// }

const thisPrint =()=>{
    let userName = "shushant"
    console.log(this.userName); //undefined
    
}
// thisPrint()



