var timer = document.querySelector('h1');
var timerSecond = 60;

timer.innerHTML = timerSecond;

var countDown = setInterval(() => {
 timerSecond--;
 timer.innerHTML = timerSecond;
 if(timerSecond <= 0 || timerSecond < 1) {
    endTime();
    clearInterval(countDown);
    
 }
},1000)

function endTime() {
    timer.innerHTML = "TIME OUT"
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
        question: "The Second Question",
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

var currentQuestion = 0
var score = 0

function quesLoader() {
    var question = document.getElementById("question");
    var choices = document.getElementById("choices");

    question.textContent = quizQuestions[currentQuestion].q;
    choices.innerHTML = ""

    //I wish I could say I made this but I googled this and followed a Youtube Video. Credit goes to GeeksforGeeks.
    //Some is understandable but without their Help Im not sure how far I wouldve gone.
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

quesLoader();

function nextQues(){
    if (currentQuestion < quizQuestions.length - 1 ) {
        currentQuestion++;
        quesLoader();
    } else {
        document.getElementById("choices").remove();
        document.getElementById("question").remove();
        document.getElementById("btn").remove();

    }
}

function ansCheck() {
    var selected = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (quizQuestions[currentQuestion].answer[selected].isCorrect) {
    score++;
    console.log("Correct")
    nextQues()
    
} else {
    nextQues();
}
function score() {
    var total = document.getElementById("score")
    total.textContent = "Your Total Score is" + score 
}
}