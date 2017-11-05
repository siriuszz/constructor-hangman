var Letter = require("./letter.js")

function Word(word) {
    this.word = word;
    this.letters = [];
    this.isLetter = false;
    this.pushLetters = function () {
        for (var i = 0; i<this.word.length; i++)
            this.letters.push(new Letter(this.word[i]) );
    }
};



module.exports = Word;

