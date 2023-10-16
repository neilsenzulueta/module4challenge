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
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        correctAnswer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["javascript", "terminal/bash", "for loops", "console log"],
        correctAnswer: "console log",
    }
];

var currentQuestionIndex = 0;
var timeLeft = 60;
var score = 0;
var timerInterval;
var highscores = [];

var startButton = document.getElementById("start-button");
var quizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var timerElement = document.getElementById("timer");
var gameOverContainer = document.getElementById("game-over-container");
var scoreElement = document.getElementById("score");
var initialsInput = document.getElementById("initials");
var saveScoreButton = document.getElementById("save-score");
var highscoresButton = document.getElementById("highscores-button");

startButton.addEventListener("click", startQuiz);
saveScoreButton.addEventListener("click", saveScore);
highscoresButton.addEventListener("click", viewHighscores);

function startQuiz() {
    document.getElementById("start-container").style.display = "none";
    quizContainer.style.display = "block";
    nextQuestion();
    timerInterval = setInterval(updateTimer, 1000);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        choicesElement.innerHTML = "";

        currentQuestion.choices.forEach((choice) => {
            var choiceItem = document.createElement("li");
            choiceItem.textContent = choice;
            choiceItem.addEventListener("click", () => checkAnswer(choice, currentQuestion.correctAnswer));
            choicesElement.appendChild(choiceItem);
        });
    } else {
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
    gameOverContainer.style.display = "block";
    scoreElement.textContent = score;
}

function saveScore() {
    var initials = initialsInput.value;
    highscores.push({ initials: initials, score: score });
    localStorage.setItem("highscores", JSON.stringify(highscores));
    initialsInput.value = ""; 
}

function openModal() {
    var modal = document.getElementById("highscores-modal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("highscores-modal");
    modal.style.display = "none";
}

function viewHighscores() {
    quizContainer.style.display = "none";
    gameOverContainer.style.display = "none";
    highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    var highScoresList = document.getElementById("highscores-list");

    highScoresList.innerHTML = "";

    highscores.forEach((entry, index) => {
        var listItem = document.createElement("div");
        listItem.textContent = `${entry.initials}: ${entry.score}`;
        highScoresList.appendChild(listItem);
    });

    openModal(); 
}