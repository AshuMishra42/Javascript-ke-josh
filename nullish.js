// nullish coalescing operator (??) : null , undefined 
// iska use isly kiya jata hn kyuki sometimes jb hmlog output me milta hn undefined / null to uske jagah kuch random text generate ho jyega jo hmlog first me likhe ho

let val1;
val1 = 5 ?? 10
console.log(val1);

// first value return krega val1 me 

val1= null??10 
console.log(val1);

// output ayega 10 first value jo hn whi print ho jayega null hn first me but print hoga 10 because null , null ko ignore karke random text generate jo karna hn 

val1=undefined??10
console.log(val1);

// output ayega 10 first value jo hn whi print ho jayega null hn first me but print hoga 10 because null , undefined ko ignore karke random text generate jo karna hn 

// we can declare null as also :-

val1=null ?? 10 ?? 5
console.log(val1);

// output ayega first wala value 10 

// Ternary operator :-

// syntax : condition ? true : false use kare 

const iceteaprice= 100
iceteaprice>=80 ? console.log("less than 80") : console.log("more than 80"); 

// output => less than 80