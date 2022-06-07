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

// 6 isimti 2 ir 4 is listo
let task6 = arr1.slice(1, 2);
console.log("task6", task6);

let task61 = arr1.slice(3, 4);
console.log("task61", task61);

// task6.push(task61[0]);
// console.log("task6", task6);

let task62 = task6.concat(task61);
console.log("task62", task62);

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
// let removefirst = arr2.shift();
// console.log(arr2);
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

//12 list ekrane, prideti eiles nr
//let list = document.querySelector("ul");
// list.innerHTML += `<li>1. ${arr2[0]}</li>`;
// list.innerHTML += `<li>2. ${arr2[1]}</li>`;

function listMovies(arr) {
  let list = document.querySelector("ul");

  for (let i = 0; i < arr.length; i++) {
    list.innerHTML += `<li>${i + 1}. ${arr[i]}</li>`;
  }
}
//listMovies(arr2);
let rev = arr2.reverse();

//13 filmai turi datas
const moviesD = [
  { name: "filmas1", year: 2001 },
  { name: "filmas2", year: 2006 },
  { name: "filmas3", year: 2011 },
  { name: "filmas4", year: 2021 },
  { name: "", year: 2014 },
  { name: "filmas6" },
];
function listMoviesD(arr) {
  let list = document.querySelector("ul");
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].name) continue;
    list.innerHTML += `<li>${i + 1}. ${arr[i].name}, ${
      arr[i].year || ""
    } </li>`;
  }
}
//listMoviesD(moviesD);

// 14.1 dar 2 filmu arr, i ekrana isvesti kaip viena list'a
const moviesD1 = [
  { name: "filmas7", year: 2021 },
  { name: "filmas8", year: 2020 },
  { name: "filmas9", year: 2018 },
];
const moviesD2 = [
  { name: "filmas10", year: 2017 },
  { name: "filmas11", year: 2021 },
  { name: "filmas12", year: 2019 },
];

const oneArr = moviesD.concat(moviesD1).concat(moviesD2);
console.log(oneArr);
//listMoviesD(oneArr);

// movies with arr
let moviesWithYearList = [
  [`filmas1`, 2001],
  [`filmas2`, 2011],
  [`filmas3`, 2009],
  [`filmas4`, 2016],
  [`filmas5`],
  [`filmas6`, 2021],
];

function moviesWithYearList2(moviesarr) {
  let moviesListElement = document.querySelector("ul");

  for (let i = 0; i < moviesarr.length; i++) {
    let num = i + 1;
    let movieName = moviesarr[i][0];
    //let movieYear = moviesarr[i][1] || "";
    let movieYear = moviesarr[i][1] ? `(${moviesarr[i][1]})` : "";

    moviesListElement.innerHTML += `<li>${num}. ${movieName} ${movieYear} </li>`;
  }
}
//moviesWithYearList2(moviesWithYearList);

// more arr
let movies1 = [
  "filmas1",
  "filmas2",
  "filmas3",
  "filmas4",
  "filmas5",
  "filmas6",
];
let movies2 = ["filmas11", "filmas12", "filmas13"];
let movies3 = ["filmas14", "filmas15", "filmas16"];

//let allM = [];
//allM.push(movies1, movies2);
let allM = [movies1, movies2];
console.log(allM);
console.log(allM.length);

function nestedArr(moviesArr) {
  let moviesListElement = document.querySelector("ul");
  let movieNum = 1;
  for (let i = 0; i < moviesArr.length; i++) {
    let innerMoviesArr = moviesArr[i];

    for (let j = 0; j < innerMoviesArr.length; j++) {
      let movieName = innerMoviesArr[j];
      console.log("movieName", movieName);
      moviesListElement.innerHTML += `<li>${movieNum}. ${movieName}</li>`;
      movieNum++;
    }
  }
}
//nestedArr(allM);

// with just arr
console.log("allM", allM);
let allMoviesConcat = movies1.concat(movies2, movies3);
console.log(allMoviesConcat);

let allMoviesFlat = allM.flat(Infinity); // flat() nemodifikuoja originalo
console.log(allMoviesFlat);

function listMoviesSo(arr) {
  let list = document.querySelector("ul");

  for (let i = 0; i < arr.length; i++) {
    list.innerHTML += `<li>${i + 1}. ${arr[i]}</li>`;
  }
}
//listMoviesSo(allMoviesFlat);

// spread
let allMoviesSpread = [...movies1, ...movies2, ...movies3];
console.log("allMoviesSpread", allMoviesSpread);
listMoviesSo(allMoviesSpread);

// Map

console.log("---------Map-------");
let citiesArr = ["Vln", "Klp", "Kau", "Sl", "Pan"];

citiesArr.map((city, index) => console.log(index + 1, city));

// perdaryti funkcijas su map
// UŽDUOTIS (papildoma):
// 1. Sukurti 10-ies skaičių masyvą.
// 2. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų vidurkį.
// 2.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) vidurkis yra 15"
// 3. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų medianą.
// 3.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mediana yra 15"
// 4. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausia jame esantį skaičių.
// 4.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) didžiausias skaičius yra 15"
// 5. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią jame esantį skaičių.
// 5.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mažiausias skaičius yra 1"
// 6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina n-tąjį skaičių pagal dydį (skaičiuojant nuo mažiausio iki didžiausio).
// 6.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) trečias skaičius pagal dydį yra 3"
