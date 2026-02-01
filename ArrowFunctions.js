const user = {
    username : "Daman",
    price : 10000,

    welcomeMessage : function  ( ) {
        console.log(`Username is ${this.username} and the price is ${this.price}`);
    }
          
}

user.welcomeMessage()
user.username = "Venkatesh"
user.welcomeMessage()

console.log(this);

// "This " Can be used in object it will not work in function


// Arrow Function :  () => {}

Add2 = (num1,num2) =>{
    return num1+num2;
}

console.log(Add2(3,4));

// Implicit Return :

Add2 = (num1,num2) => ( num1+num2)  // In this way there is no need to write "return" Since "{}" is not used.
console.log(Add2(4,6));

//---->  if we want to retuen the  object in Implicit Return:

const returnObj = () => ({username: "Daman",
    Email: "XYZ@gmail.com"
})

console.log(returnObj())

