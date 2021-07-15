const square = (num) =>{
    return num *num
}

console.log(square(5))

const people = [{
    name:'Rupesh',
    age: 22
},{
    name:'tejas',
    age:23
},{
    name:'sai',
    age:21
}]

const age22 =people.find((person) => person.age === 22)
console.log(age22.name)