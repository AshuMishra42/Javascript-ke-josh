let a=10
const b=20
var c=30



if(true){
   let a=10
    const b=20
    var c=30
    d=40
}

console.log(a); // a me problem aayega because a if ke andr define kiya hua hn let kaam shi karta hn block scope me 
console.log(b); // b m bhi problem create hoga hi const bhi kaam shi karta hn block scope me 
console.log(c); // c ka value directly print ho jyega 30 pr hona ni chhahiye tha so var kam ni krta hn shi se block scope pe 
console.log(d); // agar ham yha pe koi variable use na kare to v run ho jyega problem create hoga hi

// so we have to use always let or const for making variable 

// global scope hota hn bahar wla environment or block scope hota hn { iske andr k environment jo yha pe hn }

let e=300

if(true){
    let e=30
    const g=20
    console.log("Inner:",e);
}

console.log(e);

// yha pe Inner wala part block scope ke andar h or bahar wla log part jisme e hn wo global scope hn 

// same variable hn e dono jgh but block scope ka e bahar environment s lena dena ni rkha hn yha pe or global scope wla e apna easily print kr rha hn 

