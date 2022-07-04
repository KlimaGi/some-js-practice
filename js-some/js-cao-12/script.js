// 12.1
let isLegalAge = true;
// console.log(isLegalAge);
// console.log(isLegalAge.toString());

// 12.2.1
let orangePrice = 1.39;
let text = Number.isInteger(orangePrice)
  ? "you do not need cents"
  : "you need cents";
//console.log(text); // false

// 12.2.2
let price = 1.576;
// console.log(price.toFixed(2));

// 12.2.3
let fuelFormEl = document.querySelector("#fuel-price-counter-form");
let resultTextEl = document.querySelector("#price");
fuelFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let price = event.target.elements.price.value;
  let amount = event.target.elements.amount.value;
  let result = price * amount;
  resultTextEl.textContent = result.toFixed(2) + " Eur";
});

// 12.3.1
let nameCountFormEl = document.querySelector("#word-form");

nameCountFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let word = event.target.elements.word.value;
  let count = Number(event.target.elements.number.value);

  if (!Number.isInteger(count)) alert("Number is not a full number");
  let textPlaceEl = document.querySelector("#result");
  textPlaceEl.textContent = word.repeat(count);
});

// 12.3.2

let wordLengthFormEl = document.querySelector("#word-length-form");
wordLengthFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let word = event.target.elements.word.value.trim();
  alert(word.length);
});

// 12.3.3
let nameSurnameFormEl = document.querySelector("#nameSurnameForm");
let fieldsetEl = document.querySelector("#fieldset-name-surname");
nameSurnameFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let nameSurname = event.target.elements["name-surname"].value;
  let result = nameSurname.trim().split(" ");
  let nameEl = document.createElement("h4");
  nameEl.textContent = result[0];
  let surNameEl = document.createElement("h4");
  surNameEl.textContent = result.slice(1).join(" ");

  //console.log(result.slice(1));
  fieldsetEl.append(nameEl, surNameEl);
});

// 13.1
function alertName(name) {
  alert(name);
}
function consoleName(name) {
  console.log(name);
}
function coreFunction(word, fn) {
  let capitalize = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  fn(capitalize);
}
coreFunction("pear", consoleName);

// 13.2
const cars = ["BMW", "VW", "Audi", "tesLa"];
cars.forEach((car) => console.log(car));

cars.map((car, index) => console.log(index + " " + car));

let capitalize = cars.map(
  (car) => car.charAt(0).toUpperCase() + car.slice(1).toLocaleLowerCase()
);
console.log(capitalize);

let ages = [8, 3, 5, 11, 13, 18, 2, 135, 63];
let newAges = ages.filter((num) => num >= 18);

console.log(newAges);

let words = [
  "characteristic",
  "gene",
  "knowledge",
  "killer",
  "reign",
  "zone",
  "Kinship",
  "knot",
  "king",
];
let word = words.find((item) => item.charAt(0).toLowerCase() === "k");

let wordK = words.some(
  (item) => item.charAt(0) === item.charAt(0).toUpperCase()
);
console.log(wordK); // true

let wordk = words.every(
  (item) => item.charAt(0) === item.charAt(0).toUpperCase()
);
console.log(wordk); // false
