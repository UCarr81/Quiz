
var timer = document.querySelector('h1');
var timerSecond = 60;
var countDown;

function startCountdown() {
    timer.innerHTML = timerSecond;
    countDown = setInterval(() => {
        timerSecond--;
        timer.innerHTML = timerSecond;
        if (timerSecond <= 0) {
            clearInterval(countDown);
            endTime();
        }
    }, 1000);
    checkButton.style.display = "block";
}

function endTime() {
    timer.innerHTML = "TIME OUT";
}

var quizQuestions = [{
    q: "The First Question",
    answer: [
    { text: "Answer 1", isCorrect: false },
    { text: "Answer 2", isCorrect: true},
    { text: "Answer 3", isCorrect: false}, 
    { text: "Answer 4", isCorrect: false }
]
},
{
        q: "The Second Question",
        answer: [
        { text: "Answer 1", isCorrect: true},
        { text: "Answer 2", isCorrect: false},
        { text: "Answer 3", isCorrect: false},
        { text: "Answer 4", isCorrect: false}
    ]
},
{
    q: "The Third Question",
        answer: [
        { text: "Answer 1", isCorrect: true},
        { text: "Answer 2", isCorrect: false},
        { text: "Answer 3", isCorrect: false},
        { text: "Answer 4", isCorrect: false}
        ]
},
{
    q: "The Fourth Question",
        answer: [
        { text: "Answer 1", isCorrect: true},
        { text: "Answer 2", isCorrect: false},
        { text: "Answer 3", isCorrect: false},
        { text: "Answer 4", isCorrect: false}
        ]
} 
]

var currentQuestion = 0;
var score = 0;

var question = document.getElementById("question");
var choices = document.getElementById("choices");
var checkButton = document.getElementById("check-btn");
checkButton.style.display = "none";

function showQuestion() {
    question.textContent = quizQuestions[currentQuestion].q;
    choices.innerHTML = "";

    for (let i = 0; i < quizQuestions[currentQuestion].answer.length; i++) {
        var choicesDiv = document.createElement("div");
        var choice = document.createElement("input");
        var choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = quizQuestions[currentQuestion].answer[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        choices.appendChild(choicesDiv);
    }
}

function nextQues() {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        displayScore();
    }
}

function ansCheck() {
    var selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
        var selectedValue = parseInt(selected.value);

        if (quizQuestions[currentQuestion].answer[selectedValue].isCorrect) {
            score++;
            selected.nextElementSibling.classList.add("correct-answer");
            displayAnswerMessage(true);
            nextQues();
        } else {
            timerSecond -= 10;
            selected.nextElementSibling.classList.add("incorrect-answer");
            displayAnswerMessage(false); 
            nextQues();
        }
    } else {
        nextQues();
    }
}

function displayAnswerMessage(isCorrect) {
    var answerMessage = document.getElementById("answer-display");
    answerMessage.textContent = isCorrect ? "Correct!" : "Incorrect!";
}
var highScore = Number.POSITIVE_INFINITY;

function displayScore() {
    clearInterval(countDown); 
    var timeTaken = 60 - timerSecond; 
    var scoreForThisAttempt = timeTaken; 

    if (scoreForThisAttempt < highScore) {
        highScore = scoreForThisAttempt; 
    }

    var total = document.getElementById("score");
    total.textContent = "Your Score: " + scoreForThisAttempt + " | High Score: " + highScore;

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score-container").style.display = "block";
}

var startButton = document.getElementById("start-btn");

startButton.addEventListener("click", function () {
    startButton.disabled = true;
    startCountdown();
    showQuestion();
});

var restartBtn = document.getElementById("restart-btn")

restartBtn.addEventListener('click', function () {
    startButton.disabled = false;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("score-container").style.display = "none";

    currentQuestion = 0;
    score = 0;
    timerSecond = 60;

    timer.innerHTML = timerSecond

    clearInterval(countDown);

    showQuestion();
    startCountdown();
    document.getElementById("start-btn").style.display = "none";
}); 