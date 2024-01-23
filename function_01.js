//                                                                 FUNCTION_PART01

console.log("A");
console.log("N");
console.log("K");
console.log("U");
console.log("S");
console.log("H");

/* Syntax :- function functionname(){

                  
                 }     
                 example : function smyname(){

                                              }    
                                              
                smyname => Reference
                smyname () => function show karne ke liye

*/

function addtwonumbers(number1,number2){

    console.log(number1+number2);
    
}

 let result = addtwonumbers(3,5)
addtwonumbers(3,"5") 
addtwonumbers("5",4)
addtwonumbers(3,null)

console.log("Result:", result);

// value return ni kiye hn islye yha output me show hota undefined in value result'
// same function ke code me return use karke dekha jaye.

function addtwonumbers(number1,number2){

    let result1= number1+number2
    console.log("ankush");
    return result1
    
}

 let result1 = addtwonumbers(3,5)
console.log("Result:", result1);

// result ke value ko return kr diye hmlog wha p jake result me value 8 show hone lgega.

// let result1= number1+number2
//console.log("ankush"); agar is trike se na likhna chhahe to dusra trika bhi available hn yha p
//return result1

function addtwonumbers(number1,number2){

    return number1+number2
    
}

 let result2 = addtwonumbers(3,5)
console.log("Result:", result2);

// This trick also works so hmlog ne yha p 3 trike dekhe how function is ceated 

function loginUser(username){
     return `${username} just looged in`
}

loginUser("ankush") // sirf y krenge to kaam ni krega bcz value return to ho gya hn pr hmlogo ne print k command ni diya hn 
console.log(loginUser("ankush")); // easily output comes => ankush just logged in 
console.log(loginUser("")); // name pass hi ni kiye hn to space khali rhega
console.log(loginUser()); // output me undefined aa jayega kuch pass ni kiye hn to 

// Inside in a function 

function loginUser(username){
    if(username===undefined){
        console.log("please enter a valid username");
        return
    }
    return`${username} just logged in `
}

console.log(loginUser());

// function me return lg jaye to uske next parts run ni hote hn 

// for showing not equal to if(!username){
//                                       console.log("please enter valid name");
//                                       }

// we can add default value add in function 

// function function name (username=="sum"){

//                                         }
