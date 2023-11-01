

class Person {
    constructor (name, age){
this.name=name;
this.age=age;
    }
     walk (){
        console.log("walk");
    }
}

const person =new Person("Sala", 35)
console.log(person.name+" is "+person.age+ " years old" )