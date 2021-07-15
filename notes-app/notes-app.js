'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy : 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click',(e) => {
    const id = uuidv4()
    const timeStamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createAt: timeStamp,
        updatedAt: timeStamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input',(e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change',(e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
    
})

window.addEventListener("storage",(e) => {
    if(e.key = "notes"){
        notes = JSON.parse(e.newValue)
        renderNotes(notes , filters)
    }
})













/* const now = moment()
console.log(now.toString())

const myBirthday =  moment()
myBirthday.year(1998).month(5).date(29)
console.log(myBirthday.format("MMM D, YYYY")) */


/* const now =new Date()
const timeStamp = now.getTime()

const dateOne = new Date("June 29 1998 00:00:00")
const dateOneTimestamp = dateOne.getTime()

const dateTwo = new Date()
const dateTwoTimestamp = dateTwo.getTime()

if(dateOneTimestamp < dateTwoTimestamp){
    console.log(dateOne.toString())
}else if( dateOneTimestamp > dateTwoTimestamp){
    console.log(dateTwo.toString())
} */