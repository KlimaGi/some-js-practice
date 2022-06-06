console.groupCollapsed("metodai");
let arr = [1, 2, 3, 4];
// arr[4] = 5;
arr[arr.length] = 5;
console.log(arr);

let cities = ["Vilnius", "Kaunas", "Klaipeda", "Siauliai", "Panevezys"];
console.log(cities);

//remove last
let removeLast = cities.pop();
console.log("Original arr: ", cities);
console.log("Pasalinats el: ", removeLast);

// remove first
let removeFirst = cities.shift();
console.log("Original arr: ", cities);
console.log("Pasalinats el: ", removeFirst);

// add to end
cities.push("Jonava", "Jurbarkas");
console.log(cities);

// add to begin
cities.unshift("Taurage");
console.log(cities);

let countries = ["LT", "POL", "LA", "FR", "GR", "IT"];
// slice - nemutuoja origalo
console.log("-----slice------");
console.log(countries);
let slicedCountires = countries.slice(2);
console.log(slicedCountires);

let slicedCountires2 = countries.slice(0, 3);
console.log(slicedCountires2);

let slicedCountires3 = countries.slice(-3);
console.log(slicedCountires3);

let slicedCountires4 = countries.slice(-4, -2);
console.log("-4, -2", slicedCountires4);

let slicedCountires5 = countries.slice(2, -2);
console.log("2, -2", slicedCountires5);

let slicedCountires6 = countries.slice(0, 1);
console.log("0, 1", slicedCountires6);

console.log(countries);

// splice - keicia originala
let nums = [1, 2, 3, 4, 5, 6];

console.log("-----slice------");
console.log(nums);

// let splicedNum = nums.splice(3);
// let splicedNum = nums.splice(2, 1); // iskerpa nari (1 - nuo kelinto) ir (2 - kiek)
// let splicedNum = nums.splice(-1);
// let splicedNum = nums.splice(-3, 2);
// let splicedNum = nums.splice(2, 2, 10, 15, 45); // iskerpam ir iterpiam

let splicedNum = nums.splice(3, 0, 3.5); // iterpti i viduri, pasalinti nieko
console.log(splicedNum);

console.groupEnd();

console.groupCollapsed(" -----");
console.log("-----task 1------");
let arr1 = ["a", "b", "c", "d", "e", "f", "g"];
//1
let coupleItems = arr1.slice(0, 2);
console.log(coupleItems);
//2
let lastItems = arr1.slice(-3);
console.log(lastItems);
//3
let midle45 = arr1.slice(4, 6);
console.log(midle45);
//4
let midle23 = arr1.slice(2, 4);
console.log(midle23);
// 5
let allExceptOne = arr1.slice(1);
console.log(allExceptOne);

console.log("-----task 2------");
let arr2 = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

console.groupEnd();
//1
// let first5 = arr2.splice(0, 5);
// console.log(first5);
//2
//let last4 = arr2.splice(6);
// let last4 = arr2.splice(arr2.length - 4);
// console.log(last4);
//3
// let remove37 = arr2.splice(2, 5);
// console.log(remove37);
// console.log(arr2);
//4
// let remove23 = arr2.splice(1, 2);
// console.log(remove23);
// console.log(arr2);
//5
// let removeNot1 = arr2.splice(0, 1);
// console.log(removeNot1);
//6
// let remove5from3 = arr2.splice(2, 5);
// console.log(remove5from3);
// console.log(arr2);
//7
// let remove3fromEndLeaveLast = arr2.splice(-4, 3);
// console.log(remove3fromEndLeaveLast);
// console.log(arr2);
//8
// let instead5add2new = arr2.splice(4, 1, "some", "movie");
// console.log(instead5add2new);
// console.log(arr2);
//9
// let remove1 = arr2.splice(0, 1);
// console.log(remove1);
// console.log(arr2);
//10
// let add0 = arr2.splice(0, 0, "some");
// console.log(add0);
// console.log(arr2);
//11.1
// let remove3from2 = arr2.splice(1, 3);
// console.log(remove3from2);
// console.log(arr2);
//11.2
// let removeLast3fromBeforeLast = arr2.splice(-4, 3);
// console.log(removeLast3fromBeforeLast);
// console.log(arr2);
//11.3
// let reverseResult = removeLast3fromBeforeLast.reverse();
// console.log(reverseResult);

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
console.log(current);
