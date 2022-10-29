'use strict';

const check = document.querySelector('.check')
const number = document.querySelector('.number')
const message = document.querySelector('.message')
const guess = document.querySelector('.guess')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
const secretNum = Math.trunc(Math.random()*20) +1
const reset = document.querySelector('.again')

let myGuess;


guess.addEventListener('change', function(){
myGuess = guess.value
})



function checkNum(){
    if(myGuess > secretNum){
        message.textContent = 'Too high!!'
        score.textContent = +(score.textContent) -1
    } else if (myGuess < secretNum) {
        message.textContent = "Too low!!"
        score.textContent = +(score.textContent) -1
    } else {
        message.textContent = 'Correct number!!'
        number.textContent = secretNum
        highscore.textContent = score.textContent
        document.body.style.backgroundColor = '#60b347'
    }
}

function resetAll(){
    score.textContent = 0
    message.textContent = 'Start guessing...'
    myGuess = 0;
    guess.value = ''
    number.textContent = '?'
    document.body.style.backgroundColor = '#222'
}


check.addEventListener("click", function(){
  if(!guess){
    message.textContent = 'No number entered'
  } else {
    checkNum() 
  }  
})

reset.addEventListener("click", function(){
    resetAll()
})