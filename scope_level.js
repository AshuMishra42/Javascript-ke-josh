// DOM = KESE HTML PAGES KO MANIPULATE KARTE HN HAMLOG THROUGH THE HELP OF JAVASCRIPT .

// NESTED SCOPE :-

function one(){
    const username= "ankush"
    function two(){
        const website="youtube"
        console.log(username);
    }
  // console.log(website);        // yha pe problem create hoga bolega website is not defined hm jante hn ki block scope k andr k variable bahar me use ni kar payenege
    two()
}
one()

if(true){
    const name="ankush"
    if(name==="ankush"){
        const website1= "youtube1"
        console.log(name + website1);
    }
    //console.log(website1); // problem again create ho jyega yha pe kuki website1 ko bahar me use ni kar sakte hn 
    console.log(name); // agar isse bahar likh de kaam ni kerga but yha easily output milega 
}

function addone(num){
    return num+1
}

console.log(addone(7)); // easily output ayega 8 // agr isi part ko means function call ko upr kr de to bhi easily run krega 

// same is chiz ko alg trika se bhi kar  skte hn or implement bhi kar skte hn 

const addtwo= function addtwo(num){
    return num+2
}

console.log(addtwo(19)); // easily run hoga or output 21 ayega hmne bs function ko ek variable me store kra diya hn

console.log(addtoo(19)); // functuin call ko agr upr bhi likh de chlega but agr hmne function ko kisi variable me store kraya ho to function call part ko upr ni likha ja skta hn tb 
const addtoo= function addtoo(num){
    return num+3
}

// THIS IS THE CONCEPT OF HOSTIC ( MATLB FUNCTION KO KAISE DECLARE krna hn , kha rkha jata hn information , execution context kya hn , variables ko kaise read krta hn function final tree kaise bnta hn )

