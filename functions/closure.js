const createTipper = (tip) => {
    return (bill) => {
        return `Total Bill Amount : ${bill + (bill * tip)} Bill : ${bill} Tip : ${bill * tip}`
    }
}

const bill = createTipper(.25)
console.log(bill(100))
const bill30 = createTipper(.30)
console.log(bill30(100))