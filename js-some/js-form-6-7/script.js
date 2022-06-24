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
  let age = Number(event.target.elements.age.value);
  let crime = event.target.elements.criminal.value;
  let needArmy = age > 18 && age < 30 && crime === "notcrime" ? true : false;
  console.log(crime);
  let resultText = needArmy
    ? "You may need to go to army."
    : "You don't need to go to army.";
  armyText.textContent = resultText;
}

// --- 7 JS formos pratimai
// 7.1
let formXbonusEl = document.querySelector("form#xbonus");
let bonusTxtEl = document.querySelector("#bonusText");
formXbonusEl.addEventListener("submit", showBonus);

function showBonus(event) {
  event.preventDefault();
  let years = Number(event.target.elements.workyears.value);
  let bonus = 50;
  if (years > 10) bonus += 50;
  if (years > 20) bonus += 100;
  bonusTxtEl.textContent = `Your bonus: ${bonus} eur.`;
}

// 7.2
let formLeatYear = document.querySelector("#leap");
let yearTextEl = document.querySelector("#yeartext");

formLeatYear.addEventListener("submit", (event) => {
  event.preventDefault();
  let year = Number(event.target.elements.inputYear.value);
  let resultLeap = false;
  if (year % 4 === 0) resultLeap = true;
  if (year % 100 === 0 && year % 400 === 0) resultLeap = true;
  let resultText = resultLeap ? "is" : "is not";
  let text = `${year} ${resultText} leap year`;
  yearTextEl.textContent = text;
  event.target.reset();
});

// 7.3
let celciusToFarhForm = document.querySelector("#celcToFar");
let farenhText = document.querySelector("#farenh");

celciusToFarhForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let celcius = Number(event.target.elements.celc.value);
  let farenheit = celcius * 1.8 + 32;
  farenhText.textContent = farenheit.toFixed(1);
});

// 7.4
let agreeEmailForm = document.querySelector("#agree");
let resultText = document.querySelector("#resultEmailText");

agreeEmailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let emailTxt = event.target.elements.email.value;
  let didAgree = document.getElementById("checked").checked; //true | false
  let result = didAgree
    ? `Email ${emailTxt} successfully registered`
    : "Registration failed";
  resultText.textContent = result;
  event.target.reset();
});

// 7.5
let wordCountForm = document.querySelector("#nameCount");

wordCountForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let word = event.target.elements.word.value;
  let count = event.target.elements.number.value;
  let resultList = document.querySelector("#wordCountList");

  for (let i = count; i > 0; i--) {
    let wordItem = document.createElement("li");
    wordItem.textContent = word;
    resultList.append(wordItem);
  }
});
// 7.6
let classicForm = document.querySelector("#loopForm");

classicForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let count = event.target.elements.number.value;
  let resultClassic = document.querySelector("#result");

  for (let i = 1; i <= count; i++) {
    let line = document.createElement("p");
    for (let j = 1; j <= i; j++) {
      line.textContent += "*";
    }
    resultClassic.append(line);
  }
  event.target.reset();
});

// 7.6 **cos
let classicFormCos = document.querySelector("#loopFormCos");

classicFormCos.addEventListener("submit", (event) => {
  event.preventDefault();
  let count = event.target.elements.number.value;
  let resultCos = document.querySelector("#resultCos");
  let x = 0;
  for (let i = 1; i <= count; i++) {
    let line = document.createElement("p");
    let c = ".";
    x = 60 - Math.floor(Math.sin(i * 0.2) * 40);
    line.textContent = c.repeat(Number(x)) + "|*";
    console.log(x);
    resultCos.append(line);
  }
  event.target.reset();
});

// 8.1
let letterForm = document.querySelector("#letter-L-size");
letterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let count = event.target.elements.number.value;
  let resultL = document.querySelector("#letter-l");
  for (let i = 0; i < count; i++) {
    let line = document.createElement("p");
    line.textContent = "L";
    resultL.append(line);
    if (i === count - 1) {
      for (let j = 0; j < count - 1; j++) {
        line.textContent += "L";
      }
      resultL.append(line);
    }
  }
  event.target.reset();
});

// 8.2
