let scorei = 33
console.log(typeof scorei);


// Here we are getting ooutput = number 

let score = "33"
console.log(typeof score);
let  valueinNumber = Number(score)
console.log(valueinNumber);
console.log(typeof valueinNumber);


// Here we see that in value of score = "33" it is in string form and we convert from string to number // conversion is sucessfully

let score1 = "33abc"
console.log(typeof score1);
let  inNumber = Number(score1)
console.log(inNumber);
console.log(typeof inNumber);


// Here we see that in value of score1 == "33abc" it is in string form and we convert from string to number // conversion is sucessfull
// Here we see value of inNumber = Nan because ("33abc") and finally we get type of inNumber= Number sucessfully.


let score2 = null
console.log(typeof score2);
let  iinNumber = Number(score2)
console.log(iinNumber);
console.log(typeof iinNumber);

// Here we see that in value of score2 == null it is in object form and we convert from null to number // conversion is sucessfully
// Here we see value of iinNumber = 0 because (null) and finally we get type of iinNumber= Number sucessfully.

let score3 = undefined
console.log(typeof score3);
let  iiinNumber = Number(score3)
console.log(iiinNumber);
console.log(typeof iiinNumber);

// Here we see that in value of score3 == undefined it is in undefined form and we convert from undefined to number // conversion is sucessfully
// Here we see value of iiinNumber = NaN because (undefined) and finally we get type of iiinNumber= Number sucessfully.

let score4 = true
console.log(typeof score4);
let  iiiinNumber = Number(score4)
console.log(iiiinNumber);
console.log(typeof iiiinNumber);

// Here we see that in value of score4 == true it is in Boolean form and we convert from Boolean to number // conversion is sucessfully
// Here we see value of iiiinNumber = 1 because (true) and finally we get type of iiiinNumber= Number sucessfully.

let score5 = false
console.log(typeof score5);
let  iiiiinNumber = Number(score5)
console.log(iiiiinNumber);
console.log(typeof iiiiinNumber);

// Here we see that in value of score5 == false it is in Boolean form and we convert from Boolean to number // conversion is sucessfully
// Here we see value of iiiiinNumber = 0 because (false) and finally we get type of iiiiiinNumber= Number sucessfully.

let score6 = "hitesh"
console.log(typeof score6);
let  iiiiiinNumber = Number(score6)
console.log(iiiiiinNumber);
console.log(typeof iiiiiinNumber);

// Here we see that in value of score6 == hitesh it is in string form and we convert from string to number // conversion is sucessfully
// Here we see value of iiiiiinNumber = 0 because (false) and finally we get type of iiiiiinNumber= Number sucessfully.

let isLoggedin = 1
console.log(typeof isLoggedin);
let  iiiiiiinNumber = Boolean(isLoggedin)
console.log(iiiiiiinNumber);
console.log(typeof iiiiiiinNumber);

// Here we see that in value of isLoggedin == 1 it is in No. form and we convert from no. to Boolean // conversion is sucessfully
// Here we see value of iiiiiiinNumber = true because (1) and finally we get type of iiiiiiiinNumber= Boolean sucessfully.

// => " " - output will be false (Boolean form )