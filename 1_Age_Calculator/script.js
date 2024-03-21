const birthdayEl = document.querySelector("#birthday");
const Fresult = document.querySelector("#result");
document.querySelector("#Btn").addEventListener("click", function () {
  const birthdayValue = birthdayEl.value;
  // console.log(birthdayValue);

  if (birthdayValue === "") {
    alert("Please enter a valid date");
  } else {
    const age = getAge(birthdayValue);
    // console.log(age);
    Fresult.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
});

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  // console.log(age);

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}
