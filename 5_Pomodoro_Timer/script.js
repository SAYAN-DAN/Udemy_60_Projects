const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const timer = document.querySelector(".timer");

start.addEventListener("click", function startTimer() {
  console.log("start");
});

stop.addEventListener("click", function stopTimer() {
  console.log("stop");
});

reset.addEventListener("click", function resetTimer() {
  console.log("reset");
});
