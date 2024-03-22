const tipEl = document.querySelector("#tip");
const billEl = document.querySelector("#bill");
const totalEl = document.querySelector("#total");
const calculateEl = document
  .querySelector("#calculate")
  .addEventListener("click", function () {
    const billValue = billEl.value;
    const tipValue = tipEl.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalEl.innerText = totalValue.toFixed(2);
    // console.log("clicked");
  });
