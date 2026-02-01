// function Add(num1,num2) {

//     console.log( num1+num2);
     
// }

// Add(2,3)
// Add(2,"3")

// Anything Written after the "return" inside the function Will not work

function Add(num1,num2) {

    result  = num1 + num2
    return result
     
}

// answer = Add(2,6)
// console.log("Answer:", answer);

function loginMessage(username) {    // If you don't pass anything As a parameter And
                                     //  Also doesn't used any check barrier Then the result will come as "undefined"
                                     // To prevent this condition we can also use default value Where 
                                     // we can use "=" in the  In the perimeter itself to provide the value
                                     // If nothing is provided Then that Value will be considered
    if (username === undefined) {
        console.log("Please Enter UserName");
        return
        
    }
    return `${username} just loggedIn`
}

console.log(loginMessage("Venkatesh"))  
console.log(loginMessage());
 

// when we dont know the parameter :
// {We use rest Operator }

function calculateCartPrice( ...num1) {
    return num1
}
console.log(calculateCartPrice(100,200,300));

// how to use/ pass the Object in a function :

const user = {
    username : "Daman",
    price : 10000,
}

function handleobj(anyObj) {
    console.log(`Username is ${anyObj.username} and the price is ${anyObj.price}`);
      
}

handleobj(user)

const myArr = [ 200,400,100,600]

function returnSecondValue(getArr) {

    return getArr[1]
    
}

 console.log(returnSecondValue(myArr));


 