// 12.1
let isLegalAge = true;
console.log(isLegalAge);
console.log(isLegalAge.toString());

// 12.2.1
let orangePrice = 1.39;
let text = Number.isInteger(orangePrice)
  ? "you do not need cents"
  : "you need cents";
console.log(text); // false

// 12.2.2
let price = 1.576;
console.log(price.toFixed(2));

// 12.2.3
let fuelFormEl = document.querySelector("#fuel-price-counter-form");
let resultTextEl = document.querySelector("#price");
fuelFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let price = event.target.elements.price.value;
  let amount = event.target.elements.amount.value;
  let result = price * amount;
  console.log(result.toFixed(2));
  resultTextEl.textContent = result.toFixed(2) + " Eur";
});

// 12.3.1
let nameCountFormEl = document.querySelector("#word-form");

nameCountFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let word = event.target.elements.word.value;
  let count = Number(event.target.elements.number.value);

  console.log(Number.isInteger(count));
  console.log(typeof count);
  if (!Number.isInteger(count)) alert("Number is not a full number");
  let textPlaceEl = document.querySelector("#result");
  textPlaceEl.textContent = word.repeat(count);
});

// 12.3.2
let nameSurnameFormEl = document.querySelector("#nameSurnameForm");
let fieldsetEl = document.querySelector("#fieldset-name-surname");
nameSurnameFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let nameSurname = event.target.elements["name-surname"].value;
  let result = nameSurname.trim().split(" ");
  let nameEl = document.createElement("h4");
  nameEl.textContent = result[0];
  let surNameEl = document.createElement("h4");
  surNameEl.textContent = result[1];
  fieldsetEl.append(nameEl);
  fieldsetEl.append(surNameEl);
  console.log(result);
});
