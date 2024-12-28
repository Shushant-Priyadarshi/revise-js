//++++++++++++++++++++++++++++++++++++ BASICS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const sayHello = ()=>{
    console.log("Hello");
    
}

function HelloWorld (){
    console.log("Hello World");
    
}

// sayHello();
// console.log(HelloWorld);
 
//++++++++++++++++++++++++++++++++++++ Parameters and Arguments ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function add (n1,n2){ //Parameter
    console.log(n1+n2);
    
}

// add(3,4); //argument


//++++++++++++++++++++++++++++++++++++ Rest Operator ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function giveAll(...n){
    return n;
}

const result = giveAll(1,2,3,4,5,6,7)
const sum = result.reduce((total,res)=>total+res,0) // 0 is the initial value of total
// console.log(`The sum of ${result} is : ${sum}`);

//++++++++++++++++++++++++++++++++++++ Scopes ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

