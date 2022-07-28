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
