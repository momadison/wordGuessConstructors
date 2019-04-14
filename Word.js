//Require Letter.js
var Letter = require("./Letter.js");

//Create Word Constructor
function Word () {
    this.letters = [],
    this.strWord = function () {
        let myWord = "";
        for (var i = 0; i < this.letters.length; i++) {
            myWord = myWord + " " + this.letters[i].returnLetter();
        }
        return myWord;
    }
    this.runGuess = function (guess) {
        let correct = [];
        for (var i = 0; i < this.letters.length; i++) {
            correct.push(this.letters[i].checkLetter(guess));
        }
        if (correct.includes(true)) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Word;