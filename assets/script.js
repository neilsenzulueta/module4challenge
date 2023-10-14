var startBtn = document.querySelector("start")
var highscoreBtn =document.querySelector("highscores")

startBtn.addEventListener("Click", startQuiz)

function startQuiz() {

}

var timeEl = document.querySelector(".time")
var mainEl = document.getElementById('main')
var secondsLeft = 60;

function setTime() {
    var timerinterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "";

        if(seconds)

    }

}





/*
## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score