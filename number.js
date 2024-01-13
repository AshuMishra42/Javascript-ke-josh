const score=400
console.log(score);

// in this output gives only 400 normally

const balance= new Number(score) 
console.log(balance);

// in this output shows [Munber:400] it specifies 400 is a type of number both output  defines same thing but by using new keyword and number converting it specifies the type of output we getting 

console.log(balance.toString());

//By using the method name as tostring we are simply converting the number into string .

console.log(balance.toString().length);

// nu converting number into string we are using the all  methods of string .

console.log(balance.toFixed(1));

// by using this to fixed method we are putting decimal value in argument we have to pass some value output shown be like 
// tofixed(3 ) => 400.000
// tofixed(2 ) => 400.00
// tofixed(1 ) => 400.0  

const othernumber = 23.3854
console.log(othernumber.toPrecision(3));

// by using the number method to precison it simply +1 the value which we are putting.

const hundreads = 1000000
console.log(hundreads.toLocaleString());

// by using this method we are simply converting the value 1000000 into indian format so no. can be easily readable 