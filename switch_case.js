/* switch (key){               => key ke jagah variable pass karna hota hn 
       
          case value:
          break;

          default:
          break:
}*/

const month = 3
switch (month) {

    case 1:
        console.log("january");
        break;

    case 2:
        console.log("feburary");
        break;

    case 3:
        console.log("march");
        break;

    case 4:
        console.log("april");
        break;

    default:
        console.log("you are not in the  world");
        break;

}

// output ayega => march or agar break statement na lgaye to jha pe condition match hua ho or uske nichhe ka sara code run hoga except default statement.

const mont = 3
switch (mont) {

    case 1:
        console.log("january");
        break;

    case 2:
        console.log("feburary");
        break;

    case 3:
        console.log("march");
        

    case 4:
        console.log("april");
        break;

    default:
        console.log("you are not in the  world");
        break;

}

// output me => ayega march , april default statement run ni hoga .

const month1 = "march"
switch (month1) {

    case "jan":
        console.log("january");
        break;

    case "feb":
        console.log("feburary");
        break;

    case "march":
        console.log("march moth is favorite month");
        break;

    case "april":
        console.log("april");
        break;

    default:
        console.log("you are not in the  world");
        break;

}

// Truthy values or falsy values : 

const useremail= "a@gmail.com"

if(useremail){
    console.log("got user email");
}
else{
    console.log("don't have an email");
}

/*   when we pass direct  variable in a condition then we get truth values 
     yha pe compare ni hua hn hmlogo ne truthy statement bna diya hn ise
  
*/

let useremail1= ""

if(useremail1){
    console.log("got user ");
}
else{
    console.log("don't have an email");
}

// output => it gives falsy values "" is considered as falsify statement.

let useremail2= []

if(useremail2){
    console.log("welcome to the galaxy ");
}
else{
    console.log("don't have an email");
}

// output=> welcome to the galaxy [] is considerd as truthy statement.

/* here are the list of truthy and falsy staements 

Truthy : "0", "false",'false', " ", [], {},function(){} ye sara values truthy me considered hota hn agar 0 ko string form me likhte hn 
ar agr false ko v string form m likhe or " "(double quotes ko space me likhe they are give truth values . )

Falsy: 0,-0,false,bigINT 0n, "", null, defined, Nan sb false statement deta hamme */

// Array ke andar check 

const useremal=[]
if(useremal.length===0){
    console.log("Array is empty");
}

// object ke andar check karte hn if or else statement

const emptyobj= {}
if(Object.keys(emptyobj.length===0)){
    console.log("object is empty");
}