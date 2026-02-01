// // const tinderUser = new Object()  ----> Singleton Obj
// const tinderUser = {}  //  ----> Not a  Singleton Obj

// tinderUser.id = "123abc"
// tinderUser.name = "Daman"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email : "XYZ@gmail.com",
//     fullName : {
//         userfullName : {
//             firstName : "Venkatesh",
//             lastName : "Shashidhar",
//         }
//     }
// }

// console.log(regularUser.fullName.userfullName.firstName);

// //  Combining Objects 

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4 : "d"}
const obj3 = Object.assign({},obj1,obj2) 
// Copy the values of all of the enumerable own properties from one or more source objects
//  to a target object. Returns the target object
// { } ---> target
// obj1 ---> src1
// obj2 ---> src2
console.log("Merging Using Assign() Method:");
console.log(obj3);

// // Spread Operator ( Recomended)

// obj4 = {...obj1,...obj2}
// console.log("Merging Using Spread Operator:");

// console.log(obj4);

// const user = [
//     {
//         id : 1,
//         email : " dm@gmail.com"
//     },
//     {
//         id : 2,
//         email : " cm@gmail.com"
//     },
//     {
//         id : 3,
//         email : " bm@gmail.com"
//     },
//     {
//         id : 4,
//         email : " gm@gmail.com"
//     },
// ]

// user[0].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // Returns an array of key/values of the enumerable own properties of an object
// console.log( tinderUser.hasOwnProperty('isLoggedIn')); // Determines whether an object has a property with the specified name.

// Obj  Destructure :

course = {
    courseName : "DataScience",
    price : 10000,
    courseInstructor : "PWSkills"
}

const {courseInstructor} = course

console.log(courseInstructor);

// JSON

// {
//     courseName : "DataScience",
//     price : 10000,
//     courseInstructor : "PWSkills"

// }

