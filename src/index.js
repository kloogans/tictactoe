if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const td1 = document.querySelector('#one')
const td2 = document.querySelector('#two')
const td3 = document.querySelector('#three')
const td4 = document.querySelector('#four')
const td5 = document.querySelector('#five')
const td6 = document.querySelector('#six')
const td7 = document.querySelector('#seven')
const td8 = document.querySelector('#eight')
const td9 = document.querySelector('#nine')
const anyTd = document.querySelectorAll('td')
const turnText = document.querySelector('.turn')
const body = document.querySelector('body')
let currentTurn = 'X'
const possibleWins = [[td1, td2, td3], [td4, td5, td6], [td7, td8, td9], [td1, td4, td7], [td2, td5, td8], [td3, td6, td9], [td1, td5, td9], [td3, td5, td7], [td7, td8, td9]]

for (let i = 0; i < anyTd.length; i++) {
  anyTd[i].addEventListener('click', () => {
    anyTd[i].textContent = currentTurn

    let someOneWon = false

    for (let i = 0; i < possibleWins.length; i++) {
      if (possibleWins[i][0].textContent === currentTurn &&
      possibleWins[i][1].textContent === currentTurn &&
      possibleWins[i][2].textContent === currentTurn) {
        turnText.textContent = `${currentTurn} Wins!`
        someOneWon = true
        body.className += 'modal'
      }
    }
    if (!someOneWon) {
      if (currentTurn === 'X') {
        currentTurn = 'O'
        turnText.textContent = 'O Turn'
      } else {
        currentTurn = 'X'
        turnText.textContent = 'X Turn'
      }
    }
  })
}

// const reset () => {
//
// }

const button = document.querySelector('button')
button.addEventListener('click', () => {
  body.className = ''
  reset()
})

// const main () => {
//
// }
//
// document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
