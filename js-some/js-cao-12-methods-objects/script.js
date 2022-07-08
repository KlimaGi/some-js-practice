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

// 14.1

let nums = [11, 123, 2];
nums.sort((a, b) => b - a);
console.log(nums);

let sorted = words.sort();
console.log(sorted);

let sortedZA = words.sort((a, b) => (b > a ? 1 : -1));
console.log(sortedZA);

let arr = [5, 10, 20, 11, 12, 1, 0, 14, 25];
let sortedToLowest = arr.sort((a, b) => b - a);
console.log(sortedToLowest);

let numArr = [10, 5, 20, 4];
let bigestNum = numArr.sort((a, b) => a - b).pop();
console.log(bigestNum);

// 14.2
// elementu suma
const numR = [1, 5, 10, 20];
let result = numR.reduce((accumulator, current) => accumulator + current, 10);
console.log(result);
// kiek elementu, kuriu ilgis = 3
const someData = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
const someResult = someData.reduce(
  (acc, curr) => (curr.length === 3 ? acc + 1 : acc),
  0
);
console.log(someResult);
// grazinti didziausia reiksme
let arrResult = arr.reduce((acc, curr) => (acc > curr ? acc : (acc = curr)), 0);
console.log(arrResult);

// 14.3
const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];
let adult = people
  .filter((item) => item.age >= 18)
  .map((item) => item.name)
  .sort();
console.log("adult", adult);

let things = [
  { name: "lemonade", price: 4 },
  { name: "lime", price: 3 },
  { name: "water", price: 2 },
  { name: "book", price: 22 },
];
function twoOppositePriceItems(obj) {
  let prices = obj.sort((a, b) => a.price - b.price);
  let minPriceItemName = prices[0].name;
  let maxPriceItemName = prices[prices.length - 1].name;

  return {
    cheapest: minPriceItemName,
    mostExpensive: maxPriceItemName,
  };
}
console.log(twoOppositePriceItems(things));

// 15.1
let secondsFromMin = (minutes) => minutes * 60;
console.log(secondsFromMin(2));
// 15.2
let days = (years) => years * 365;
console.log(days(2));
// 15.3
let square = (x) => x * x;
console.log(square(2));
// 15.4
let triangleWidth = (height, width) => (height * width) / 2;
console.log(triangleWidth(2, 3));
// 15.5
let lastLetter = (word) => word.slice(-1);
console.log(lastLetter("day"));
// 15.6
let reverseWord = (word) => word.split("").reverse().join("");
console.log(reverseWord("day"));

// 15.7
let numbers = [-1, -100, -5, 10, 0, 11];
let closeTo0 = (arr) =>
  arr
    .filter((num) => num < 0)
    .sort((a, b) => b - a)
    .shift();
console.log(closeTo0(numbers));
console.log(numbers); // do not change original

// 15.8
let randomArrByNum = (x) => {
  let arr = [];
  for (let i = 0; i <= x; i++) {
    let random = Math.floor(Math.random() * 10 + 1);
    arr.push(random);
  }
  return arr;
};
console.log(randomArrByNum(5));

// 15.9
let isSumMoreThan100 = (a, b) => a + b > 100;
console.log(isSumMoreThan100(5, 110));

// 15.10
let persons = [
  { name: "Alfredas", age: 25 },
  { name: "Ajonas", age: 25 },
  { name: "Kasparas", age: 20 },
];
let filtered = (personsObj) =>
  personsObj
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .sort((a, b) => a.age - b.age);
console.log(filtered(persons));

// 15.11
let weekday = (day) => {
  let dayWord = new Date(day).toString().split(" ").shift();
  return [dayWord === "Sat" || dayWord === "Sun", dayWord];
};
console.log(weekday("2022-07-09"));

// function isItHoliday(date) {
//   const holidays = ["2020-01-01", "2020-05-25"];
//   return holidays.some(
//     (holiday) => new Date(holiday).getDate() === date.getDate()
//   );
// }
// console.log(isItHoliday(new Date("2020-05-25")));

console.log("--------------");
// 15.12
let numsArr = [1, 2, 4, 5];

let needNum = (arr) => arr.find((x, index) => x + 1 !== arr[index + 1]) + 1;

console.log(needNum(numsArr));

const missingNumber = (array) =>
  array.find((x, i) => x + 1 !== array[i + 1]) + 1;

console.log(missingNumber(numsArr));
