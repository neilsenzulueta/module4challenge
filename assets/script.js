var questions = [
    {
        question: "Commonly used data types DO NOT Include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed with ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: "parentheses",
    },
    {
        question: "Arrays in Javascript can be used to store _____.",
        choices: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
        correctAnswer: "4.all of the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1.commas", "2.curly brackets", "3.quotes", "4.parentheses"],
        correctAnswer: "1.commas",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1.javascript", "2.terminal/bash", "3.for loops", "4.console log"],
        correctAnswer: "4.console log",
    }
];
var currentQuestionIndex = 0;
var timeLeft = 60;
var score = 0;
var timerInterval;

var startButton = document.getElementById("start-button");
var quizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var timerElement = document.getElementById("timer");
var gameOverContainer = document.getElementById("game-over-container");
var scoreElement = document.getElementById("score");
var initialsInput = document.getElementById("initials");
var saveScoreButton = document.getElementById("save-score");

//var startBtn = document.querySelector("start")
//var highscoreBtn =document.querySelector("highscores")

startButton.addEventListener("click", startQuiz)
saveScoreButton.addEventListener("click", saveScore)
//highscoreBtn.addEventListener("Click", highscores)

function startQuiz() {
    document.getElementById("start-container").style.display = "none";
    quizContainer.style.display = "block";
    nextQuestion();
    timerInterval = setInterval(updateTimer, 1000);

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        choicesElement.innerHTML ="";

        currentQuestion.choices.forEach((choice) => {
            var choiceItem = document.createElement("li");
            choiceItem.textContent = choice;
            choiceItem.addEventListener("click", () => checkAnswer(choice, currentQuestion.correctAnswer));
            choicesElement.appendChild(choiceItem);
        });
}   else {
    endQuiz();
}
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        score += 10;
    } else {
        timeLeft -= 10;
    }

    currentQuestionIndex++;
    nextQuestion();
}
function updateTimer() {
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        endQuiz();
    } else {
        timeLeft--;
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.style.display = "none";
    gameOverContainer.style.display ="block";
    scoreElement.textContent = score;
}

function saveScore() {
    const initials = initialsInput.value;
    console.log('Saved score: ${score} with initials: ${initials}');

}
}
