const marval_Heros = ["thor","IronMan","SpidarMan"]
const DC_Heros = ["BatMan","Flash","SuperMan"]

// marval_Heros.push(DC_Heros); // OUTPUT --> [ 'thor', 'IronMan', 'SpidarMan', [ 'BatMan', 'Flash', 'SuperMan' ] ]
// console.log(marval_Heros); 

          //                          <---------------------///------------------------------>                         //



All_heros = marval_Heros.concat(DC_Heros)
console.log(All_heros);
//  Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//  OUTPUT --> [ 'thor', 'IronMan', 'SpidarMan', 'BatMan', 'Flash', 'SuperMan' ]



          //     SPREAD OPERATOR        <---------------------///------------------------------>                         //

const all_new_Heros =  [...marval_Heros,...DC_Heros]
console.log(all_new_Heros);

          //                          <---------------------///------------------------------>                         //

const Arr3 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
New_Arr3 = Arr3.flat(Infinity)  // Returns a new array with all sub-array elements concatenated into it recursively 
                                // up to the specified depth.
console.log(New_Arr3);




console.log(Array.isArray("Venkatesh"));
console.log(Array.from("Venkatesh")); // Creates an array from an iterable object.
console.log(Array.from({name : "Venkatesh"})); // intresting Case

let scr1 = 100;
let scr2 = 200;
let scr3 = 300;

console.log(Array.of(scr1,scr2,scr3)); // Returns a new array from a set of elements.
                                       // @param items — A set of elements to include in the new array object.





