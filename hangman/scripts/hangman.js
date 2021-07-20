class Hangman {
    constructor (word, remaningGuesses) {
        this.word =  word.toLowerCase().split('');
        this.remaningGuesses = remaningGuesses;
        this.guessLetter = [];
        this.status = 'Playing';
    }

    checkStatus(){
        const finished = this.word.every((letter) => this.guessLetter.includes(letter) || letter === ' ')

        if(this.remaningGuesses === 0){
            this.status = 'failed';
        }else if(finished){
            this.status = 'finished';
        }else {
            this.status = 'Playing';
        }
    }

    get messageStatus(){
        if(game1.status === 'Playing'){
            return `Guesses Left : ${game1.remaningGuesses}`
        }else if(game1.status === 'failed'){
            return `Nice try! The word was "${this.word.join('')}".`
        }else {
            return `Great Work! You guess the word.`
        }
    }

    get puzzle(){
        let puzzle = '';

        this.word.forEach((letter) =>{
            if(this.guessLetter.includes(letter) || letter === ' '){
                puzzle += letter;
            }else {
                puzzle += '*';
            }
        })
        return puzzle
    }

    makeGuess(guess){
        guess = guess.toLowerCase();
        const isUnique = !this.guessLetter.includes(guess);
        const isBadGuess = !this.word.includes(guess);
        
        if(this.status !== 'Playing'){
            return 
        }
    
        if (isUnique) {
            this.guessLetter.push(guess);
        }
    
        if(isUnique && isBadGuess){
            this.remaningGuesses--;
        }
    
        this.checkStatus()
    }
}
