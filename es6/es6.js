"use strict";
const person = {
    name:"aaron",
    walk(){
        
        console.log(this)
    }
    
}
console.log(this)
person.walk()
//console.lo
function myFunction() {
    x = 10; // This will throw an error in strict mode because 'x' is not declared.
    console.log(x)  
}
  
  myFunction();