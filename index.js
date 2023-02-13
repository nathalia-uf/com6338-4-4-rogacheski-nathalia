var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var previousWord = document.getElementById('previous-word')
var incorrectLettersDisplay = document.getElementById('incorrect-letters')
var remainingGuessDisplay = document.getElementById('remaining-guesses')
var winDisplay = document.getElementById('wins')
var lossDisplay = document.getElementById('losses')

var wins = 0
var losses = 0

document.onkeyup = function(e) {
  console.log(e.key)
}
