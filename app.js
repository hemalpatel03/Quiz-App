const questions = [
    { question: "What is the output of '2' + 2 in JavaScript?", options: ["4", "22", "NaN", "Error"], answer: "22" },
    { question: "Which keyword is used to declare a constant variable?", options: ["var", "let", "const", "static"], answer: "const" },
    { question: "What does 'typeof null' return?", options: ["null", "object", "undefined", "string"], answer: "object" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreElement = document.getElementById("score");
const resultMessage = document.getElementById("result-message");
const resultGif = document.getElementById("result-gif");
const restartButton = document.getElementById("restart-btn");

function loadQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        let button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    let correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizBox.classList.remove("show");
    resultBox.classList.add("show");
    scoreElement.textContent = `${score} / ${questions.length}`;
    if (score >= 2) {
        resultMessage.textContent = "Congratulations! You won!";
        resultGif.src = "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif";
    } else {
        resultMessage.textContent = "Oops! Try again.";
        resultGif.src = "https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif";
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    }
});

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultBox.classList.remove("show");
    quizBox.classList.add("show");
    loadQuestion();
});

loadQuestion();