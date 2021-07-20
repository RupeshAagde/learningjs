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
    const filterAppend = document.querySelector('#notes')
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

    filterAppend.innerHTML=""
    filterAppend.appendChild(generateSummaryDOM(incompleted))
    
    if(filters.length > 0){
        filters.forEach((resturant) =>{
            filterAppend.appendChild(generateTodoDOM(resturant))
        })
    }else {
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'No todo to show'
        filterAppend.appendChild(emptyMessage)

    }
    
}

//get the DOM element from the individual todo
const generateTodoDOM =(resturant) =>{
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span') 
    const removebutton = document.createElement('button')

    // setup todo checkBox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = resturant.completed
    containerEl.appendChild(checkbox) 
    checkbox.addEventListener('change',() =>{
        toggleTodo(resturant.id)
        saveTodos(resturants)
        renderFilter(resturants, filterNotes)
    }) 
    

    //setup todo text
    todoText.textContent = resturant.text
    containerEl.appendChild(todoText)

    //setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    //setup remove button
    removebutton.textContent = ' Remove '
    removebutton.classList.add('button', 'button--text')
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
    addElement.classList.add('list-title')
    const plural = incompleted.length === 1 ? '' : 's'
    addElement.textContent = `You have ${incompleted.length} todo${plural} left`
    return addElement
}