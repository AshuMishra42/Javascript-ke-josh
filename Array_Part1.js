//                                                        ARRAY IN JAVASCRIPT PART (1)



const myArr=[0,1,2,3,4,5,7]
console.log(myArr);

// Then it easily display values containg myArr {0,1,2,3,4,5,7}. 

const mysuperheros =["bheem","hanuman","ben 10","Oggy and Cockroaches","Mr. Bean"]
console.log(mysuperheros);

//it simply display values of array mysuperheroes = ["bheem","hanuman","ben 10","Oggy and Cockroaches","Mr. Bean"]

// when we want to find  at a particular indexing which value is inserting 

const mysuperheros1 =["bheem","hanuman","ben 10","Oggy and Cockroaches","Mr. Bean"]
console.log(mysuperheros1);
console.log(mysuperheros1[4]);

// by this we get output [mr. bean ]

// when we wants to add values in array then we have to use push () method

mysuperheros1.push(6);
console.log(mysuperheros1);

// now 6 easily adds in the array name mysuperheroes1 = [ 'bheem', 'hanuman', 'ben 10', 'Oggy and Cockroaches', 'Mr. Bean', 6 ]

// when we wants to delete values in array then we have to use pop () method and if we only use pop ()then it simply start removing from last index 


mysuperheros1.pop();
console.log(mysuperheros1);

//[ 'bheem', 'hanuman', 'ben 10', 'Oggy and Cockroaches', 'Mr. Bean' ] then it simply remove the value 6 in array 

mysuperheros1.pop(2);
console.log(mysuperheros1);

//[ 'bheem', 'hanuman', 'ben 10', 'Oggy and Cockroaches' ] its remove MediaRecorder.bean same output when no use of arguement .

// when we want to add values in first index then use unshift method ()

mysuperheros1.unshift(4);
console.log(mysuperheros1);

// here we get this type of output [ 4, 'bheem', 'hanuman', 'ben 10', 'Oggy and Cockroaches' ]it simply add arguement value in first index of an array .

mysuperheros1.shift();
console.log(mysuperheros1);

// It simply  remove the shifted element value.

// Questioning type Array :- like what data type it gives 

console.log(mysuperheros1.includes('bheem'));;

// It simply check value is present or not inside an array it gives boolean values like true or false.

console.log(mysuperheros1.indexOf(5));

// it simply gives no. as an output if arguement value is not present in array then it simply gives -1 value 

console.log(mysuperheros1.indexOf("bheem"));

// when it finds arguement as a valid element which is available in array then It simply gives its inddex value as an output

/* now we are converting an array into string */

const newArr1=myArr.join()
console.log(myArr);

// [0,1,2,3,4,5,7]

console.log(typeof newArr1);

// It gives string as an output 

console.log(newArr1);

// 0,1,2,3,4,5,7 it give same element but in string form not an arrary form 

/* Slice () method  or splice () method */ 

console.log("A",myArr);

// output be like this :-["A", 0,1,2,3,4,5,7]

const myN1=myArr.slice(1,3);
console.log(myN1);

//[1,2]

// It simply gives this value [1,2] remove 3 and count start from 1 to 2 

const myN2=myArr.splice(1,3);
console.log("B",myArr);
console.log(myN2);

// output as B [ 0, 4, 5, 7 ] original array me change la deta hn or argument wale index ko remove kr deta hn ar jb hm new array ko print krte hn remove wale array ko show karta hn 
// [ 1, 2, 3 ] 