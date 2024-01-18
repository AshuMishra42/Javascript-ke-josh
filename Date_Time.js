//                                                              DATES AND TIME IN JAVASCRIPT

let myDate= new Date()
console.log(myDate);

// This gives current date  and time now and it gives output ( 2024-01-18T14:35:04.236Z ).
// Methods of Strings

console.log(myDate.toString());

// by using string methods here now we are converting to string form and now it gives this output time , date and time zone (  Thu Jan 18 2024 20:05:04 GMT+0530 (India Standard Time) )

console.log(myDate.toISOString()); 

// 2024-01-18T14:35:04.236Z it gives this type of output.

console.log(myDate.toJSON());

// 2024-01-18T14:43:20.892Z it gives this type of output.

console.log(myDate.toLocaleDateString());

// It gives current date in output. (18/1/2024) here we get only date

console.log(myDate.toLocaleString());

// It gives current date and time in output. (18/1/2024, 8:17:19 pm).

console.log(myDate.toLocaleTimeString());


// It gives current Time in output. (8:20:15 pm) here we get only Time 

console.log(myDate.toTimeString());

// It gives specific time and zone . (20:22:29 GMT+0530 (India Standard Time)).

console.log(myDate.toUTCString());

// IT also gives current day , date , time and zone (Thu, 18 Jan 2024 14:55:12 GMT).

console.log(typeof myDate);

// here we get data type i.e object myDate is atype of object.

// Now we want to put an particular date then we declare in this way:-

let mycreatedDate=new Date(2023,0,22)
console.log(mycreatedDate);

// Here time and date get the output (2023-01-21T18:30:00.000Z)

let mycreatedDate1=new Date(2023,0,22)
console.log(mycreatedDate1.toDateString());

// day and date get the output (Sun Jan 22 2023).

// If we want to add time with date then we can easily do it . 

let mycreatedDate2=new Date(2023,0,22,5,3)
console.log(mycreatedDate2.toLocaleString());

// Here it gives the output (22/1/2023, 5:03:00 am)

// Agr hmlog chhahhe to date, month , year apne decide wale format me dena chhahe to easily de skte hn 

let mycreatedDate3=new Date("2023-01-20")
console.log(mycreatedDate3.toLocaleString());

// agar hmlog 00 dalte hn to invalid btayega pr hamne dekha yha p ki phle 0 dalne pe january aa rha tha pr yha jb 00 dale to january ni liya 
// kyuki 0 single digit me array me starting index ko [0] me dalte hn or january bhi 1st first month hota hn mhine ka thats why that time shi bta rha tha 

// Now hmlog sikhege timestamp bnane :- 

const myTimestamp=Date.now()
console.log(myTimestamp);

// This gives milli-Second value of time and when we want to find exact time stamp ka value search krenge tb like quiz decide , hotel booking,
// poll searching / game designing jisme faster booking kiya allot hoga .


console.log(mycreatedDate3.getTime());

// particular date me time compare karta hn through this method 1674172800000

// And  if  we want to convert from milisecond to second then we use this method 

console.log(Date.now()/1000);
//  when we divide with 1000 then it is easily converted into second . but we get that some floating value (1705594348.929) comes so means to remove we usethis method in this ways

console.log(Math.floor(Date.now()/1000));

// Now it is easily converted from milisecond into second and no decimal value comes and give this output (1705594348)

// Some more methods are also available :- 

let newDate= new Date()
console.log(newDate);

// here it gives output like this (2024-01-18T16:17:18.659Z) this gives current date 

console.log(newDate.getMonth());

// output (o) means january 

console.log(newDate.getDay());

// output (4) [Sunday,monday,tuesday,wednesday,thursday,friday,saturday and their indexing is 0,1,2,3,4,5,6] and today is thursday so it gives (4)

console.log(newDate.getDate());

// same output (18)