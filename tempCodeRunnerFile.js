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