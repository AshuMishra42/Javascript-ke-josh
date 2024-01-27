// Code kaise execute hota hn hmlog execution context se samjhte hn 

/*   Call stack :- memory me kaise function input hota hn kaise execute hota hn or hmlog kaise bahar aayege hmlog stack me se 
    
      hmlog yha pe javascript execution  context ke bare me baat karege
      
      {   } => global execution context 
                          |
                          |
                refer variable ( this )

 Browser , node =>  program haam khi vi run kare sbka execution context alag alag hi hota hn 

 javascript=> single threaded environment pe run hota hn 

 basically do type ka context execution hota hn 1. functionally execution context
                                                2. global execution context
                                                3. eval execution context (ye extra hn )

      {   } => memory creation phase ( variable,operator,operation ) ke liye memory me space create hota hn 
      
 last phase hota hn , {  } => execution phase hota h 

 ab hmlog example ke through explain karte hn 

*/

let val1=0
let val2=5
function addnum(num1,num2){
    let total=num1+num2
    console.log(total);
    return total
}

let result1=addnum(val1,val2)
let result2=addnum(5,6)

/*
           here ,  code execute kaise hoga 

        (1)   global execution context / global environment 
                          |
                          |
              allocate ( this keyword )

        (2)   memory phase ( sare variables ka naam likh kar sabko undefined declare kar denge  )
            
                      val1=undefined 
                      val2=undefined 
                      addnum= definition ( function )
                      result1= undefined 
                      result2= undefined 

        (3)   execution phase

                 val1= 10
                 val2= 5
                 we are at line xexcution line no. 30 
                 addnum => |                           |
                           | new variable environment  |
                           |           +               |
                           |   execution thread        |
                           |                           |
                           |                           |

    new variable environment => do phase repeat hoga execution phase , memory phase 
    
    (1) memory phase= val1= undefined
                      val2= undefined
                      total= undefined

    (2) execution phase= num1= 10
                         num2= 5
                         total= 15
                         return hoga parent execution context

    ye jo nya execution context apna kam karna ke baad delete apne ho jata h automatically
    
val1= 10
val2= 2
addnum
result1= 15
result2= fir se nya execution context bn jyega 
                        |                    |
                        |                    |
                        |   NVE + THREAD     |
                        |                    |
                        |                    |

Call stack => |                  |
              |                  |                  
              |     three ()     |
              |      two ()      |
              |      one ()      |
              | global execution | 

function aate jayega complete hoke hat te jayega sara method aate jayega kam karke nikal jayega 
complexity tb aayega jb hm ek function ko rkh ke baki ke function ko one by one insert karte jayege 

we know stack ke case me lifo chlta hn so sabse pehle three out hoga bd m dono two or one 

practically we can implement in browser :-

sources me jake snippet section me ek file create karte hn name rkhege ankush.js 

function One(){
    console.log("one")
}
function two(){                      // yha pe sara function call stack me jake easily run ho jyega one by one 
    console.log("two")
}
function three(){
    console.log("three")
}

one()
two()
three()  // save karenge ctrl+s se or run karenge I> is type se icon hoga click karenge to 1 pe dekehege ki side me call stack me no. 11 tha
            fir brake karne ke liye | |> pe click karege fir one , two , three insert hoke niklta jayega

function One(){
    console.log("one")
    two()
}
function two(){                      // yha pe sara function call stack me complexity generate hoga because 1 function call 
    console.log("two")                  me hi dusra function call ho gya hn to one by one sb hoga lifo ko follow karke we can 
    three()                             see in browser 
}
function three(){
    console.log("three")
}

one()
two()
three()

*/

