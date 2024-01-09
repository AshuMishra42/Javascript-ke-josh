"Use strict"; /* Treat all javascript code a s newer version of code 

 alert(3+3)  we are using node js , not browser

 types of datatypes:- 
1. Primitive data types-

 Number => 2 to power 53
 String => string ko hmlog double quote or single quote me likh sakte hn hmlog
 Boolean => boolean return type deta hn yes or No me 
 Symbol => unique value 
 BigInt
 null => null means not 0 example jb weather forcasting m problem aa jta h to unke trf s weather temperature 0 n deke null diya jata hn because 0 dega to 0 bhi ek value of temperature hn
 undefined => define nhi kiya hua value ko undefined bolte hn hmlog

 2. Non - primitive data types-

 Array => object
 Object => object
 Function => return type object Function hota h
 */ 

 let number = 212121
 let ashu = "kumar"
 let piku = "yes"
 let vishwas = Symbol("23231")
 let kushh = 878765543n
 let krishh = null
 let suru = undefined 
 
 //  We can see  the desired output by two ways :- 

 console.log(number);
 console.log(ashu);
 console.log(piku);
 console.log(vishwas);
 console.log(kushh);
 console.log(krishh);
 console.log(suru);


 console.table({number,ashu, piku,vishwas,kushh,krishh,suru})


// 2. Non- Primitive:-

// Example of Array writing 

 let shuru = [ "Ashoak , kumar, Ashish"];

// Exammple of object writing 

let abhishek = {
    naem : "Tiwari", 
    class : "6" ,
    School : " Saraswati Shishu Mandir Shyamdih"
}

// Example of Function writing 

let myfunction=function(){
    console.log("Hello world");
}

console.log(shuru);
console.log(abhishek);
console.log(myfunction);

console.table([shuru, abhishek, myfunction]);








