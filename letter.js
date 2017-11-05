var Letter = function(letter) {
    this.letter = letter;
    this.showing = false;
    this.displayLetter = function () {
        if (this.letter == " ") {
            this.showing = true;
        }
    }
}


Letter.prototype.printInfo = function () {
    if (this.showing) {
        return this.letter;
    } else {
        return "_"
    }
}

module.exports = Letter;
