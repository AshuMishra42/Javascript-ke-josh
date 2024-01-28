
const ifuserloggedIN= true

if(true){
    console.log("executed");
}

// yha ye statements run hmesa hoga condition always true hoga yha pe 

// comparison operator =>  2 == "2"
//                         < , > , <= , >= , == , === (strict equal) , != ( not equal to ) we can apply all operator in condition 

const temporary= 42
if (temporary<50){
    console.log(temporary)
}

 console.log(`temp is less than 50 `);

/*else{
    console.log(`temp is greater than 50`);
} */ 

// yha kaam hua but sath me extra staement bhi run ho jayega 
 
let tempo= 40
if( tempo===40 ){
    console.log("number is equal to 40");
}
else{
    console.log("tempo is greater than 50");
}

// output => number is eeaual to 40 

const score=200
if(score=>100){ 
      const power="fly"
      console.log(`user power on : ${power}`);
}
else{
    console.log(`user power: ${power}`);
}

// output => user power: fly , { } => agar scope ni denge to run nhi  hoga because block scope ke andar power define tha . 

const balance=1000
if(balance > 500){
          console.log("test");
}
else{
    console.log("testone");
}


if(balance > 500) console.log("ankush");

// single statement print krane ke liye scope  { } ka need ni hn easily run hoga 
    
if(balance > 500) console.log("kushh") , console.log("mishra");

// ye syntax bhi run ho jyega but ye bhut hi unreadable code format me hn is trike ka code use ni krna chhahiye

// Nesting if else use karte hn hmlog ab

let value =10000
if( value < 500 ){
    console.log("less than 500");
}
else if( value < 750 ){
    console.log("less than 750");
}
else if(value <5000 ){
    console.log("less than 5000");
}
else if(value < 8000 ){
    console.log("less than 8000");
}
else{
    console.log("greater than 8000");
}

// Real life example :- 

const userIN= true
const debitcard= true
const loogingoogle= false
const loogingmail= true

if(userIN && debitcard){
    console.log("Allow to buy course");
}

if(loogingmail || loogingoogle){
    console.log("user logged IN");
}

