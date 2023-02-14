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

function words() {
  let ranObj = words[Math.floor(Math.random()* words.length)];
  let words = ranObj.words
  console.log(ranObj);

  let html = "";
  for (let i=0; i < words.length;i++) {
    html = <input type="text" disabled>;</input>
  }
}

var previousWord = document.getElementById('previous-word')
var incorrectLettersDisplay = document.getElementById('incorrect-letters')
var remainingGuessDisplay = document.getElementById('remaining-guesses')
var winDisplay = document.getElementById('wins')
var lossDisplay = document.getElementById('losses')

var wins = 0
var losses = 0

var letters = [',']

document.onkeyup = function(e) {
  console.log(e.key)
  var key = e.key.toLowerCase()
  if (letters.indexOf(key) == -1) return

  var word = word[Math.floor(Math.random() * letters.length)]

  if (key === letters) {
    correct++
    correctEl.textContent = correct
  } else {
    incorrect++
    incorrectLettersDisplay.textContent = incorrect
  }

  previousWord.textContent = letter
  incorrectLettersDisplay.textContent = key
}

resetbtn.onclick = function(){

}
