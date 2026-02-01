// Singleton --> When we declare an object like a literal ,Singleton is not formed
//               If an object is formed using a constructor Then it will be a Singleton  {Object.create}


// Object Literals 

// Declaring a symbol
 Mysym1 = Symbol("Key1")

const JsUser = {
    name : "Venkatesh",
    [Mysym1] : "mykey1",  // this a symboll ( it is used and accesed in obj  always with [] )
    "Full Name" : "Venkatesh S",
    age : 24,
    email: "xyz@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]

}

// Accessing Obj :

console.log(JsUser.age); // dot Method
console.log(JsUser["Full Name"]); // Bracket Method  (reccomanded) 
console.log(JsUser[Mysym1]);

// Change Value in Obj :

JsUser.email = "ABC@gmail.com"
// console.log(JsUser);


// Function in Obj:

JsUser.greetings = function () {
    console.log("Hello JS User");   
}

console.log(JsUser.greetings)   // it gives the reference of the Function
console.log(JsUser.greetings()) // It Executes the function

JsUser.greetings2 = function () {
    console.log(`Hello JS User : ${this.name}`);   
}

console.log(JsUser.greetings2)   // it gives the reference of the Function
console.log(JsUser.greetings2())

