// Immediately Invoked Function Expression (IIFE)

// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined.
// They are typically used to create a local scope for variables to prevent them from polluting the global scope.

// Syntax:

// (function (){ 
// // Function Logic Here. 
// })();

(function returnNum (){    // Named IIFE
  console.log(2);
  
})(); //  ";" is highly important Not using it Will create error If there are multiple IFFEs

// Use cases of IIFEs include:

// Avoiding polluting the global namespace by creating a new scope.
// Creating a new async context to use await in a non-async context.
// Computing values with complex logic, such as using multiple statements as a single expression.

((name)=>{    // IIFE
 console.log(`DB Connected ${name}`);
 
})("Daman");



let val1 = 10;
let val2 = 5
function addNum(num1,num2) {

    let total = num1 + num2;
    return total
    
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)