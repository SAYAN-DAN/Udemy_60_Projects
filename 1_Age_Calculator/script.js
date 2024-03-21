const birthdayEl = document.querySelector("#birthday");
document.querySelector("#Btn").addEventListener("click", function () {
  const birthdayValue = birthdayEl.value;
  // console.log(birthdayValue);

  if (birthdayValue === "") {
    alert("Please enter a valid date");
  } else {
    const age = getAge(birthdayValue);
  }
});

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  const age = currentDate.getFullYear() - birthdayDate.getFullYear();
  console.log(age);
}
