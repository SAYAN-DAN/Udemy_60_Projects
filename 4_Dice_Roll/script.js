const buttonEl = document.querySelector(".roll-button");
const diceEl = document.querySelector(".dice");
const rollhistoryEl = document.querySelector(".roll-history")
let historylist = []

function diceroll() {
  const dicenum = Math.floor(Math.random() * 6 + 1);
  const diceface = getdiceface(dicenum);
  diceEl.innerHTML = diceface;
  historylist.push(dicenum)
  updatehistorylist()
}
function updatehistorylist() {
  rollhistoryEl.innerHTML = ""
}

function getdiceface(dicenum) {
  switch (dicenum) {
    case 1:
      return "&#9856";
    case 2:
      return "&#9857";
    case 3:
      return "&#9858";
    case 4:
      return "&#9859";
    case 5:
      return "&#9860";
    case 6:
      return "&#9861";

    default:
      return "";
  }
}

buttonEl.addEventListener("click", function () {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
  }, 1000);
  diceroll();
});
