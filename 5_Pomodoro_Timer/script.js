const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const timer = document.querySelector(".timer");

let interval;
let timeLeft = 1500;
start.addEventListener("click", function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updatetime();
    if (timeLeft === 0) {
      alert("Time's Up");
      clearInterval(interval);
      timeLeft = 1500;
    }
  }, 1000);
});

stop.addEventListener("click", function stopTimer() {
  clearInterval(interval);
});

reset.addEventListener("click", function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updatetime();
});

function updatetime() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedtime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;
  timer.innerHTML = formattedtime;
}
