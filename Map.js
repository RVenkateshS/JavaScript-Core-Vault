const mynum = [1,2,3,4,5,6,7,8,9,10]

// const Newnum = mynum.map((num)=>{
//     return num + 10
// })

// console.log(Newnum);


                        // ----------------------------------||------------------------------------//

// Chaining 

const Newnum1 =  mynum
                 .map((num)=>num *10)    // multiplied *10
                 .map((num)=> num+1 )    // added +1
                 .filter((num)=> num >= 40) // filtered numbers greater than 40

console.log(Newnum1);
