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
// 15.12;
let numberArr = [1, 2, 4, 5];

let needNum = (arr) => arr.find((x, index) => x + 1 !== arr[index + 1]) + 1;

console.log(needNum(numberArr));

const missingNumber = (array) =>
  array.find((x, i) => x + 1 !== array[i + 1]) + 1;

console.log(missingNumber(numberArr));

// 15.12.1
// let numbersArr = [1, 2, 3, 4, 5, 7];

// let b = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] - arr[i - 1] > 1) {
//       return arr[i - 1] + 1;
//     }
//   }
// };
// console.log(b(numbersArr));

// 15.2
const data = [
  {
    id: 1,
    first_name: "Lief",
    gender: "Female",
    car_model: "Corolla",
    car_year: 2002,
    shirt_size: "3XL",
  },
  {
    id: 2,
    first_name: "Danya",
    gender: "Male",
    car_model: "911",
    car_year: 2008,
    shirt_size: "XS",
  },
  {
    id: 3,
    first_name: "Marsha",
    gender: "Male",
    car_model: "V50",
    car_year: 2009,
    shirt_size: "XL",
  },
  {
    id: 4,
    first_name: "Clim",
    gender: "Genderqueer",
    car_model: "Sebring",
    car_year: 2000,
    shirt_size: "XS",
  },
  {
    id: 5,
    first_name: "Merlina",
    gender: "Polygender",
    car_model: "Corvette",
    car_year: 2012,
    shirt_size: "2XL",
  },
  {
    id: 6,
    first_name: "Danila",
    gender: "Genderfluid",
    car_model: "1 Series",
    car_year: 2011,
    shirt_size: "3XL",
  },
  {
    id: 7,
    first_name: "Homere",
    gender: "Male",
    car_model: "Sunbird",
    car_year: 1983,
    shirt_size: "S",
  },
  {
    id: 8,
    first_name: "Dayna",
    gender: "Non-binary",
    car_model: "Sigma",
    car_year: 1989,
    shirt_size: "2XL",
  },
  {
    id: 9,
    first_name: "Chickie",
    gender: "Agender",
    car_model: "Esteem",
    car_year: 1997,
    shirt_size: "L",
  },
  {
    id: 10,
    first_name: "Haley",
    gender: "Bigender",
    car_model: "Neon",
    car_year: 1999,
    shirt_size: "XL",
  },
  {
    id: 11,
    first_name: "Ajay",
    gender: "Genderqueer",
    car_model: "Edge",
    car_year: 2012,
    shirt_size: "3XL",
  },
  {
    id: 12,
    first_name: "Cyb",
    gender: "Bigender",
    car_model: "Tahoe",
    car_year: 2009,
    shirt_size: "XS",
  },
  {
    id: 13,
    first_name: "Ewell",
    gender: "Agender",
    car_model: "9-7X",
    car_year: 2007,
    shirt_size: "XS",
  },
  {
    id: 14,
    first_name: "Charyl",
    gender: "Genderqueer",
    car_model: "Sidekick",
    car_year: 1994,
    shirt_size: "XL",
  },
  {
    id: 15,
    first_name: "Ottilie",
    gender: "Genderfluid",
    car_model: "Continental GTC",
    car_year: 2012,
    shirt_size: "M",
  },
  {
    id: 16,
    first_name: "Sammy",
    gender: "Genderqueer",
    car_model: "Sonata",
    car_year: 2013,
    shirt_size: "XS",
  },
  {
    id: 17,
    first_name: "Giorgio",
    gender: "Genderfluid",
    car_model: "S40",
    car_year: 2011,
    shirt_size: "2XL",
  },
  {
    id: 18,
    first_name: "Cedric",
    gender: "Agender",
    car_model: "Thunderbird",
    car_year: 2006,
    shirt_size: "S",
  },
  {
    id: 19,
    first_name: "Holli",
    gender: "Non-binary",
    car_model: "Prius c",
    car_year: 2012,
    shirt_size: "2XL",
  },
  {
    id: 20,
    first_name: "Neil",
    gender: "Genderqueer",
    car_model: "Taurus",
    car_year: 2003,
    shirt_size: "M",
  },
  {
    id: 21,
    first_name: "Lynnett",
    gender: "Female",
    car_model: "Mirage",
    car_year: 1994,
    shirt_size: "M",
  },
  {
    id: 22,
    first_name: "Thacher",
    gender: "Genderqueer",
    car_model: "Navigator L",
    car_year: 2012,
    shirt_size: "S",
  },
  {
    id: 23,
    first_name: "Glenna",
    gender: "Non-binary",
    car_model: "Aero 8",
    car_year: 2008,
    shirt_size: "2XL",
  },
  {
    id: 24,
    first_name: "Nicol",
    gender: "Agender",
    car_model: "GTO",
    car_year: 1968,
    shirt_size: "XS",
  },
  {
    id: 25,
    first_name: "Bernadine",
    gender: "Non-binary",
    car_model: "928",
    car_year: 1991,
    shirt_size: "S",
  },
  {
    id: 26,
    first_name: "Joanna",
    gender: "Genderqueer",
    car_model: "S60",
    car_year: 2013,
    shirt_size: "XS",
  },
  {
    id: 27,
    first_name: "Celesta",
    gender: "Female",
    car_model: "Esprit",
    car_year: 2001,
    shirt_size: "L",
  },
  {
    id: 28,
    first_name: "Adi",
    gender: "Agender",
    car_model: "RAV4",
    car_year: 2008,
    shirt_size: "S",
  },
  {
    id: 29,
    first_name: "Nan",
    gender: "Non-binary",
    car_model: "Town Car",
    car_year: 2007,
    shirt_size: "3XL",
  },
  {
    id: 30,
    first_name: "Reynold",
    gender: "Female",
    car_model: "Blackwood",
    car_year: 2003,
    shirt_size: "2XL",
  },
  {
    id: 31,
    first_name: "Raina",
    gender: "Non-binary",
    car_model: "Tempo",
    car_year: 1987,
    shirt_size: "S",
  },
  {
    id: 32,
    first_name: "Eward",
    gender: "Non-binary",
    car_model: "Milan",
    car_year: 2008,
    shirt_size: "2XL",
  },
  {
    id: 33,
    first_name: "Teresa",
    gender: "Genderqueer",
    car_model: "Econoline E150",
    car_year: 1997,
    shirt_size: "3XL",
  },
  {
    id: 34,
    first_name: "Delmar",
    gender: "Female",
    car_model: "Legend",
    car_year: 1990,
    shirt_size: "XL",
  },
  {
    id: 35,
    first_name: "Koral",
    gender: "Agender",
    car_model: "B-Series",
    car_year: 1992,
    shirt_size: "3XL",
  },
  {
    id: 36,
    first_name: "Karil",
    gender: "Non-binary",
    car_model: "MR2",
    car_year: 1986,
    shirt_size: "S",
  },
  {
    id: 37,
    first_name: "Stepha",
    gender: "Polygender",
    car_model: "Daewoo Magnus",
    car_year: 2004,
    shirt_size: "S",
  },
  {
    id: 38,
    first_name: "Jaclyn",
    gender: "Genderfluid",
    car_model: "Grand Marquis",
    car_year: 2000,
    shirt_size: "M",
  },
  {
    id: 39,
    first_name: "Peria",
    gender: "Polygender",
    car_model: "Evora",
    car_year: 2011,
    shirt_size: "2XL",
  },
  {
    id: 40,
    first_name: "Cecelia",
    gender: "Genderfluid",
    car_model: "Accent",
    car_year: 1998,
    shirt_size: "L",
  },
  {
    id: 41,
    first_name: "Katha",
    gender: "Female",
    car_model: "RDX",
    car_year: 2011,
    shirt_size: "XS",
  },
  {
    id: 42,
    first_name: "Beverie",
    gender: "Male",
    car_model: "Probe",
    car_year: 1992,
    shirt_size: "2XL",
  },
  {
    id: 43,
    first_name: "Pavla",
    gender: "Polygender",
    car_model: "Colt",
    car_year: 1994,
    shirt_size: "XL",
  },
  {
    id: 44,
    first_name: "Sonnie",
    gender: "Non-binary",
    car_model: "Impreza",
    car_year: 2012,
    shirt_size: "3XL",
  },
  {
    id: 45,
    first_name: "Jordan",
    gender: "Genderqueer",
    car_model: "Cougar",
    car_year: 1994,
    shirt_size: "2XL",
  },
  {
    id: 46,
    first_name: "Court",
    gender: "Female",
    car_model: "Civic",
    car_year: 2005,
    shirt_size: "2XL",
  },
  {
    id: 47,
    first_name: "Berton",
    gender: "Female",
    car_model: "xB",
    car_year: 2012,
    shirt_size: "2XL",
  },
  {
    id: 48,
    first_name: "Maryl",
    gender: "Bigender",
    car_model: "LaCrosse",
    car_year: 2010,
    shirt_size: "XS",
  },
  {
    id: 49,
    first_name: "Robinson",
    gender: "Non-binary",
    car_model: "Dakota",
    car_year: 1992,
    shirt_size: "XS",
  },
  {
    id: 50,
    first_name: "Nerissa",
    gender: "Male",
    car_model: "F150",
    car_year: 2002,
    shirt_size: "3XL",
  },
];

