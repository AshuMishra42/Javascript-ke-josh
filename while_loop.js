// jb for loop hn to while loop or do while loop ka kyo jarurt hn 
// ek kaam ko karne ka 1000 trika hota hn bs syntax different hota hn 

// While loop

let index=0
while(index<=10){
    console.log(`value of index is ${index}`);
    index++;
}

/*
output =>
value of index is 0
value of index is 1
value of index is 2
value of index is 3
value of index is 4
value of index is 5
value of index is 6
value of index is 7
value of index is 8
value of index is 9
value of index is 10
*/

let array=["flash","batman","superman"]
let arr=0
while(arr<array.length){
    console.log(`value  is ${array[arr]}`);
    arr= arr+1;
}

/*
output=>
value  is flash
value  is batman
value  is superman
*/

// Here are the examples of Do while loop

/*
syntax of do while loop

do{
    content
    variable++
}while(condition)

*/

let score=1

do{
    console.log(`score is ${score}`);
    score++;
}while(score<=10);

/*
score is 1
score is 2
score is 3
score is 4
score is 5
score is 6
score is 7
score is 8
score is 9
score is 10
*/

// Agar hmlog score ka value = 11 kar de to condition false ho jayega run ni hona chhahiye but hoga because condition last me check ho rha hn n to 1 baar print hoga hi 