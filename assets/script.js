// Array of questions with multiple choices and correct answers.
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
// Variables of code quiz.
var currentQuestionIndex = 0;
var timeLeft = 60;
var score = 0;
var timerInterval;
var highscores = [];

// References to various elements in the HTML.
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

// Added event listeners for buttons.
startButton.addEventListener("click", startQuiz);
saveScoreButton.addEventListener("click", saveScore);
highscoresButton.addEventListener("click", viewHighscores);

// Function to start the quiz.
function startQuiz() {
    document.getElementById("start-container").style.display = "none";
    quizContainer.style.display = "block";
    nextQuestion();
    timerInterval = setInterval(updateTimer, 1000);
}
// Function to display the next question.
function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        var currentQuestion = questions[currentQuestionIndex];
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
// Function to check the user's answer and update the score and time.
function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        score += 10;
    } else {
        timeLeft -= 10;
    }

    currentQuestionIndex++;
    nextQuestion();
}
// Function to update the timer and end the quiz if time runs out.
function updateTimer() {
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        endQuiz();
    } else {
        timeLeft--;
    }
}
// Function to end the quiz, display score and stop the timer.
function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    scoreElement.textContent = score;
}
// Function to save the user's score and initials in local storage.
function saveScore() {
    var initials = initialsInput.value;
    highscores.push({ initials: initials, score: score });
    localStorage.setItem("highscores", JSON.stringify(highscores));
    initialsInput.value = ""; 
}
// Function to open highscores modal.
function openModal() {
    var modal = document.getElementById("highscores-modal");
    modal.style.display = "block";
}
// Function to close highscores modal.
function closeModal() {
    var modal = document.getElementById("highscores-modal");
    modal.style.display = "none";
}
// Function to view highscores, access date from local storage and display in modal.
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