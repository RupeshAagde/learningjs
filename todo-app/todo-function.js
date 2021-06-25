// Fetch Existing todos from localStorage
const getSavedTodos = function (){
    const resturantsJSON = localStorage.getItem("resturants")

if(resturantsJSON !== null){
    return JSON.parse(resturantsJSON)
}else{
    return []
}
}

//Save Todos to localStorage
const saveTodos = function (resturants){
    localStorage.setItem("resturants",JSON.stringify(resturants))
}

//Remove a Note from the list
const removeNote = function (id) {
    const noteIndex = resturants.findIndex(function (resturant) {
        return resturant.id === id
    })

    if(noteIndex > -1){
        resturants.splice(noteIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = function (id) {
    const todo = resturants.find(function (todo) {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

//Get the renderTodo 
const renderFilter = function(resturant,filter){
    let filters = resturant.filter(function(res){
        return res.text.toLowerCase().includes(filterNotes.searchText.toLocaleLowerCase())
    })
    filters = filters.filter(function(res){
        if(filterNotes.hideCompleted){
            return !res.completed
        }else{
            return true
        }
    })
    const incompleted = filters.filter(function(resturant){
        return !resturant.completed
    })

    document.querySelector('#notes').innerHTML=""
    
    
    document.querySelector('#notes').appendChild(generateSummaryDOM(incompleted))
    
    filters.forEach(function(resturant){
        
        document.querySelector('#notes').appendChild(generateTodoDOM(resturant))
    })
    
}

//get the DOM element from the individual todo
const generateTodoDOM = function (resturant){
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span') 
    const removebutton = document.createElement('button')

    // setup todo checkBox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = resturant.completed
    todoEl.appendChild(checkbox) 
    checkbox.addEventListener('change', function(){
        saveTodos(resturants)
        renderFilter(resturants, filter)
    })
    

    //setup todo text
    todoText.textContent = resturant.text
    todoEl.appendChild(todoText)

    //setup remove button
    removebutton.textContent = ' X '
    todoEl.appendChild(removebutton)
    removebutton.addEventListener('click', function(){
        removeNote(resturant.id)
        saveTodos(resturants)
        renderFilter(resturants,filterNotes)
    })

    return todoEl
}

//get the DOM element from list summary
const generateSummaryDOM = function(incompleted){
    const addElement = document.createElement('h2')
    addElement.textContent = `you have ${incompleted.length} todo left`
    return addElement
}