console.log(localStorage);
localStorage.setItem("testItem", "Labas");
console.log(localStorage);
//localStorage.clear();

localStorage.setItem("testItem", "sveikas");

let item = localStorage.getItem("testItem");
console.log(item);

localStorage.removeItem("testItem");
console.log(localStorage.getItem("testItem"));

let button = document.querySelector("button");

button.addEventListener("click", () => {
  let counter = Number(localStorage.getItem("counter"));
  let updatedCounter = counter + 1;

  localStorage.setItem("counter", updatedCounter);
});

let inputEl = document.querySelector("input");
inputEl.addEventListener("input", (event) => {
  console.log(inputEl.value);

  console.log(event.target.value);

  let inputValue = event.target.value;
  localStorage.setItem("inputStorageValue", inputValue);
});

let h3El = document.querySelector("h3");
h3El.textContent = localStorage.getItem("inputStorageValue");

inputEl.value = localStorage.getItem("inputStorageValue");

localStorage.setItem("testNumber", 2);
console.log(typeof localStorage.getItem("testNumber"));

let obj = {
  name: "John",
  surname: "Doe",
  age: 25,
};
console.log(obj);
console.log(typeof obj);

localStorage.setItem("obj", obj);
console.log(localStorage.getItem("obj"));
console.log(typeof localStorage.getItem("obj"));

//obje

console.log(obj);
console.log(typeof obj);
let strObj = JSON.stringify(obj);
console.log(strObj);
console.log(typeof strObj);

localStorage.setItem("obj", strObj);

let localStrObj = localStorage.getItem("obj");
console.log(localStrObj);

let localObj = JSON.parse(localStrObj);
console.log(localObj);
console.log(typeof localObj);
console.log(localObj.name);

// arr localStorage
const arr = ["vienas", "du", "trys", 4, "penki"];
console.log(arr);
console.log(typeof arr);

const strArr = JSON.stringify(arr);
console.log(strArr);
console.log(typeof strArr);

localStorage.setItem("arr", strArr);

let localStrArr = localStorage.getItem("arr");
console.log(localStrArr);

let localArr = JSON.parse(localStrArr);
console.log(localArr);
console.log(localArr[0]);
