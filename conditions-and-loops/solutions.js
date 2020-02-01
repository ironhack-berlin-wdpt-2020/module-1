
let hacker1 = "Anne"

console.log(`The first name is : ${hacker1}`)

let hacker2 = "Anna"

console.log(`The second name is : ${hacker2}`)

if (hacker1.length < hacker2.length) {
  console.log(`First name is shorter (${hacker1.length} chars)`)
} else if (hacker2.length < hacker1.length) {
  console.log(`Second name is shorter (${hacker2.length} chars)`)
} else {
  console.log(`Same length ! (${hacker2.length} chars)`)
}


// // LOOPS

let result = ""

for (let i = 0; i < hacker1.length; i++) {
  console.log(` i : ${i}`)
  console.log(` hacker1[i] : ${hacker1[i]}`)  
  result += hacker1[i].toUpperCase() + " "
  console.log(` result : ${result}`)
}

console.log(result)
console.log(hacker1)


let reverseResult = ""

for (let i = hacker1.length - 1; i >= 0; i = i - 1) {
  console.log(` i : ${i}`)
  console.log(` hacker1[i] : ${hacker1[i]}`)  
  reverseResult = reverseResult + hacker1[i]
  console.log(` result : ${reverseResult}`)
}

console.log(reverseResult)

let shorterString;
if (hacker1.length < hacker2.length) {
  shorterString = hacker1
} else {
  shorterString = hacker2
}

if (hacker1 === hacker2) {
  // just check if both are the same, if they are don't run the loop below..
}

for (let i = 0; i < hacker1.length; i++) {
  
  if (hacker1[i] < hacker2[i]) { // A < A .. l < x .. 
    console.log(`this comes first : ${hacker1}`)   
    break; 
  } else if (hacker1[i] > hacker2[i]) {
    console.log(`this comes first : ${hacker2}`)   
    break;
  } else {
    // console.log(`${hacker1[i]} is >= ${hacker2[i]}`)
    console.log(`You have the same name`)
  }
}
