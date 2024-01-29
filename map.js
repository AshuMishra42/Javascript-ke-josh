// map => ye map data type jane jate hn apne unique values ke liye 

/*
array jaisa hi hota hn basically andr ka value iterate hota hn 
*/

const map= new Map()
map.set('IN','india')                                // set method is used to set the values
map.set('USA',' United states of America ')
map.set('Fr','France')

console.log(map);

/*
output=> isme sara key or value aayega output me

Map(3) {
  'IN' => 'india',
  'USA' => ' United states of America ',
  'Fr' => 'France'
}

*/

const map1= new Map()
map1.set('IN','india')                                // set method is used to set the values
map1.set('USA',' United states of America ')
map1.set('Fr','France')
map1.set('IN','india')  

console.log(map1);

/*

output=>
Map(3) {
  'IN' => 'india',
  'USA' => ' United states of America ',
  'Fr' => 'France'                              // ye unique value deta hn india 4 baar v likha hoga to 4 baar output me ni ayega 
}                                               // Output me unique values print karega

*/

// map pe bhi loop lga skte hn 

for (const key of map) {
    console.log(key);
}

/*

output=>
[ 'IN', 'india' ]
[ 'USA', ' United states of America ' ]
[ 'Fr', 'France' ]                               //  output array ke form  me milega , values agar alag alag chhahiye to shortcut use karna hoga 

*/

for (const [key,value] of map) {
    console.log(key,':-',value);
}

/*
output=>
IN :- india
USA :-  United states of America
Fr :- France

*/

const myobject={
    game1:"bike-racing",
    game2:"car-racing",
    game3:"truck-racing"
}

for (const [key,value] of myobject) {
    console.log(key,':-',value);
}

// this code is not working because we know in the case of object for-of loop is not actively participated and in output section = myobject is not iterable