const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")
const game1 = new Hangman('Pune City',2);


puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.messageStatus;

 

window.addEventListener('keypress', function(e){
    guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.messageStatus;
})

getPuzzle('2').then((puzzle)=> {
    console.log(puzzle)
},(err) => {
    console.log(`Error : ${err}`)
})

getCountryDetail('MX').then((countryCode) => {
    console.log(`Country Name : ${countryCode.name}`)
},(err) => {
    console.log(`Error : ${err}`)
})