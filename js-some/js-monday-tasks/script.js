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

console.group("cao");

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
console.log(["winPosibility", winPosibility]);
console.groupEnd();

// --------
document.getElementById("subTitle").innerHTML =
  "<h3 style='color:purple'>DOM tasks</h3>";

// resultatas []
document.getElementsByClassName("text")[0].textContent = "Lorem";
document.getElementsByClassName("text")[3].textContent = "ipsum";

document.getElementById("subTitle").innerHTML =
  "<h3 style='color:purple'>Gi</h3>";

document.getElementsByClassName("li")[2].textContent = "liuu";

document.querySelector("p").textContent = "So";

document.querySelector("li:last-child").textContent = "second blue lorem";

// DOM task-3
document.querySelector("p.bluetext span").textContent = "blue";

const firstLi = document.querySelector("ol li:first-child");
const secondLi = document.querySelector("ol li:nth-child(2)");

let bmw = firstLi.textContent;
let vw = secondLi.textContent;

firstLi.textContent = vw;
secondLi.textContent = bmw;
