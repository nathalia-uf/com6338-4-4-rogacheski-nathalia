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

var wordToGuess = document.getElementById('word-to-guess')
var previousWord = document.getElementById('previous-word')
var incorrectLettersDisplay = document.getElementById('incorrect-letters')
var remainingGuessDisplay = document.getElementById('remaining-guesses')
var winDisplay = document.getElementById('wins')
var lossDisplay = document.getElementById('losses')

function getRemainingGuesses() {
  return Number(remainingGuessDisplay.innerText)
}

function setRemainingGuesses(amount) {
  remainingGuessDisplay.innerText = String(amount);
}

function resetRemainingGuesses() {
  setRemainingGuesses(10);
}

function selectRandomWord() {
  return words[Math.floor(Math.random()*words.length)]
}

function getWordsLetters(word) {
  return word.split("")
}

function generateHTMLFromWord(wordLetters, guessedLetters) {
  let html = ""
  for(wordLetter of wordLetters) {
    if(guessedLetters.indexOf(wordLetter) === -1) {
      html += "_"
    } else {
      html += `${wordLetter}`
    }
  }
  return html
}

function isWordComplete(wordLetters, guessedLetters) {
  for(wordLetter of wordLetters) {
    if(guessedLetters.indexOf(wordLetter) === -1) return false
  }

  return true
}

var wins = 0
var losses = 0

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let attemptedLetters = []
let wrongLetters = []
let correctLetters = []

let selectedWord = selectRandomWord()
let selectedWordLetters = getWordsLetters(selectedWord)

function game(previousWordValue = null) {
  attemptedLetters = []
  wrongLetters = []
  correctLetters = []

  resetRemainingGuesses()
  winDisplay.innerText = String(wins)
  lossDisplay.innerText = String(losses)
  incorrectLettersDisplay.innerText = ""
  previousWord.innerText = ""
  if(previousWordValue !== null) {
    previousWord.innerText = previousWordValue;
  }

  selectedWord = selectRandomWord()
  selectedWordLetters = getWordsLetters(selectedWord)

  wordToGuess.innerHTML = generateHTMLFromWord(selectedWord, correctLetters)

  console.log(selectedWord)
}

document.querySelector("body").onkeyup = function(e) {
  const key = e.key.toLowerCase();

  if(letters.indexOf(key) === -1) return;

  attemptedLetters.push(key);
  if(selectedWordLetters.indexOf(key) == -1 && wrongLetters.indexOf(key) === -1) {
    wrongLetters.push(key)
    incorrectLettersDisplay.innerText = wrongLetters.join(", ")
    guesses = getRemainingGuesses()
    if (guesses === 1) {
      losses += 1;
      return game(selectedWord)
    }
    else {
      setRemainingGuesses(guesses - 1);
    }
    return
  }

  correctLetters.push(key)

  if (isWordComplete(selectedWordLetters, correctLetters)) {
    wins += 1;
    return game(selectedWord)
  }

  wordToGuess.innerHTML = generateHTMLFromWord(selectedWord, correctLetters)
}

game()