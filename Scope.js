// Block Scope:
// In JavaScript, block scope refers to variables declared with let or const inside a { } block. 
// These variables are accessible only within that block and not outside it.

// Var can Accessible inside & outside the block scope 
    // var x = 10;
    
    // let , const Accessible only inside the block scope
//     const y = 20;
//     let z = 30;
    
//     console.log(x);
//     console.log(y);
//     console.log(z);


// console.log(x);

// Lexical Scope:

// The variable is declared inside the function and 
// can only be accessed inside that block or nested block is called lexical scope.


function func1() {
    const x = 10;

    function func2() {
        const y = 20;
        console.log(`${x} ${y}`);
    }

    func2();
}

func1();

// Explanation:

// This code demonstrates lexical scope, where func2 accesses the variable x from func1 and prints “10 20”.


                  // ----------------------------------- INTRESTING --------------------------------------//   

console.log(ADD1(5)); // Calling function before its been declared (Suprizingly it works)

function ADD1(num) {   // First way to write a function
    return num +1
}

ADD1(5)

// ADD2(5)   ----->  This will throw an error because The function is being holed in a variable

ADD2 = function(num)  // Second way to write a function sometimes it is also Named as "Expression"
 {
    return num +2
}
ADD2(5)
