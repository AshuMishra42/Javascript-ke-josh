// This keyword = current context

const user={
    name: "ankush",
    price: 231,
    welcomeMessage: function(){
        console.log(`${this.name} welcome to the website !`);
        console.log(this)
    }
    
}

user.welcomeMessage() // ankush welcome to the website ! in output shown below this is our normal function 

// context matlab values 

user.name= "sam"
user.welcomeMessage()

// if we want to modify values in a  function then by this we can do 

console.log(this);  // let check kya dikhega output me to hame ye dikhega = {} agar hmlog is chiz ko bahar declare karenge to , ar this keyboard ko andar declare kre to milega hamme ek pura object. 

function chai(){
    let usersubh= "amit"
    console.log(this);
    console.log(this.usersubh);
}

chai()  // function call hoga tab  this wla line me random text generate hoga 

// Current context jo hn yha pe kaam ni karta hn because ye object pe kaam krega sirf function pe ni karega 

// arrow function :-

const hai=function(){
    let usernam="sukesh"
    console.log(this.usernam);  // This is an example of normal function .
}

// This is an example of arrow function .

let arr= ()=> {
    let usernam="sukesh"
    console.log(this.usernam);
}

// arrow function ke andar this use karege regular function ke andar use hoga
// function keyword remove kar denge aur ()=> {  } [ Basic syntax ].
// Variable me store kar sakte the 

const addtw= (num1,num2)=> {
        return num1+num2
}

console.log(addtw(3,4));

// easily we use arrow function 

// Implicit return => {} hta denge aur agr 1 line ka sentence ho to return keyword likhne ka need ni hota hn 

let addd= (num3,num4)=> num3+num4

console.log(addd(3,9));

// {  } = isme code wrap kare to return keyword likhna hoga 

// (num1+num2) (  ) => brackets use agr kiye to return keyword use ni karege

let adddd= (num5,num6)=> ( num5+num6 )

console.log(adddd(8,5));

// explicit return => return keyword ka use karte hn hm isme 

// suppose object return karna pade to 
let addthree= (num7,num8) => { username="ankus" }

console.log(addthree(3,7));

// output me undefined aayega object return karne ke liye () me wrap krna hoga 

//const myarray=[2,5,7,9,11]  discuss later 
//myarray.forEach()=> ()
