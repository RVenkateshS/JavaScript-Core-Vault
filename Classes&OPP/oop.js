
// const user = {
//     username:  "Venkatesh",
//     loginCount: 8,
//     signedIn : true,

//     getUserDetails : function() { 
//         console.log( `the user details are : \n ${this.username} \n ${this.loginCount} \n ${this.signedIn}`);
//         console.log(this);
        
// },

// }

// user.getUserDetails()

// console.log(this); // in global context  


// const promise1 = new Promise()

function User (username,loginCount,isLoggedIn){

    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Hello ${this.username}`);
        
        
    }

    return this 
}


const user1 = new User("Venkatesh", 5,true)
console.log(user1);
console.log(user1.constructor);
const user2 = new User("VenkateshS", 6,false)
console.log(user2);
user2.greeting()





