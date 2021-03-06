function Letter(char) {
    //store the underlying character
    this.char = char,
    //store whether the letter has been guessed
    this.guessed = false,
    //function to returns the letter or underscore based on guess
    this.returnLetter = function() {
       if (this.guessed === true) {
        return this.char;
       }  else {
        return "___";
       } 
    }
    //a function that takes a character and checks against this.char and 
    //updates this.guessed if correct
    this.checkLetter = function (guess) {
        if (guess === this.char) {
            this.guessed = true;
            return true;
        }
    }

}


module.exports = Letter;


