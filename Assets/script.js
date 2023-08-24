var timer = document.querySelector('h1');
var timerSecond = 6;

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
