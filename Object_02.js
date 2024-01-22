// Singelton => const tinderuser= new object ()

// Object literal 

const tinderuser={}
tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIN= false

console.log(tinderuser);

// Here are some examples of nested object concept: 

const regularuser ={
    email: "ankushmishra486@gmail.com",
    fullname: {
                 userfullname: {
                    firstname: "ankush",
                    lastname: "mishra"
                 }
    }
}

console.log(regularuser);
console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname);
console.log(regularuser.fullname.userfullname.firstname);
console.log(regularuser.fullname.userfullname.lastname);

// when we wants to combine objects: 

const obj1={
    1: "a", 2: "b"
}
const obj2={
    1: "a", 2: "b"
}

const obj3= (obj1,obj2)
console.log(obj3);  // but it is not a correct way to combine two or more objects 

const obj4=Object.assign({},obj1,obj2)
console.log(obj4);  // It is another way to combine two or more objects

const obj5={...obj1,...obj2}
console.log(obj5);   // it is the easy way to combine two or more objects by spread operator.

const users=[{},{},{}]
users[1].email

console.log(Object.keys(tinderuser)); // sara  keys k name  jo ki tinderuser me save hn wo show hone lgega

console.log(Object.values(tinderuser)); // sara values key k show hoga

console.log(Object.entries(tinderuser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIN', false ] ] is type se output dikhega

console.log(tinderuser.hasOwnProperty('isLoggedIN')); // y btata hn ki is naam k key hn ki ni particular object me 