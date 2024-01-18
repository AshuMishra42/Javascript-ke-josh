let marverl_heroes=["thor","spiderman","bheem","Ironman"]
let dc_heroes=["Ankush", "satyam","vikash","saurav"]

marverl_heroes.push(dc_heroes)
console.log(marverl_heroes);

// Array ke andr array aa j rha hn hmlog soche th ki dono array add hoga but aesa hua ni hn array koi bhi data le leta hn 
// yha p v aise hi le liya input array ko array ek single element smjh k input le liya hn 

//particular value ko find krna ho through indeing to aese krege 

console.log(marverl_heroes[4][3]);

// Then it easily gives the answer value = saurav 

// by using concatenation we can able to add two array easily 

let new_heroes= marverl_heroes.concat(dc_heroes)
console.log(new_heroes)

// by help of concatenation we are able to add two arrays but currently mostly used spread operator:-

let all_heroes=[...marverl_heroes,...dc_heroes]
console.log(all_heroes);

// it also adds two or more than two given array 

// agr aes rhe to array ke andr or hm chhahte hn sare elemnts ko normally ek array me dekhna to aese karege 

const another_array=[1,2,3,4[5,6,7],8,9,10,[11,12,13,],14,15[16]]
const real_array=another_array.flat(Infinity)
console.log(real_array);

//Questioning array :-

console.log(Array.isArray("ankush")); // answer gives false because it is in the form of string 

console.log(Array.from("Ankush")); // now it is easily converted into array

console.log(Array.from({name:"ankush"})); // it gives [] blank array because pta hi ni chl rha hn kis key pair ko array bnayege 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));  // output shown be like this [100,200,300] of() method returns a new array from  a set of elements 
