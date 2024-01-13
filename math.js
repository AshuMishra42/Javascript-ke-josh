
 console.log(Math);
 // it is a boject type

 console.log(Math.abs(-4));

 //.abs methods is only used to covert from egative value to positive not positive to positive/ negative .

 console.log(Math.round(4.6));
 console.log(Math.round(4.4));

 // here we are doing round off a value  we know if value after decimal greater than 5 then +1 in actual no. or if the value after decimal less than 5 then -1 in original no.
 
 // If we want to control ownself to roundoff then we have to use ceil or floor method 

 console.log(Math.ceil(4.2));

 // by using ceil method always it gives +1 value to its original value 

 console.log(Math.floor(4.9));

 // by using ceil method always it gives -1 value to its original value 

 console.log(Math.min(4,3,6,8));

 // IN math method gives inimum value of a given array 

 console.log(Math.max(4,3,6,8));

 // IN math method gives inimum value of a given array 

 console.log(Math.random());

 // when we use random method then it gives random value from between 0 to 1 

 console.log(Math.random()*10+1);

 //  By using these the output always giving in the form of 1 or greater than  1 


 console.log(Math.floor((Math.random()*10)+1));

 // floor means lowest value choose

 const min = 10 
 const max = 20 
 
 console.log(Math.random()*(max-min+1)+min );