//                                                               FUNCTION_PART02

// shopping card details me hmlog jb v bht sare products add karte hn to bnate hn through function

function calculatecartprice(...num1){
    return num1
}

console.log(calculatecartprice(200,));

// value return kr de rha hn because hmlog value 200 pass kr de rhe hn 

console.log(calculatecartprice(200,440));

// do values pass kr rhe hn to num1 me 1 hi value pass hua starting wala is trike se


console.log(calculatecartprice(200,440));

// so we have to use rest operator =...num1 ( 3 dot operator k use karte hn multiples value ko add karne ke liye) yha jake achhe se dono values print hoga 

function calccartprice(value1,value2,...num1){
    return num1
}

console.log(calccartprice(200,400,500,1000)); // print yha sirf [500,1000] hua because num1 pe yhi dono values pass hua hn yha p 

const user={
    name: "ankush",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price} `);
}

handleobject(user)

// Sara values k key name properly check hota hn.
// default value lgane ka mn ho to
// yha hamne function ko use kiya within help of  object

handleobject({
       name:"sam",
       price: 189
})


// yha pe hamne function ka use kiya within the help of object 

const mynewarray=[200,300,400,500]
function returnsecond(getarray){
    return getarray[1]
}

console.log(returnsecond(mynewarray)); // => output shown be like = 300

// yha pe hmlog apna default values bhi dal sakte hn 

console.log(returnsecond([100,200,300,400])); // => output shown = 200