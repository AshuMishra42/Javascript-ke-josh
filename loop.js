// Basic syntax of looping ,  types of loop ( for loop , while loop , do while loop, for-In loop , for-each loop )

/* for (let index = 0; index < array.length; index++) {
   const element = array[index];
   console.log(element);
   
  } output = array is not defined */

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);

}

// Output = 0,1,2,3,4,5,6,7,8,9 ayega for loop lgane pe 

// element ko bahar me print ni krwa ni sakte h kyuki block scope kamissue ho jyega 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best");
    }
    console.log(element);
}

// output = 0,1,2,3,4,5is best,6,7,8,9,10

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop: ${i}`);

}

/*
outer loop: 0
outer loop: 1
outer loop: 2
outer loop: 3
outer loop: 4
outer loop: 5
outer loop: 6
outer loop: 7
outer loop: 8
outer loop: 9
outer loop: 10
*/

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i} `);;

    }
}

/*
 output => 
outer loop: 0
outer loop: 1
outer loop: 2
outer loop: 3
outer loop: 4
outer loop: 5
outer loop: 6
outer loop: 7
outer loop: 8
outer loop: 9
outer loop: 10
Inner loop value 0 and inner loop 0
Inner loop value 1 and inner loop 0
Inner loop value 2 and inner loop 0
Inner loop value 3 and inner loop 0
Inner loop value 4 and inner loop 0
Inner loop value 5 and inner loop 0
Inner loop value 6 and inner loop 0
Inner loop value 7 and inner loop 0
Inner loop value 8 and inner loop 0
Inner loop value 9 and inner loop 0
Inner loop value 10 and inner loop 0
outer loop: 1
Inner loop value 0 and inner loop 1
Inner loop value 1 and inner loop 1
Inner loop value 2 and inner loop 1
Inner loop value 3 and inner loop 1
Inner loop value 4 and inner loop 1
Inner loop value 5 and inner loop 1
Inner loop value 6 and inner loop 1
Inner loop value 7 and inner loop 1
Inner loop value 8 and inner loop 1
Inner loop value 9 and inner loop 1
Inner loop value 10 and inner loop 1
outer loop: 2
Inner loop value 0 and inner loop 2
Inner loop value 1 and inner loop 2
Inner loop value 2 and inner loop 2
Inner loop value 3 and inner loop 2
Inner loop value 4 and inner loop 2
Inner loop value 5 and inner loop 2
Inner loop value 6 and inner loop 2
Inner loop value 7 and inner loop 2
Inner loop value 8 and inner loop 2
Inner loop value 9 and inner loop 2
Inner loop value 10 and inner loop 2
outer loop: 3
Inner loop value 0 and inner loop 3
Inner loop value 1 and inner loop 3
Inner loop value 2 and inner loop 3
Inner loop value 3 and inner loop 3
Inner loop value 4 and inner loop 3
Inner loop value 5 and inner loop 3
Inner loop value 6 and inner loop 3
Inner loop value 7 and inner loop 3
Inner loop value 8 and inner loop 3
Inner loop value 9 and inner loop 3
Inner loop value 10 and inner loop 3
outer loop: 4
Inner loop value 0 and inner loop 4
Inner loop value 1 and inner loop 4
Inner loop value 2 and inner loop 4
Inner loop value 3 and inner loop 4
Inner loop value 4 and inner loop 4
Inner loop value 5 and inner loop 4
Inner loop value 6 and inner loop 4
Inner loop value 7 and inner loop 4
Inner loop value 8 and inner loop 4
Inner loop value 9 and inner loop 4
Inner loop value 10 and inner loop 4
outer loop: 5
Inner loop value 0 and inner loop 5
Inner loop value 1 and inner loop 5
Inner loop value 2 and inner loop 5
Inner loop value 3 and inner loop 5
Inner loop value 4 and inner loop 5
Inner loop value 5 and inner loop 5
Inner loop value 6 and inner loop 5
Inner loop value 7 and inner loop 5
Inner loop value 8 and inner loop 5
Inner loop value 9 and inner loop 5
Inner loop value 10 and inner loop 5
outer loop: 6
Inner loop value 0 and inner loop 6
Inner loop value 1 and inner loop 6
Inner loop value 2 and inner loop 6
Inner loop value 3 and inner loop 6
Inner loop value 4 and inner loop 6
Inner loop value 5 and inner loop 6
Inner loop value 6 and inner loop 6
Inner loop value 7 and inner loop 6
Inner loop value 8 and inner loop 6
Inner loop value 9 and inner loop 6 
Inner loop value 10 and inner loop 6
outer loop: 7
Inner loop value 0 and inner loop 7
Inner loop value 1 and inner loop 7
Inner loop value 2 and inner loop 7
Inner loop value 3 and inner loop 7
Inner loop value 4 and inner loop 7
Inner loop value 5 and inner loop 7
Inner loop value 6 and inner loop 7
Inner loop value 7 and inner loop 7
Inner loop value 8 and inner loop 7
Inner loop value 9 and inner loop 7
Inner loop value 10 and inner loop 7
outer loop: 8
Inner loop value 0 and inner loop 8
Inner loop value 1 and inner loop 8
Inner loop value 2 and inner loop 8
Inner loop value 3 and inner loop 8
Inner loop value 4 and inner loop 8
Inner loop value 5 and inner loop 8
Inner loop value 6 and inner loop 8
Inner loop value 7 and inner loop 8
Inner loop value 8 and inner loop 8
Inner loop value 9 and inner loop 8
Inner loop value 10 and inner loop 8
outer loop: 9
Inner loop value 0 and inner loop 9
Inner loop value 1 and inner loop 9
Inner loop value 2 and inner loop 9
Inner loop value 3 and inner loop 9
Inner loop value 4 and inner loop 9
Inner loop value 5 and inner loop 9
Inner loop value 6 and inner loop 9
Inner loop value 7 and inner loop 9
Inner loop value 8 and inner loop 9
Inner loop value 9 and inner loop 9
Inner loop value 10 and inner loop 9
outer loop: 10
Inner loop value 0 and inner loop 10
Inner loop value 1 and inner loop 10
Inner loop value 2 and inner loop 10
Inner loop value 3 and inner loop 10
Inner loop value 4 and inner loop 10
Inner loop value 5 and inner loop 10
Inner loop value 6 and inner loop 10
Inner loop value 7 and inner loop 10
Inner loop value 8 and inner loop 10
Inner loop value 9 and inner loop 10
Inner loop value 10 and inner loop 10
 
*/

