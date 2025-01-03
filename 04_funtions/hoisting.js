console.log("Hoisting.....");

console.log( addOne(3));
function addOne(num) {
    return num + 1;
}



console.log(addTwio(3)); // Error
const addTwio = function(num) {
    return num +2 ;
}

