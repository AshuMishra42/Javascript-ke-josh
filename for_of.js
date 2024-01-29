//   For_of loop:-

// [" "," "," "," ",] => array ke andar strings declare hn .

// [{ },{ },{ },{ }] => array ke andar objects declared hn or har iterations ke baad array se kuch variables nikalni hn .

// Loop lga ke object ke andar jake . dot notation ya square notation lga kr value nikal lenge 


/* for (const iterator of object) {    syntax of for of loop: here iterator = iterator ke jagah intialization wala variable lgana hoga 
                                       object ke jagah = variable means loop kha lgana hn array pe ya kha kha pe
} */

const arr=[1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
}

/* output =>
1
2
3
4
5
6
*/

const greetings="hello world"

for (const greet of greetings) {
            console.log(greet);
}

/*
output=> 
h
e
l
l
o

w
o
r
l
d
*/

const greetings2="hello world"

for (const greet of greetings2) {
            console.log(greetings2);
}

/*
output=>
hello world
hello world
hello world
hello world
hello world
hello world
hello world
hello world
hello world
hello world
hello world
*/

let greeting="ankush kumar"
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
}

/*
output=>
each char is a
each char is n
each char is k
each char is u
each char is s
each char is h
each char is
each char is k
each char is u
each char is m
each char is a
each char is r
*/

let greeting1="ankush kumar"
for (const greet of greeting1) {
    console.log(`each char is ${greeting1}`);
}

/*
output=>
each char is ankush kumar
each char is ankush kumar
each char is ankush kumar
each char is ankush kumar
each char is ankush kumar
each char is ankush kumar
each char is ankush kumar
each char is ankush kumar
each char is ankush kumar
each char is ankush kumar
each char is ankush kumar
each char is ankush kumar
*/