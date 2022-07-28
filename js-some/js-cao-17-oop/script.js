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

  const person = new Person(name, surname);
  person.addToTable();
});

// 17.2
class Car {
  constructor(brand, model, mileage, price, image) {
    this.brand = brand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = image;
  }

  addToList() {
    let cardsWrapper = document.querySelector(".cars-cards-wrapper");
    const cardEl = document.createElement("div");
    cardEl.classList.add("card-item");
    cardEl.addEventListener("click", () => alert(`Price: ${this.price}`));

    const imgEl = document.createElement("img");
    imgEl.src = this.image;

    const textEl = document.createElement("h5");
    textEl.textContent = `${this.brand} ${this.model}`;

    cardEl.append(imgEl, textEl);

    cardsWrapper.append(cardEl);
  }
}

let carFormEl = document.querySelector("#cars-cards-form");
carFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const brand = event.target.elements["car-brand"].value;
  const model = event.target.elements["car-model"].value;
  const mileage = event.target.elements["car-mileage"].value;
  const price = event.target.elements["car-price"].value;
  const image = event.target.elements["car-image"].value;

  const car = new Car(brand, model, mileage, price, image);
  car.addToList();
});

// 17.3
let arrWithSameNum = [1, 3, 3, 5, 5, 5];
// ->1
let resultUniqueNum = arrWithSameNum.filter(
  (item, index) => arrWithSameNum.indexOf(item) === index
);
console.log("resultUniqueNum", resultUniqueNum);
//->2
let uniques = [...new Set(arrWithSameNum)];
console.log("uniques", uniques);
// -> 3
let arrUniques = [];
arrWithSameNum.forEach((item) => {
  if (!arrUniques.includes(item)) {
    arrUniques.push(item);
  }
});
console.log("arrUniques", arrUniques);

// 18.1
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    let text =
      this.age > 18 ? `${this.name} is adult` : `${this.name} is not adult`;
    // alert(text);
    console.log("text", text);
  }
}
const p1 = new Person1("Petras", 21);
p1.compareAge();

// 18.2
let arr1 = [1, 5, "a", "g", "z", 6];
let numArr = arr1.filter((x) => typeof x === "number");
console.log("numArr", numArr);

// 18.3
let text = "Zoe 123 Navigate";
let result = text
  .split("")
  .map((item) => (item.match(/[a-z]/i) ? item.repeat(2) : item))
  .join("");
console.log("result", result);

// 18.4

let postCode1 = "32453";
let postCode2 = "324ab";
let postCode3 = "32 ab";

let isCorrect = (text) => {
  let resultText;
  let isNoGaps = text.length === text.split(" ").join("").length;
  if (!isNoGaps) return (resultText = "incorrect");

  let is5Number = /[0-9]{5}/.test(text);
  if (is5Number) return (resultText = "correct");

  let is3Nums2Letters = /[0-9]{3}[A-Za-z]{2}$/.test(text);
  if (is3Nums2Letters) return (resultText = "correct");

  return (resultText = "incorrect");
};
let resultText = isCorrect(postCode3);
console.log("resultText", resultText);

// 18.5
let arrjazz = ["Ge", "F7", "C3"];
let jazzify = (arr) =>
  arr.map((item) => {
    let end = item.slice(-1);
    if (end == "7") return item;
    else return item.concat("7");
  });

console.log("jazzify", jazzify(arrjazz));
