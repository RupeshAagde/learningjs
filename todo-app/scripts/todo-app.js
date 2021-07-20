'use strict'

let resturants = getSavedTodos() 

const filterNotes = {
    searchText:"",
    hideCompleted: false
}

renderFilter(resturants,filterNotes)

document.querySelector('#search').addEventListener('input',(e) =>{
    filterNotes.searchText = e.target.value
    renderFilter(resturants,filterNotes)
})

 
document.querySelector('#name-form').addEventListener('submit',(e) =>{
const text = e.target.elements.text.value.trim()

    e.preventDefault()
    if(text.length > 0){
        resturants.push({
        id: uuidv4(),
        text,
        completed:false
    })
    saveTodos(resturants)
    renderFilter(resturants,filterNotes)
    e.target.elements.text.value = ''
    }
})

document.querySelector('#check-completed').addEventListener('change',(e) =>{
    filterNotes.hideCompleted = e.target.checked
    renderFilter(resturants,filterNotes)
})




/* const renderFilter = function(resturants, filterNotes){
    const filter = resturants.filter(function(notes){
        return notes.text.toLowerCase().includes(filterNotes.searchText.toLowerCase())
    })
    document.querySelector("#notes").innerHTML=""
    filter.forEach(function (note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.text
        document.querySelector('#notes').appendChild(noteEl)
    })
}
renderFilter(resturants,filterNotes) */


/* const incompleted = resturants.filter(function(resturant){
    return !resturant.completed
})
const addElement = document.createElement('h2')
addElement.textContent = `you have ${incompleted.length} todo left`
document.querySelector('body').appendChild(addElement)

resturants.forEach(function(resturant){
    const p = document.createElement('p') 
    p.textContent = resturant.text
    document.querySelector('body').appendChild(p)
})  */
 



/* 

document.querySelector('#create').addEventListener('click',function(e){
    console.log('create')
})

document.querySelector('#remove-all').addEventListener('click',function(e){
    console.log('remove')
})
document.querySelector('#search').addEventListener('input',function(e){
    filterNotes.searchText = e.target.value
    renderFilter(resturants,filterNotes)
})



/* document.querySelector('button').addEventListener('click',function(e){
    console.log('button clicked')
   /*  e.target.textContent = 'double clicked'  */
   /*  console.log(e) 
})
 */




/* let count = 0
resturants.forEach(function(resturants,index){
    
    if(!resturants.completed){
        count = count + 1
    }
}) */





/* const paragraghs = document.querySelectorAll('p')
paragraghs.forEach(function (p){
    if(p.textContent.includes('the')){
        p.remove()
    } 
}) */ 

/* text:'order cat food',
    completed:true
},{
    text:'clean kitchen',
    completed:true
},{
    text:'buy food',
    completed:false
},{
    text:'do work',
    completed:true
},{
    text:'exercise',
    completed:false */

    /* {
        text:'order cat food',
        completed:true
    },{
        text:'clean kitchen',
        completed:true
    },{
        text:'buy food',
        completed:false
    },{
        text:'do work',
        completed:true
    },{
        text:'exercise',
        completed:false
    } */