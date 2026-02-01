// For Of   // Can be used with iterative objects like strings,maps,arrays etc..

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello world!"
for (const wrd of greetings) {
    console.log(wrd); 
}


//Maps

const map = new Map()
map.set('IN',"INDIA")
map.set('FR',"FRANCE")
map.set('USA',"United States Of Amarica")

console.log(map);

for (const [key,value] of map) {
    console.log(key ,':-',value);
   
}

// It's difficult to use "For Of" loop with objects

// For IN Loop:

const myObj ={

    js: "JavaScript",
    cpp : "C++",
    py : "Python",
    swift : "Swift by Apple"

}

for (const key in myObj) {
     
    console.log(` Key is : ${key} AND Value is : ${myObj[key]}`);
    
    
}


const programming = ["js","py", "java","rb","cpp"]

for (const key in programming) {
     console.log(`index is ${key} AND Value is ${programming[key]}`);
     
}

// "For IN" loop cannot be used in Maps since Maps are not iterable




// programming.forEach( function (val) {
//     console.log(val);
    
// } )

// programming.forEach( (val) => {      // With the help of Arrow Function 
//     console.log(val);
    
//  } )

                       //--------------------------------------||----------------------------------------//

function PrintMe (item) {
    console.log(item);
    
}
    
programming.forEach(PrintMe)    // directly putting function referance
 
programming.forEach( (val,index,arr)=>{       // Sing other parameters Of the callback function In the forEachd loop
    console.log(val,index,arr);
    
} )

const myCoding = [          // accessing  [{},{},{}] using forEach Loop 
    {
        languageNAme : "Python",
        languageFileName : "py" 

     },

    {
        languageNAme : "javaScript",
        languageFileName : "js" 

     },

    {
        languageNAme : "java",
        languageFileName : "java" 

     }
]

myCoding.forEach((item)=>{
  console.log(item.languageNAme);
  
})





