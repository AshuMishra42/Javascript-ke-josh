// We know there are many types of string ethod present in string 

let gameName = "hitesh kumar"

console.log(gameName[0]);

// by the helop of string key value pairs we can acess the value of index  (hiteshkumar)

// Now we are going to see how to access methods in string :-

console.log(gameName.length);

// . length is used to find length of string


console.log(gameName.toUpperCase());

// toUppercase is used to convert the string in upper case

console.log(gameName.toLowerCase());

// tolower case is used to convert the string into lower case format

console.log(gameName.charAt(1));

// this charAt() METHOD IS USED TO FIND at  a particular index no. which one of the chararcter is present.


console.log(gameName.indexOf("s"));

// this method indexof is used to find at a particular character what is the index no. , the character  must should be written in the form of string by the help of double quotes and single quotes

console.log(gameName.substring(2,4));

// This function has the same syntax as slice() This method selects the part of a string and returns the selected part as a new string. Start and end parameters are used to specify the extracted part. The first character starts with index 0. 
// BY the help of substring method we are split our string into two parts here we have to mention the start no and end no in () start means where we have to start the string and end number means kha tk no. select krne k baad string ko split krna hn 
//avaScript substring() different results of substring()
//If start > stop, then the function swaps both arguments.
//If any argument is negative or is NaN, it is treated as 0.

let anothernae = "Ankush_mishra"

console.log(anothernae.slice(1,5));

//This method selects the part of a string and returns the selected part as a new string. Start and end parameters are used to specify the extracted part. The first character starts with index 0. 
//If start > stop, This function will return an empty string. (“”)
//If the start is negative, It sets char from the end of the string, like substr().
//If stop is negative, It sets stop = string.length – Math.abs(stop) (original value)

  let newone = " ashu-umis-hra "
 console.log(newone);
 console.log(newone.trim());

 // this trim method is used to remove extra spaces from word to quotes which is present is given string "  ashuumishra ".

 const url="https://hitesh.com//histesh%20choudhary"

 console.log(url.replace('%20','_'));

 // Here we are using replace method and we see that easily  we replace %20 with _  sign .

 console.log(newone.includes("mishra"));

 // includes mehod is used to find a aprticular string h ki ni hmare actual string m 
let shibbu = "Ankush-kumar-Mishra"
 console.log(newone.split(" - "));

 // here split method is used to convert string into array on the basis of something " - "