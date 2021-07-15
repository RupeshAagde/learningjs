
class Person {
    constructor (firstName, lastName, age, likes =[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
    }

    getBio(){
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) =>{
        bio += ` ${this.firstName} like ${like}.`
    })
    return bio
    }

    set fullName (fullName){
        let name = fullName.split(' ');
        this.firstName = name[0];
        this.lastName = name[1];
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor (firstName, lastName, age, position, likes){
        super(firstName, lastName, age, likes);
        this.position = position;
    }
    getBio(){
        return `${this.fullName} is a ${this.position}`;
    }
    getYearLeft (){
        return 60-this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age,grades,likes){
        super(firstName, lastName, age, likes)
        this.grades = grades;
    }
    
    updateGrade(change){
        this.grades += change
    }
    getBio(){
        const status = this.grades >= 70 ? 'Passing' : 'Failing'
        return `${this.firstName} is ${status} the class`
    }
    
}


const stu = new Employee('Rupesh','Aagde',23,'Developer',['Playing','Writing'])
stu.fullName = 'Tejas kale'
console.log(stu.getBio())
