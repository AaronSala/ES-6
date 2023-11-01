 "use strict"
 
 const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York',
  };


 function printPersonInfo({ firstName, lastName, age, city }) {
    console.log(`${firstName} ${lastName}, ${age} years old. from ${city}`);
  }
  
  printPersonInfo(person); // 'John Doe, 30 years old.'
  