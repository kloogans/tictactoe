if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const td1 = $('#one')
const td2 = $('#two')
const td3 = $('#three')
const td4 = $('#four')
const td5 = $('#five')
const td6 = $('#six')
const td7 = $('#seven')
const td8 = $('#eight')
const td9 = $('#nine')
let anyTd = $$('td')
const turnText = $('.turn')
const body = $('body')
const modal = $('h3')
let currentTurn = 'X'
let counter = 0
const possibleWins = [[td1, td2, td3], [td4, td5, td6], [td7, td8, td9], [td1, td4, td7], [td2, td5, td8], [td3, td6, td9], [td1, td5, td9], [td3, td5, td7], [td7, td8, td9]]

for (let i = 0; i < anyTd.length; i++) {
  anyTd[i].addEventListener('click', () => {
    // Prevents second click on selected element
    if (anyTd[i].textContent !== '') {
      return
    }
    anyTd[i].textContent = currentTurn
    let someOneWon = false

    for (let i = 0; i < possibleWins.length; i++) {
      if (possibleWins[i][0].textContent === currentTurn &&
      possibleWins[i][1].textContent === currentTurn &&
      possibleWins[i][2].textContent === currentTurn) {
        setTimeout(() => {
          possibleWins[i][0].style.backgroundColor = 'rgba(152, 249, 126, 0.5)'
        }, 100)
        setTimeout(() => {
          possibleWins[i][1].style.backgroundColor = 'rgba(152, 249, 126, 0.5)'
        }, 400)
        setTimeout(() => {
          possibleWins[i][2].style.backgroundColor = 'rgba(152, 249, 126, 0.5)'
        }, 700)
        someOneWon = true
        setTimeout(() => {
          body.className += 'modal animated fadeIn'
          modal.textContent = `${currentTurn} Wins!`
        }, 930)
      }
    }
    if (!someOneWon) {
      counter++
      if (currentTurn === 'X') {
        currentTurn = 'O'
        turnText.textContent = 'Player : O'
      } else {
        currentTurn = 'X'
        turnText.textContent = 'Player : X'
      }
    }
    if (counter >= 9) {
      body.className += 'modal animated fadeIn'
      modal.textContent = 'Draw'
    }
  })
}

const button = $('button')
button.addEventListener('click', () => {
  body.className = ''
  window.location.reload()
})

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
