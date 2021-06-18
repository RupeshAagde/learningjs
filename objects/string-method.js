/*let name = 'Rupesh@1234'

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.includes('pesh'))
console.log(name.trim())*/

let isVaildPassword = function(password){
    let length = password.length
    let containPassword = password.includes('password')

    if(length >= 8 && containPassword === false){
        return true
    }else{
        return false
    }
}

console.log(isVaildPassword('Rupesh'))