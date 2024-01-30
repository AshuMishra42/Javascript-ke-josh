// object ke upr loop lgane ke liye hmlog use karege = for_in Loop
// array ke upr loop lgane ke wkt generally use karege = for_of Loop

/*
coding.forEach( function () )
                          |
              calbackfunction :value :string 
                          |
yha pe function likhege without name ka sirf parenthesis pass hoga ex function () {} parenthesis me key value pass hona chhahiye
*/

const coding=["js","ruby","java","python","cpp"]
coding.forEach(function (item){
    console.log(item);
})

/*
output=>
js
ruby
java
python
cpp
*/

coding.forEach(function (val1){
    console.log(val1);
})

/*
output=>
js
ruby
java
python
cpp
*/

// for each function by the help of arrow function 

coding.forEach((val1) => {
    console.log(val1);
})

// same output milta h 

// normal function me declare karte hn 

function printme(item){
    console.log(item);
}

coding.forEach(printme)

// Same output will be shown in output 

coding.forEach((item,arr,index) => {
    console.log((item,arr,index));
})

/*
output=>
[ 'js', 'ruby', 'java', 'python', 'cpp' ]
[ 'js', 'ruby', 'java', 'python', 'cpp' ]
[ 'js', 'ruby', 'java', 'python', 'cpp' ]
[ 'js', 'ruby', 'java', 'python', 'cpp' ]
[ 'js', 'ruby', 'java', 'python', 'cpp' ]  output in the form of array 
*/

const mycoding=[
    {
        languageName: "javascript",
        filename: "js"
    },
    {
        languageName: "javascript",
        filename: "js"
    },
    {
        languageName: "javascript",
        filename: "js"
    },
    {
        languageName: "javascript",
        filename: "js"
    }
]

// ab ispe iteration hoga 

mycoding.forEach((item) =>{
    console.log(item.languageName);
    console.log(item.filename);
})

/*
output=>
javascript
js
javascript
js
javascript
js
javascript
js
*/