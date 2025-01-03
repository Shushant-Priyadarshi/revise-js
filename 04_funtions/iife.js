// IIFE: Immedietely Involked Function Expressions


//Why need ?: Avoid Polluting the Global Scope
// Variables defined within an IIFE are not accessible from the outside 
// because they are confined to the function's scope.
// This prevents naming collisions and keeps the global namespace clean.
(function() {
    var message = "Hello, World!";
    console.log(message);
})();

console.log(message); // ReferenceError: message is not defined


