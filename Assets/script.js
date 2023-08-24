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

var questions = [
    {
        prompt: "Question 1 \n(A) Answer 1\n(B) Answer 2\n(C) Answer 3\n(D) Answer 4",

        answer: "A"
    }
]
//var Question = document.querySelector('h2')
//var quizQuestion = questions
//for (var i = 0; i < questions.length; i++) {
//var reponse = window.prompt(questions[i].prompt)
//if(response == questions[i].answer) {
//    score++;
//    alert("Correct")
//}
//}
