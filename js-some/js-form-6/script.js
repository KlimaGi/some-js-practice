// formos submito veikimas ir reiksmiu pasiemimas
let formEl = document.querySelector("form");
formEl.addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault();
  let result = event.target.elements.name.value;
  //console.log(document.querySelector("input[name=name]").value);

  let h3El = document.querySelector("h3");
  h3El.textContent = result;
}

// 1
let form1El = document.querySelector("form#form-1");
form1El.addEventListener("submit", alertName);

function alertName(event) {
  event.preventDefault();
  let result = event.target.elements.iname.value;
  alert(result);
}

// 2
let form2El = document.querySelector("form#form-2");
let ageEl = document.querySelector("h2#age");
form2El.addEventListener("submit", showAge);

function showAge(event) {
  event.preventDefault();
  let result = event.target.elements.age.value;
  console.log(result);
  ageEl.textContent = result;
}

// 3
let form3El = document.querySelector("form#form-3");
let result3El = document.querySelector("#result-3");
form3El.addEventListener("submit", showResultText);

function showResultText(event) {
  event.preventDefault();
  let name = event.target.elements.yourname.value;
  let age = event.target.elements.yourage.value;
  let resultText =
    age > 18 ? `Vairuoti gali: ${name}` : `Dar mokykis vairuoti: ${name}`;
  result3El.textContent = resultText;
}

// 4.
let form4El = document.querySelector("form#cinema");
let cinemaTextEl = document.querySelector("#cinema-text");
form4El.addEventListener("submit", showCinemaText);

function showCinemaText(event) {
  event.preventDefault();
  let age = Number(event.target.elements.age.value);
  let result;
  let price = 10;

  if (age < 16) result = price / 2;
  else if (age > 60) result = price / 3;
  else result = price;

  cinemaTextEl.textContent = result.toFixed(2) + "eu";
}

// 5.
let form5El = document.querySelector("form#army");
let armyText = document.querySelector("#army-text");
form5El.addEventListener("submit", showArmyText);

function showArmyText(event) {
  event.preventDefault();
  let age = event.target.elements.age.value;
  let crime = event.target.elements.criminal.value;
  let needArmy = age > 18 && age < 30 && crime === "notcrime" ? true : false;
  console.log(crime);
  let resultText = needArmy
    ? "You may need to go to army."
    : "You don't need to go to army.";
  armyText.textContent = resultText;
}
