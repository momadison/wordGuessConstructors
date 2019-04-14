//Require Letter.js
var Letter = require("./Letter.js");

//Create Word Constructor
function Word () {
    this.letters = [],
    this.strWord = function () {
        for (var i = 0; i < this.letters.length; i++) {
            let thisWord += this.letters[i].char;
        }
        return thisWord;
    }
    this.guess = function (char) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].checkLetter(char);
        }
    }
}