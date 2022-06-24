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
form2El.addEventListener("submit", showAge);

function showAge(event) {
  event.preventDefault();
  let ageEl = document.querySelector("h2#age");
  let result = event.target.elements.age.value;
  console.log(result);
  ageEl.textContent = result;
}

// 3
let form3El = document.querySelector("form#form-3");
form3El.addEventListener("submit", showResultText);

function showResultText(event) {
  event.preventDefault();
  let result3El = document.querySelector("#result-3");
  let name = event.target.elements.yourname.value;
  let age = event.target.elements.yourage.value;
  let resultText =
    age > 18 ? `Vairuoti gali: ${name}` : `Dar mokykis vairuoti: ${name}`;
  result3El.textContent = resultText;
}

// 4.
let form4El = document.querySelector("form#cinema");
form4El.addEventListener("submit", showCinemaText);

function showCinemaText(event) {
  event.preventDefault();
  let cinemaTextEl = document.querySelector("#cinema-text");
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
form5El.addEventListener("submit", showArmyText);

function showArmyText(event) {
  event.preventDefault();
  let armyText = document.querySelector("#army-text");
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
formXbonusEl.addEventListener("submit", showBonus);

function showBonus(event) {
  event.preventDefault();
  let bonusTxtEl = document.querySelector("#bonusText");
  let years = Number(event.target.elements.workyears.value);
  let bonus = 50;
  if (years > 10) bonus += 50;
  if (years > 20) bonus += 100;
  bonusTxtEl.textContent = `Your bonus: ${bonus} eur.`;
}

// 7.2
let formLeapYear = document.querySelector("#leap");
formLeapYear.addEventListener("submit", leapYear);

function leapYear(event) {
  let yearTextEl = document.querySelector("#yeartext");
  event.preventDefault();
  let year = Number(event.target.elements.inputYear.value);
  let resultLeap = false;
  if (year % 4 === 0) resultLeap = true;
  if (year % 100 === 0 && year % 400 === 0) resultLeap = true;
  let resultText = resultLeap ? "is" : "is not";
  let text = `${year} ${resultText} leap year`;
  yearTextEl.textContent = text;
  event.target.reset();
}

// 7.3
let celciusToFarhForm = document.querySelector("#celcToFar");
celciusToFarhForm.addEventListener("submit", celciusToFarenheit);

function celciusToFarenheit(event) {
  event.preventDefault();
  let farenhText = document.querySelector("#farenh");
  let celcius = Number(event.target.elements.celc.value);
  let farenheit = celcius * 1.8 + 32;
  farenhText.textContent = farenheit.toFixed(1);
}

// 7.4
let agreeEmailForm = document.querySelector("#agree");
agreeEmailForm.addEventListener("submit", getRegistrationResult);

function getRegistrationResult(event) {
  event.preventDefault();
  let resultText = document.querySelector("#resultEmailText");
  let emailTxt = event.target.elements.email.value;
  let didAgree = document.getElementById("checked").checked; //true | false
  let result = didAgree
    ? `Email ${emailTxt} successfully registered`
    : "Registration failed";
  resultText.textContent = result;
  event.target.reset();
}

// 7.5
let wordCountForm = document.querySelector("#nameCount");
wordCountForm.addEventListener("submit", renderWordNTimes);

function renderWordNTimes(event) {
  event.preventDefault();
  let word = event.target.elements.word.value;
  let count = event.target.elements.number.value;
  let resultList = document.querySelector("#wordCountList");

  for (let i = count; i > 0; i--) {
    let wordItem = document.createElement("li");
    wordItem.textContent = word;
    resultList.append(wordItem);
  }
}
// 7.6
let classicForm = document.querySelector("#loopForm");
classicForm.addEventListener("submit", classicTriangle);

function classicTriangle(event) {
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
}

// 7.6 **cos
let classicFormCos = document.querySelector("#loopFormCos");
classicFormCos.addEventListener("submit", cosinusLines);

function cosinusLines(event) {
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
}

// 8.1
let letterLForm = document.querySelector("#letter-L-size");
letterLForm.addEventListener("submit", drawLetterL);

function drawLetterL(event) {
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
}

// 8.2
let letterCForm = document.querySelector("#letter-C-size");
letterCForm.addEventListener("submit", drawLetterC);

function drawLetterC(event) {
  event.preventDefault();
  let count = event.target.elements.number.value;
  console.log("--> c", count);
  let resultC = document.querySelector("#letter-C");

  for (let i = 0; i < count; i++) {
    let line = document.createElement("p");
    line.textContent = "C";
    if (i === 0 || i === count - 1) {
      for (let j = 0; j < count - 1; j++) {
        line.textContent += "C";
      }
    }
    resultC.append(line);
  }
  event.target.reset();
}

// 8.3
let wordsLineForm = document.querySelector("#words-line");
wordsLineForm.addEventListener("blur", writeWordsInLine, true);

function writeWordsInLine(event) {
  event.preventDefault();
  event.target.style.background = "pink";
  let word = event.target.value.trim();
  let resultText = document.querySelector("#words-here");
  resultText.textContent += `${word}, `;
  event.target.value = "";
}

// 8.4
let biggerNumberForm = document.querySelector("#bigger-number-form");
biggerNumberForm.addEventListener("submit", showBiggerNumber);

function showBiggerNumber(event) {
  event.preventDefault();
  let number1st = Number(event.target.elements.firstnumber.value);
  let number2nd = Number(event.target.elements.secondnumber.value);
  let difference1 = 100 - number1st;
  let difference2 = 100 - number2nd;

  if (difference1 < difference2) alert(number1st);
  else alert(number2nd);
  event.target.reset();
}

// 8.5
let count = 0;
let randomNumber = Math.floor(Math.random() * 5 + 1);
console.log("randomNumber", randomNumber);

let guessNumberForm = document.querySelector("#guess-number");
guessNumberForm.addEventListener("submit", guessNumber);

function guessNumber(event) {
  event.preventDefault();
  let guessedNumber = Number(event.target.elements.numberx.value);
  count++;

  if (guessedNumber === randomNumber) alert(`You guessed from ${count} time`);
  else alert("Bad guess, try again");
  event.target.reset();
}
