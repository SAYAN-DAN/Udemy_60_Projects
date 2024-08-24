const timer = document.querySelector("#timer");
const start = document.querySelector("#Start");
const stop = document.querySelector("#stop");
const ReStart = document.querySelector("#ReStart");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
start.addEventListener("click", function () {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timer.textContent = formatTime(elapsedTime);
  }, 10);
});

function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    return milliseconds < 10 ? '0' + milliseconds : milliseconds;
  }

stop.addEventListener("click", function () {
  console.log("stop");
});

ReStart.addEventListener("click", function () {
  console.log("ReStart");
});
