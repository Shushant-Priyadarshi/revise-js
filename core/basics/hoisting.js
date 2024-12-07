/*Variables declared with var are hoisted to the top of their function scope,
 but they remain uninitialized until the code execution reaches the var declaration
*/
console.log(x); // undefined
var x =4;   
