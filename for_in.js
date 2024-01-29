const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myobj) {
   console.log(key);
}

/*
output=>
js
cpp                   // sara key print hoga 
rb
swift

*/

for (const key in myobj) {
    console.log(myobj[key]);
 }

 /*
output=>
javascript
c++                      // sara values print ho jayega 
ruby
swift by apple

 */


for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
 }

/*
output=>
js shortcut is for javascript
cpp shortcut is for c++
rb shortcut is for ruby
swift shortcut is for swift by apple

*/

const programming=["java","puthon","javascript","css","html"]
for (const key in programming) {
       console.log(key);
}

/*
output=> here it gives index value 
0
1
2
3
4
*/

const programming1=["java","puthon","javascript","css","html"]
for (const key in programming1) {
       console.log(programming1);
}

/*
output=>
[ 'java', 'puthon', 'javascript', 'css', 'html' ]
[ 'java', 'puthon', 'javascript', 'css', 'html' ]
[ 'java', 'puthon', 'javascript', 'css', 'html' ]
[ 'java', 'puthon', 'javascript', 'css', 'html' ]
[ 'java', 'puthon', 'javascript', 'css', 'html' ]   array ke form me is trike se save ho rha hn 

*/

const programming2=["java","puthon","javascript","css","html"]
for (const key in programming2) {
       console.log(programming2[key]);
}

/*
output=> sara values easily print hoga 
java
puthon
javascript
css
html

*/

const map= new Map()
map.set('IN','india')                                // set method is used to set the values
map.set('USA',' United states of America ')
map.set('Fr','France')

console.log(map);

for (const key in map) {
   console.log(key);
}

// kuch error ni ayega ar na hi output ayega because map is not iterable .