// 15.2.1
let maleCount = data.filter((item) => item.gender === "Male").length;
console.log("maleCount", maleCount);

// 15.2.2
let hasNewCar = data
  .filter((item) => item.car_year > 2000)
  .map((item) => item.id);
console.log("hasNewCar", hasNewCar);

// 15.2.3
let hasXSS = data
  .filter((item) => item.shirt_size.includes("S"))
  .sort((a, b) => (a.first_name > b.first_name ? 1 : -1));
console.log("hasXSS", hasXSS);

// 15.2.4 ---> 1 budas
let nameShirtSize = hasXSS.map((item) => ({
  id: item.id,
  first_name: item.first_name,
  shirt_size: item.shirt_size,
}));
console.log("nameShirtSize", nameShirtSize);
// [
//   { id: 28, first_name: "Adi", shirt_size: "S" },
//   { id: 25, first_name: "Bernadine", shirt_size: "S" },
//   { id: 18, first_name: "Cedric", shirt_size: "S" },
//   { id: 4, first_name: "Clim", shirt_size: "XS" },
// ];
// 15.2.4 ---> 2 budas
let nameShirtSize2 = hasXSS.map((item) => {
  let { gender, car_model, car_year, ...other } = item;
  return other;
});
console.log("nameShirtSize2", nameShirtSize2);
// ];
// 15.2.4 ---> 3 budas
let nameShirtSize3 = hasXSS.map(({ id, first_name, shirt_size }) => ({
  id,
  first_name,
  shirt_size,
}));
console.log("nameShirtSize3", nameShirtSize3);

