var timer = document.querySelector('h1');
var timerSecond = 120;

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
    alert("TIME OUT");
}

var quizQuestions = [{
    question: "The First Question",
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
    question: "The Third Question",
        answer: [
        { text: "Answer 1", isCorrect: true},
        { text: "Answer 2", isCorrect: false},
        { text: "Answer 3", isCorrect: false},
        { text: "Answer 4", isCorrect: false}
        ]
},
{
    question: "The Fourth Question",
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

function Quest() {
    var q = document.getElementById('question')
    var choises = document.getElementById('choises')

    q.textContent = quizQuestions[currentQuestion].question;
    choises.innerHTML = ""

    for (var i = 0; i < quizQuestions[currentQuestion].answer.length; i++) {

    }
}