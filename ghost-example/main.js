
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d');

let textPositionY = 40

// this is my "ghost" (player-controlled) object
let rect1 = {
  x: 0,
  y: 450,
  width: 50,
  height: 50,
  speedX: 0,
  speedY: 0,
  upArrowPressed: function () {
    this.x += 5
  },
  downArrowPressed: function () {
    this.x -= 5
  },
  update: function () {
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  },
  top: function () {
    return this.y
  },
  left: function () {
    return this.x
  },
  bottom: function () {
    return this.y + this.height
  },
  right: function () {
    return this.x + this.width
  },

  crashWith: function (obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

// this is the blueprint for the black obstacles that move down the screen
class Obstacle {
  constructor(posX) {
    this.x = posX
    this.y = 0
    this.width = 50
    this.height = 50
    this.speedX = 0
    this.speedY = 0
  }

  top() {
    return this.y
  }
  left() {
    return this.x
  }
  bottom() {
    return this.y + this.height
  }
  right() {
    return this.x + this.width
  }

  update() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.y += 4
  }
}

// array of all obstacles
let obstacleArr = []

var img = new Image();
img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";



let frameCounter = 0

let draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frameCounter++

  obstacleArr.forEach((o) => {
    if (rect1.crashWith(o)) {
      alert('loser')
    }
    o.update()
  })
  rect1.update()

  // after each 1 second
  if (frameCounter % 60 === 0) {
    // add three new obstacles to the array
    obstacleArr.push(new Obstacle(10))
    obstacleArr.push(new Obstacle(250))
    obstacleArr.push(new Obstacle(350))
  }

  window.requestAnimationFrame(draw)
}

// handle the keys up and down when they were pressed
document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38:
      rect1.upArrowPressed();
      break;
    case 40: rect1.downArrowPressed(); break;
  }
}

// start the game (aka the draw function)
document.querySelector('button').onclick = draw
