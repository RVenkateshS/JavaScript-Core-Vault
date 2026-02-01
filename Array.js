const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[0]);   

// Array Methods

myArr.push(6);
// myArr.push(7) 
// myArr.pop()  
// myArr.unshift(9)
// myArr.shift()        Removes the first element from an array and returns it.
                     // If the array is empty, undefined is returned and the array is not modified.
// console.log(myArr);   

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));

//                            <--------------------- slice ,splice ------------------------------>

console.log("A", myArr);

const myn1 =  myArr.slice(1,3); // Slice dosen't manipulate the original Array ( excludes 3rd index)
console.log(myn1);
console.log("B", myArr);

const myn2 =  myArr.splice(1,3); // Splice manipulates the original Array (includes 3rd index)
console.log(myn2);
console.log("C", myArr);



