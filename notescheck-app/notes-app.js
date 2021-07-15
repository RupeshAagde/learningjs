/* console.log('at javascript file') */

/* const ps = document.querySelectorAll('p')
ps.forEach(function (p){
    if(p.textContent.includes('the')){
        p.remove()
    }
}) */
/* const addPara = document.createElement('p')
addPara.textContent = 'New Element Added'
document.querySelector('body').appendChild(addPara) */
document.querySelector("#name-form").addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e.target.elements.firstname.value)
    e.target.elements.firstname.value = ''
})
 
/* localStorage.setItem("location", "Pune")
localStorage.setItem("location","Chandrapur")
const user  = localStorage.getItem('location')
const users = localStorage.removeItem('location') */

const person = {
    name:'Rupesh',
    age:22
}
/* const personJSON = JSON.stringify(person) */
const personJSON = localStorage.getItem('person')
const user = JSON.parse(personJSON)
console.log(`${person.name} is ${person.age}`)


document.querySelector('#check').addEventListener('change',function(e){
    console.log(e.target.checked)
})
