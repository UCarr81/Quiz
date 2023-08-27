
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
    q: "What Is The Most Popular Car Color",
    answer: [
    { text: "Gray", isCorrect: false },
    { text: "White", isCorrect: true},
    { text: "Black", isCorrect: false}, 
    { text: "Blue", isCorrect: false }
]
},
{
        q: "Which Is NOT A Brand In General Motor Car Company",
        answer: [
        { text: "Ford", isCorrect: true},
        { text: "Cadillac", isCorrect: false},
        { text: "Chevrolet", isCorrect: false},
        { text: "Buick", isCorrect: false}
    ]
},
{
    q: "What Qualifies A Car To Be Considered Muscle",
        answer: [
        { text: "V6", isCorrect: false},
        { text: "V8+", isCorrect: true},
        { text: "Loud", isCorrect: false},
        { text: "RWD", isCorrect: false}
        ]
},
{
    q: "How Many Cars Are Manufactured In America Per Year",
        answer: [
        { text: "1.1 Million", isCorrect: false},
        { text: "3 Million", isCorrect: false},
        { text: "1.8 Million ", isCorrect: true},
        { text: "6.6 Million", isCorrect: false}
        ]
}, 
{
    q: "Which TWO Companies are Currently The Worlds Largest Car Manufacturers",
        answer: [
        { text: "Nissan and Ford ", isCorrect: false},
        { text: "Chevrolet and Dodge", isCorrect: false},
        { text: "Toyota and Nissan", isCorrect: false},
        { text: "Volkswagen and Toyota", isCorrect: true}
        ]
},
{
    q: "Toyota's Most Popular Production Car is?",
    answer: [
    { text: "Corolla", isCorrect: true},
    { text: "Tacoma", isCorrect: false},
    { text: "Tundra", isCorrect: false},
    { text: "Camry", isCorrect: false}
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
    } else {scoreForThisAttempt = timeTaken
    }

    var total = document.getElementById("score");
    total.textContent = "Your Score: " + scoreForThisAttempt + " | High Score: " + highScore;

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score-container").style.display = "block";
}

var startButton = document.getElementById("start-btn");
var menuPrompt = document.getElementById("body-Quiz");
startButton.addEventListener("click", function () {
    startButton.disabled = true;
    menuPrompt.style.display = "none";
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

var initialsInput = document.getElementById("initials-input");
var submitScoreBtn = document.getElementById("submit-initials-btn");

submitScoreBtn.addEventListener("click", function () {
    if (initialsInput.value) {
        submitHighscore(initialsInput.value, score);
    }
});

function submitHighscore(initials, score) {
    var highscoreList = document.getElementById("highscore-list");
    var highscoreItem = document.createElement("li");
    highscoreItem.textContent = `${initials.toUpperCase()}: ${score}`;
    highscoreList.appendChild(highscoreItem);
}

//IM DONE!!!!!!! WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO 

//This was a fun Project and one that definently took me a long time 
//as much as it was

