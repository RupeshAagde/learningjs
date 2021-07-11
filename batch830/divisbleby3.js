/* const array = [2,3,4,5,6,7,8,9,12,5,15,28,46]

const divisiblyBy3 = function (array){
    return array.filter((array) => array % 3 ===0);
}
console.log(divisiblyBy3)
const divisiblyBy3 = array.filter((number) => number % 3 === 0);
console.log(divisiblyBy3); */

/* const age = 15;
const isAdult = function (age) {
    if(age > 17){
        return true
    }else {
        return false
    }
}
console.log(isAdult(age)) */

/* const isAdult = (age) => age >= 18;
console.log(isAdult(19))
console.log(isAdult(15)) */



/* const number = 2; */

/* const numberAccepted = (num) => {
    const accepted2 = (num) => {num % 2 === 0;
        return 3;
    }
    const accepted3 = (num) => {num % 3 === 0;
        return 2;
    }

    return accepted2 || accepted3;
    
    }
numberAccepted(3); */

/* let array = [8,2,4,5,6,4,6,-1];
let highestNo = array[0];

for (i = 0 ; i<=array.length ; i++){

    if(array[i] > highestNo){
        highestNo = array[i];
    }

}
console.log(highestNo) */
/* 
let array = []; 

const cubes = (num) => {
    for(i=1;i<=num;i++){
       array.push(i*i*i)
    }
    return array
}
console.log(cubes(5)) */



const person =[{
    age:52
},{
    age:23
},{
    age:62
},
{
    age:32
}];

const ageAbove50 = (person) => {
    return person.filter(() =>{
        if (person.age > 50)
            return person
    })
    
    

}
console.log(ageAbove50(person))