// Multiplication  show 

for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i * j);;
        // Table print hoga 1 to 10
    }
}

// For loop array ke upr kaam karne ka kosis krta hn always 

let heroes = ["superman", "batman", "thor", "thenus"]
for (let index = 0; index < heroes.length; index++) {
    const element = heroes[index];
    console.log(element);
}

// we can see heroes list in output = superman, batman , thor , thenus  

// agar hmlog index++ me se sirf index likhege to y system loop me fs jyega ctrl + c likhna hoga

// break and continue : 

for (let index = 1; index <= 20; index++) {
    console.log(`value i is ${index}`);
    if (index == 5) {
        console.log(`Detected 5`);
    }
}

/*
value i is 1
value i is 2
value i is 3
value i is 4
value i is 5
Detected 5
value i is 6
value i is 7
value i is 8
value i is 9
value i is 10
value i is 11
value i is 12
value i is 13
value i is 14
value i is 15
value i is 16
value i is 17
value i is 18
value i is 19
value i is 20
*/

for (let index = 1; index <= 20; index++) {
    console.log(`value i is ${index}`);
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }
}

/*
value i is 1
value i is 2
value i is 3
value i is 4
value i is 5
Detected 5 break statement kisi bhi control flow ko break karna ho to use karte hn break ko  
*/

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log(`Detected 5`);
        continue;  // continue likh denge to 1 baar maaf hoga skip kar dega condition or baki sara chiz print hoga yha pe 5 ke jagah pe detected 5 print hoga pr value i is 5 ni hoga print
    }
    console.log(`value i is ${index}`);
}