class Hangman {

  // this is how our Hangman class will be used in the future: 
  // new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa'])
  // try it in the console !
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord()
    this.errorsLeft = 10
    this.letters = []
    this.guessedLetters = ''
  }

  pickWord() {
    let randomPos = Math.floor(Math.random() * this.words.length)
    return this.words[randomPos]
  }

  // checks if the key pressed is a letter at all
  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    } else {
      return false
    }
  }

  // HAS THIS LETTER NOT BEEN CLICKED BEFORE ?? ( true or false )
  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  }

  addCorrectLetter(correctLetter) {
    this.letters.push(correctLetter)
    this.guessedLetters += correctLetter
  }

  addWrongLetter(wrongLetter) {
    this.letters.push(wrongLetter)
    this.errorsLeft--
    // ... your code goes here
  }

  checkGameOver() {
    return this.errorsLeft <= 0
  }

  checkWinner() {
    return this.guessedLetters.length == this.secretWord.length
  }
}

let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'ironhack', 'react', 'miami', 'paris', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
    hangmanCanvas.drawLines()

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {

  // check if it is even a letter
  if (!hangman.checkIfLetter(event.keyCode)) {
    alert('not a letter')
    return
  }

  // check if the letter has been used before
  if (!hangman.checkClickedLetters(event.key)) {
    alert("please don't click the same one again")
    return
  }

  // is it a correct letter ? ...
  if (hangman.secretWord.includes(event.key)) {
    // ... then add it to correct letters
    let idx = hangman.secretWord.indexOf(event.key)
    hangman.addCorrectLetter(event.key)
    // hangmanCanvas.writeCorrectLetter(idx)

    // if duplicate letters in the secret words
    hangman.secretWord.split("").forEach((el, idx) => {
      if (el === event.key) {
        hangmanCanvas.writeCorrectLetter(idx)
      }
    })

  } else {
    // ... then add it wrong letters
    hangman.addWrongLetter(event.key)
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
  }

  if (hangman.checkGameOver()) {
    alert('you lost')
  }

  if (hangman.checkWinner()) {
    alert('you won')
  }

});
