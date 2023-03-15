var startButtonEl = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer-count");

var timer;
var secondsLeft = 75;



startButtonEl.addEventListener("click", function(event){
    // Start timer
timer = setInterval(function(){
    secondsLeft--;
    console.log(secondsLeft);
    timerEl.textContent = secondsLeft;
if (secondsLeft === 0){
    clearInterval(timer);
}
    }, 1000)
})