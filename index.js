//Dependent on Word.js
var odyssey = require("./Odyssey.js");
var Word = require("./Word.js");
var Letter = require("./Letter.js");
var inquirer = require("inquirer");

//Global variables
var guesses = 10;
var chosen = [];
var myWord = "";
var myDefinition = "";
var randomWord = "";


//Function to randomly select a word and update the Word constructor
function selectWord (arr) {
randomWord = arr[Math.floor(Math.random() * arr.length) + 0];
myDefinition = randomWord.def;
randomWord = randomWord.word;
var wordConst = new Word();
for (var i = 0; i < randomWord.length; i++) {
    var letterObj = new Letter(randomWord.charAt(i));
    wordConst.letters.push(letterObj)
}
return wordConst
}

//Function to setup the gameboard
function gameBoard (wordObj) {
    console.log("You have " + guesses + " guesses left.  Choose wisely\n\n");
    console.log('Letters Chosen');
    console.log("----------------------------------")
    console.log(chosen.join(" "));
    console.log("----------------------------------\n\n")
    let wordStr = wordObj.strWord()+"\n"
    console.log(wordObj.strWord()+"\n");
    console.log(myDefinition + "\n");
}

//function to start new game or exit
function newGame(bool) {
    //if true then get new word and setup board
    if (bool === true) {
        chosen = [];
        guesses = 10;
        myWord = selectWord(odyssey);
        console.log("\n**********************************\n");
        console.log("*********WORD GUESS GAME*********");
        console.log("\n**********************************\n");
        
        gameBoard(myWord);
        guessMe();
    } else {
    //if false say goodbye and close
    console.log("Goodbye!");
    }
}

//function to check if game is over
function gameOver () {
    let correctCount = 0;
    //check to see if every letter object is guessed
    for (var i = 0; i < myWord.letters.length; i++) {
        if (myWord.letters[i].guessed === true) {
            correctCount++;
        }
    }

    //if letter object is guessed or guesses are over
    if (correctCount === myWord.letters.length  || guesses < 1) {
        //if guesses are over show the word to user
        if (guesses < 1) {
            console.log("\n------------------------------\n");
            console.log(randomWord + "\n");
        }
        
        //prompt user for new game
        inquirer.prompt([
            {
                type:       "list",
                message:    (correctCount === myWord.letters.length) ? "You Win!  Play another game?" : "You are such a Loser!  Play another game?",
                choices:    ["Yes", "No"],
                name:       "newGame"
            }
        ]).then (function (newGameResponse) {
            switch (newGameResponse.newGame) {
                case "Yes":
                    newGame(true);
                    break;
                case "No":
                    newGame(false);
                    break;
            }
        })
    } 
    //if the board is not filled out or the guesses is not 0
    else {
        gameBoard(myWord);
        guessMe();
    }
}

//Setup Inquirer Prompt function to get guess
function guessMe () {
    inquirer.prompt([
        {
            type:       "input",
            message:    "Please pick a letter",
            name:       "guess",
            maxLength:  1
        }
    ]).then (function(guessResponse) {
        let correct = false;
        //Check user guess to make sure it's a letter
        var letters = /^[A-Za-z]+$/;
        //Change user guess to lower case
        var guess = guessResponse.guess.toLowerCase();
        //If guess is just one letter
        if (guess.match(letters) && (guess.length === 1)) {
            //if the letter has not already been guessed then check it 
            if (!chosen.includes(guess)) {
                //push letter to guesses
                chosen.push(guess);
                //Check to see if the letter is in the word
                correct = myWord.runGuess(guess);
                    //If the guess was correct
                    if (correct === true) {
                        console.log("Correct!");
                        gameOver();
                    } 
                    //If guess was wrong
                    else {
                        console.log("Ummmmm, No!");
                        guesses--;
                        gameOver();
                    }
            } 
            //If the letter has already been picked
            else {
                console.log("You've already chosen that letter");
                guessMe();
            }
                
        }
        //User input is incorrect
        else {
            console.log("Please enter one letter");
            guessMe();
        }


    })
}
                
newGame(true);




