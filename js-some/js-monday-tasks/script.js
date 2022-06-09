console.groupCollapsed("date");
// for + gali break ir return;

// forEach - negali: sustabdyti ir return atlikti
let arrF = [1, 2, 3, 4];
arrF.forEach((el) => console.log(el));

// ----- nieko negrazina
function nieko(par1) {
  console.log(par1 + " rytas");
}
let naudojamNieko = nieko("Labas");
//console.log(naudojamNieko); // undefined ,nes nieko() neturi return

// func kuri nieko negauna ir return'ina
function getCurrentDate() {
  let date = new Date().toISOString().split("T");
  let ats = date[0] + " " + date[1].split(".")[0];
  return ats;
}
let current = getCurrentDate();
console.log(["current", current]);
console.groupEnd();

console.groupCollapsed("");
console.groupEnd();

console.groupCollapsed("cao");

// [0, 1) - neiskaitant 1
const random = Math.floor(Math.random() * 10);
// [0, 1] - iskaitant 1
console.log(random);
const random1 = Math.floor(Math.random() * 10) + 1;
console.log(random1);

const cos = Math.cos(1);
console.log(cos);

// min and max are inclusive
let num = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(num(1, 5));
console.log(num(5, 12));

// ---- win posibility
let winPosibility = num(1, 5);
let winAnounce = winPosibility === 3 ? "you win" : "try again";
console.log(["winPosibility", winPosibility, winAnounce]);
console.groupEnd();

// --------
// document.getElementById("subTitle").innerHTML =
//   "<h3 style='color:purple'>DOM tasks</h3>";

// resultatas []

document.getElementsByClassName("text")[0].textContent = "Lorem";
document.getElementsByClassName("text")[3].textContent = "ipsum";
//console.log(document.getElementsByClassName("text"));

document.getElementById("subTitle").innerHTML =
  "<h3 style='color:pink'>Gi</h3>";

document.getElementsByClassName("li")[2].textContent = "liuu";

document.querySelector("li:last-child").textContent = "second blue lorem";

// DOM task-3
document.querySelector("p.bluetext span").textContent = "blue";

const firstLi = document.querySelector("ol li:first-child");
const secondLi = document.querySelector("ol li:nth-child(2)");

let bmw = firstLi.textContent;
let vw = secondLi.textContent;

firstLi.textContent = vw;
secondLi.textContent = bmw;

console.groupCollapsed("cao - 5 funkcijos ir eventai");
//1
function namew(word) {
  console.log(word);
}
namew("Gi");

//2
let rand = () => {
  let min = Math.ceil(5);
  let max = Math.floor(1);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log("rand", rand());
// 3
let wordsLength = (word1, word2) => {
  return word1.length + word2.length;
};
console.log("wordsLength", wordsLength("pieva", "suma"));
// 4
let abc = ["a", "b", "c", "d", "e", "f"];
let abcByNum = (num, arr) => arr[num];
console.log(abcByNum(1, abc));

// 5
function calculator(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case "sum":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "div":
      result = num1 / num2;
      break;
    case "multi":
      result = num1 * num2;
      break;
    default:
      console.error("There is no such operator");
  }
  return result;
}
console.log(calculator(1, 2, "sum"));
console.log(calculator(1, 2, "sub"));
console.log(calculator(1, 2, "div"));
console.log(calculator(2, 3, "multi"));

// 6
let rand1 = () => {
  let min = Math.ceil(1);
  let max = Math.floor(10);
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};
let square = (x) => x * x;
console.log("rand1", rand1());
let result = square(rand1());
console.log("result", result);
console.groupEnd();

// --------------- events ---------------
console.group("events");
const titleEl = document.querySelector("h4.title");
const btnEl = document.querySelector("button.btn");

btnEl.addEventListener("click", sayHello);

function sayHello() {
  titleEl.textContent = "Title about hello";
}

// 1-2
const btnName = document.querySelector("button.btnName");
btnName.addEventListener("click", sayName);

function sayName() {
  alert("Hi, Gi");
}
// 3

const btnAboutEl = document.querySelector("button.btnAbout");
const ptxtEl = document.querySelector("p.txtLorem");

btnAboutEl.addEventListener("click", showTxtAbout);

function showTxtAbout() {
  ptxtEl.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus voluptatem similique excepturi repudiandae quisquam.";
}

// 4
const btnCount = document.querySelector("button.btnCount");
const countEl = document.querySelector("h4.count");
let counter = 0;

btnCount.addEventListener("click", () => {
  counter++;
  countEl.innerText = counter;
});

console.groupEnd();

// 5
const noCopyEl = document.querySelector("p.nocopy");

noCopyEl.addEventListener("copy", () => {
  alert("Don't copy");
});

// 6
const btnGenerateNum = document.querySelector("button.generateNum");
const showNum = document.querySelector("h4.randNum");

btnGenerateNum.addEventListener("click", () => {
  let min = Math.ceil(50);
  let max = Math.floor(-50);
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  showNum.textContent = randomNum;
});

// 7
const btn18El = document.querySelector("button.has18");
const btnNot18El = document.querySelector("button.less18");
const text18El = document.querySelector("h4.text18");

btn18El.addEventListener("click", () => {
  text18El.textContent = "Alus";
});
btnNot18El.addEventListener("click", () => {
  text18El.textContent = "nepilnametis - nieko neturim";
});

// 8
const btn1El = document.querySelector("button.btn1");
const btn2El = document.querySelector("button.btn2");
const btn3El = document.querySelector("button.btn3");

function generate123() {
  let min = Math.ceil(1);
  let max = Math.floor(3);
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
}
let num123 = generate123();
console.log("randomNum", num123);

btn1El.addEventListener("click", () => {
  if (num123 === 1) alert("Yay");
  else alert("Nay");
});
btn2El.addEventListener("click", () => {
  if (num123 === 2) alert("Yay");
  else alert("Nay");
});
btn3El.addEventListener("click", () => {
  if (num123 === 3) alert("Yay");
  else alert("Nay");
});

// 9

const dontTxtEl = document.getElementById("output");
document.body.addEventListener("click", () => {
  const isButton = event.target.nodeName === "BUTTON";
  dontTxtEl.innerText = "Neklausote manes";
});
