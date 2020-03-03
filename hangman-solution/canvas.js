class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200)
    this.context.fillRect(0, 0, 50, 50)
    // ... your code goes here
  }

  drawLines() {
    // ... your code goes here
    this.context.beginPath()
    let x = 0
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.moveTo(x, 400, 50, 50)
      this.context.lineTo(x + 50, 400, 50, 50)
      x += 80
      this.context.stroke()

    }
  }

  writeCorrectLetter(index) {

    // pia
    // index == 1  
    let letter = this.secretWord[index]
    this.context.font = "40pt Arial"
    this.context.fillStyle = "black"
    let offset = index * 80
    this.context.fillText(letter, offset, 400)

  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "40pt Arial"
    this.context.fillStyle = "orange"
    let offset = errorsLeft * 50
    this.context.fillText(letter, 400 + offset, 200)
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {

  }

  winner() {
    // ... your code goes here
  }
}
