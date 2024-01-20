//                                                             OBJECT PART 1 
 
// We can declare object by the help of literals and constructor

// Singelton => when we are declare object by help of constructor then considered in singelton . obj.create se object create krte hn constructor me


// Object literals 

let mysum= Symbol("key1")
const jsuser={
    name: "ankush",
    age: "18",
    location: "Hyderababd",
    email: "ankush486@gmail.com",
    isLoggedin: "yes",
    lastlogindays:["monday","tuesday","wednesday"],
    [mysum]: "newkey1",
    "fullname": "Ankush Kumar Mishra"
}
 
// we can access object in this way =>

console.log(jsuser.email);
console.log(jsuser.age);
console.log(jsuser.mysum);

// output=> ankushmishra486@gmail.com , 18 , newkey1 ( but mysum is not converted into symbol form it is in the form of string here )

console.log( typeof jsuser["mysum"]);

// it is showing it is in the form of string for converting an symbol form must write key value in [""] bracket  now it is converted into symbol

console.log(jsuser["isLoggedin"]);

// hmlog access do treke se kar skte hn either dot se ya bracket form me daal ke [""].

// hm Chhahe full name ko access karne to [""] ke bina access ni kar skte h example

console.log(jsuser["fullname"]);

// update the values of keys of object:-

jsuser.email="ankush@chatgpt.com";

console.log(jsuser["email"]);

// now our email name get changed easily now it becomes ankush@chatgpt.com

//Object.freeze(jsuser) // By this feature we are able to lock our object no updation will take plavce now 

jsuser.email="ankush@microsoft.com";

console.log(jsuser["email"]);

// here our object is getting freezed no updation will now happen .

// To add function in object :-

jsuser.greeting= function(){
    console.log("hello js user, my name is ankush");
}

console.log(jsuser.greeting);  // output shown as undefined previously we are freezed the object so now we have to unlock the object named as jsuser

console.log(jsuser.greeting());

jsuser.greetingTwo= function(){
    console.log(`Hello JS user , ${this.name}`);
}

console.log(jsuser.greetingTwo());

console.log(jsuser);  // when we print the all values of jsuser then it clearly shows mysum is being symbol and show this  [Symbol(key1)]: 'newkey1'

Object.freeze(jsuser) // By this feature we are able to lock our object no updation will take plavce now 