// 16.1 - 2
function Car(brand, model, engine, price) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.basePrice = price;
  this.getPrice = function () {
    let additionalPrice = 0;
    if (this.engine === "electric") additionalPrice = 1000;
    else if (this.engine === "diesel") additionalPrice = 5000;
    return this.basePrice + additionalPrice;
  };
  this.turnOn = function () {
    alert(`${brand}, vrooom`);
  };
}
const tesla = new Car("tesla", "b11", "diesel", 40000);
//tesla.turnOn();
const audi = new Car("audi", "bulka", "petrol", 21000);
//audi.turnOn();

console.log("tesla.getPrice()", tesla.getPrice());
// 16.2
// tesla.basePrice = 12000;
// audi.basePrice = 8000;
// tesla.getPrice = function () {
//   let price = this.basePrice + 10000;
//   alert(price);
// };
// tesla.getPrice();

// 17.1 add input value to table
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.addToTable = function () {
    const nameColumn = document.createElement("td");
    nameColumn.textContent = this.name;
    const surnameColumn = document.createElement("td");
    surnameColumn.textContent = this.surname;
    const tableRow = document.createElement("tr");
    tableRow.append(nameColumn, surnameColumn);
    const tableEl = document.querySelector("#full-name-table");
    tableEl.append(tableRow);
  };
}

const capitalizeText = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

const fullNameFormEl = document.querySelector("#full-name-form");
fullNameFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let fullName = event.target.elements["full-name"].value;
  let [name, surname] = fullName
    .trim()
    .split(" ")
    .map((word) => capitalizeText(word));

  console.log("fullName", name, surname);
  const person = new Person(name, surname);
  person.addToTable();
});
