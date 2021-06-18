let isGuestOneVegan = false
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('onl offer up Vegan dishes')
}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make suru to offer up some Vegan options')
}else{
    console.log('offer up anything on the menu')
}