var inquirer = require("inquirer");
var prompt = require("prompt");
var Letter = require("./letter.js")
var Word = require("./word.js");


console.log("Halloween Hangman");

// Variables associated with hangman game
var chosenWord = "";
var lettersInWord = [];
var numGuesses = 10;
var numBlanks = 0;
var blanksAndLetters = [];
var guessedLetter = [];

// Function for the basic hangman game
var startGame = function() {
    this.numGuesses = 10;
    this.wordArray = ["ghost", "mummy", "witch", "haunted", "pumpkin", "skeleton", "candy", "costume", "trick", "treat"];

    // Randomly slect a word from the word array and split it into separate letters
    this.chosenWord = new Word(this.wordArray[Math.floor(Math.random() * this.wordArray.length)]);
    this.chosenWord.pushLetters();

    // Show blanks for each letter
    numBlanks = lettersInWord.length;
    blanksAndLetters = [];
    for (var i = 0; i < numBlanks; i++) {
        blanksAndLetters.push("_");
    }
}


    inquirer.prompt([
        {
            name: "choose",
            message: "Choose a letter, any letter"
        }
    ]).then(function(guess) {
        var userGuess = new Letter(guess.choose);
    });


startGame();


