
let suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  }
]

// Characters
let mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
}

const characters = [mrGreen, profPlum]

// Weapons
const weapons = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 }
]

// const rooms = [
//   { name: "Dinning Room" }, { name: "Conservatory" }
// ]
const rooms = ["Dinning Room", "Conservatory"]


function randomSelector(array) {
  let pos = Math.floor(Math.random() * array.length)
  return array[pos]
}

function pickMystery() {
  return {
    room: randomSelector(rooms),
    character: randomSelector(characters),
    weapon: randomSelector(weapons)
  }
}

