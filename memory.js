// we know basically there are two types of memory in javascript [ heap and stack ]

// 1. For primitive data types use only stack memory

let youtube= "Ankush kumar Mishra"

let anothercahnnel= youtube

anothercahnnel= "Diploma Academy"

console.log(anothercahnnel);
console.log(youtube);

// Here we get the output =  diploma academy because in the case of stack  we get an only copy of original item ahd we performed the operation in copy of the orignal item no change in the orignal item  

// 2. For Non- primitive data types use only heap memory 

let userone= {
    email: "ankushmishra@gmail.com",
    mobile: 7326660000
}

let usertwo= userone;

usertwo.email="sukesh@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

// Here we get the output =  sukesh@gmail.com because in the case of heap  we get an refernce of original item ahd  we performed the operation in  orignal item so change's happens  in the orignal item  directly
