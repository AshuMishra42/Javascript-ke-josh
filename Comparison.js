// Normal Comparison of values basis on datatypes:-

console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2>=1);
console.log(2<=1);
console.log(2!=1);

// when comparison between string and number datatype:- we get same output because in this case the compiler conert string into number then comparison takes place between number's. 

console.log("2">1);
console.log("2"<1);

// Comparison on the basis of null datatype: only one timeoutput will be high because null is nothing not greater than 0 not less than 0 and not equal to 0

console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(null<=0);
console.log(null!=0);

// Comparison on the basis of Undefined datatype:- every time result will be false

console.log(undefined >0);
console.log(undefined ==0);
console.log(undefined >=0);
console.log(undefined <=0);
console.log(undefined !=0);

// In the case of strict check (===) => here comparison takes place on the basis of operator and also datatypes

console.log("2"===1);