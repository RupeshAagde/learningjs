let getTip = function (total, tipPercent = .2){
    let percent = tipPercent * 100
    let tip = total * tipPercent

    return `A ${percent}% tip on ${total} would be ${tip}`
   // return total * .2
    //return 'Total: '+ total +' Tip: '+tip

}
let result = getTip(400,0.25)
console.log(result)

//console.log(``)