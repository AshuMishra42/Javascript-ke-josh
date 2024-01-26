//                                                      Immediately invoked function expression (IIFE)

// example :  ek file turant database se kaise connect ho jata hn application start hua or turant database se connect ho jata hn wo IIFE se connect ho jata hn 

function chai(){                   // function definition 
    console.log(` DB Connected `);
}

chai() // function call
console.log(chai());

// normal function 

// agar IIFE use karna ho to function call me se  chai () me se chai ko mita denge 

(function coffee(){
    console.log("ankush");
})();

// is trike se hmlog bina function call kiye hue IIFE ka codes run kar lenge  hamlog

// ()() => first bracket is for execution call and another bracket is for function definition 

// global scope ke pollution se problem hoti hn kai baar pollutant se htane ke liye isly IIFE ka use karte hn hmlog 

// hmlog arrow function use kar sakte hn kya IIFE se

( ()=>{
 console.log("hello user");
}) ();

// yha error aayega kuki IIFE invoke to ho gya hn but abhi tk isko pta ni hn ki context ko rokna kha tk hn isly javascript ko and karne ke liye hmlog function ko end karege  previous iife function ke last me ; lga denge 

( function aurcode() {
        console.log("ashu1");


})();

// yha bhi error ata pr aya ni kyuki hmne previous function ko ; se rok diya hn 

// whn we try to pass value in an IIFE function 

((name)=>{
 console.log(`DB CONNECTED ${name}`);
})("anshuman")

// hmlog is trike se pass kar sakte hn values in a IIFE function 