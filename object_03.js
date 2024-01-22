//                                                     Part of js

const course={
    name: 'javascript',
    price: '999/-',
    Instructor: 'Ankush kumar Mishra '
}

console.log(course);
console.log(course.Instructor); // show Ankush Kumar Mishra in output

const{Instructor}=course
console.log(Instructor);  // another way to find value of particular key of an object

const{Instructor: Instruct} = course
console.log(Instruct); // it gives same output agra instructor naaam bda le to hm modify is trike se kar sakte hn 

// this concept related to  react js which i will be explained 

const navbar=({company})=> {

}
 navbar(company="ankush")

 // API = jb bhi ham apne kaam pe thopna chhahte hn use APPI kehte hn like restuarant ka menu card hm order dete hn hme srf mtlb hn timely food mile 
 // food kha pe bna kon bnaya not required to know example like google form fill up krte hn we dont need to think google person ko verify kaise krta hoga 

 // Appi ke liye values hmme pehle backend se milta tha / xml se bhi milta hn / Ab JSON milta hn 

 // declairing JSON IN MANY WAYS 

 {
    "namme": "Ankush",
    "course": "js",
    "location": "gujrat"
 } 
  //  JSON ko hmlog keys ko vi string form me hi likhte hn or y same object jaisa bhi bna k likh skte hn  starting , ending dono bracket s hoga  { }

  // JSON arry ke form me bhi milta hn examples

  [
    {},
    {},
    {}
  ]

  