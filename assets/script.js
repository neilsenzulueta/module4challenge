var questions = [
    {
        question: "Commonly used data types DO NOT Include:",
        choices: ["1.strings", "2.Booleans", "3.Alerts", "4.numbers"],
        correctAnswer: "option2",
    },
    {
        question: "The condition in an if/else statement is enclosed with ____.",
        choices: ["1.quotes", "2.curly brackets", "3.parentheses", "4.square brackets"],
        correctAnswer: "option2",
    },
    {
        question: "Arrays in Javascript can be used to store _____.",
        choices: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
        correctAnswer: "option3",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1.commas", "2.curly brackets", "3.quotes", "4.parentheses"],
        correctAnswer: "option0",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1.javascript", "2.terminal/bash", "3.for loops", "4.console log"],
        correctAnswer: "option3"
    }
]

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