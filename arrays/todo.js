/* const name = ['rupesh', 'tejas', 'sai', 'arbaz','shivam']

 console.log(`you have ${name.length} items in th list`)
console.log(`last item is ${name[name.length-1]} and second last item is ${name[name.length-2]}`)
name.splice(2, 1)
console.log(name)

name.push('domu')
console.log(name)

name.shift()
console.log(name)

name.forEach(function(name, index){
    console.log(`${index + 1}. : ${name}`)
})

for(let count = 0; count< name.length; count++){
    console.log(`${count+1}. : ${name[count]}`)
}

console.log(name.indexOf('sai')) */


const resturants = [{
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
}]








/* const sortResturant = function(resturants){
    resturants.sort(function(a, b){
        if(!a.completed){
            return -1
        }
    })
}
sortResturant(resturants)
console.log(resturants) */



/* const getThingsToDo = function (resturants) {
    return resturants.filter(function (resturant) {
    return !resturant.completed
    })
   }
   // Will print an array of all todos that still need to be completed
console.log(getThingsToDo(resturants)) */


/* const findNotes = function(resturants, SerachText){
    return resturants.filter(function(resturants){
        const isTextMatch = resturants.text.toLowerCase().includes(SerachText.toLowerCase())
        const isCompletedMatch = resturants.completed.toLowerCase().includes(SerachText.toLowerCase())
        return isTextMatch || isCompletedMatch
    })
}

console.log(findNotes(resturants, 'false'))  */










/* /* const index = resturants.findIndex(function(resturant,index){
    return resturant.text === 'buy food'
}) 

console.log(index) */

/* const deleteobj = function(resturant,resturanttext){
    const index = resturant.findIndex(function(res){
        return res.text === resturanttext
    })
    if (index > -1){
        const deleteitem = resturant.splice(index,1)
    }
    return resturant
    
    }

const  value = deleteobj(resturants,'buy fffood')
console.log(value)
 */

