const person = {
    name:"Aaron",
    age:30,
    school:"kitise",
    sex:"male",
    location:"kyambeke"
}
const person2 = {
    name:"Sala",
    
    sex:"male",
    location:"ndolo"
}

const person3= {...person, ...person2} 

console.log(person3);




