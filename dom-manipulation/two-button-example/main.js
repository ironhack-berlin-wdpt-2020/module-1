
// select some element
let heading = document.getElementsByTagName('h1')[0]

// modify that element
heading.innerText = "Panda"


let onClickHandler = function (event) {

  console.log("event.currentTarget", event.currentTarget)

  event.currentTarget.style.color = "orange"


  let inputNumberEl = document.getElementsByClassName('myNumber')[0]

  heading.innerText = "Giraffe " + Number(inputNumberEl.value) + 2

  let inputCheckEl = document.getElementsByClassName('myCheckbox')[0]
  alert(inputCheckEl.value)

}

let button1 = document.getElementsByTagName('button')[0]
button1.onclick = onClickHandler

let button2 = document.getElementsByTagName('button')[1]
button2.onclick = onClickHandler

let headingNew = document.createElement('h1')
headingNew.innerText = "HERE I AM"
document.body.appendChild(headingNew)

