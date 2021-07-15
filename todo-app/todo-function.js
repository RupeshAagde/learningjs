'use strict'

// Fetch Existing todos from localStorage
const getSavedTodos = function (){
    const resturantsJSON = localStorage.getItem("resturants")
    try{
        return resturantsJSON ? JSON.parse(resturantsJSON) : []
    }catch (e){
        return []
    }
    
}

//Save Todos to localStorage
const saveTodos =(resturants) => {
    localStorage.setItem("resturants",JSON.stringify(resturants))
}

//Remove a Note from the list
const removeNote = (id) => {
    const noteIndex = resturants.findIndex((resturant) => resturant.id === id)

    if(noteIndex > -1){
        resturants.splice(noteIndex, 1)
    }
}
// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = resturants.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}
 
//Get the renderTodo 
const renderFilter = (resturant,filterNotes) => {
    let filters = resturant.filter((res) =>{
        return res.text.toLowerCase().includes(filterNotes.searchText.toLocaleLowerCase())
    })
    filters = filters.filter((res) =>{
        if(filterNotes.hideCompleted){
            return !res.completed
        }else{
            return true
        }
    })
    const incompleted = filters.filter((resturant) =>  !resturant.completed)

    document.querySelector('#notes').innerHTML=""
    
    
    document.querySelector('#notes').appendChild(generateSummaryDOM(incompleted))
    
    filters.forEach((resturant) =>{
        
        document.querySelector('#notes').appendChild(generateTodoDOM(resturant))
    })
    
}

//get the DOM element from the individual todo
const generateTodoDOM =(resturant) =>{
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span') 
    const removebutton = document.createElement('button')

    // setup todo checkBox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = resturant.completed
    todoEl.appendChild(checkbox) 
    checkbox.addEventListener('change',() =>{
        toggleTodo(resturant.id)
        saveTodos(resturants)
        renderFilter(resturants, filterNotes)
    }) 
    

    //setup todo text
    todoText.textContent = resturant.text
    todoEl.appendChild(todoText)

    //setup remove button
    removebutton.textContent = ' X '
    todoEl.appendChild(removebutton)
    removebutton.addEventListener('click',() =>{
        removeNote(resturant.id)
        saveTodos(resturants)
        renderFilter(resturants,filterNotes)
    })

    return todoEl
}

//get the DOM element from list summary
const generateSummaryDOM = (incompleted) => {
    const addElement = document.createElement('h2')
    addElement.textContent = `you have ${incompleted.length} todo left`
    return addElement
}