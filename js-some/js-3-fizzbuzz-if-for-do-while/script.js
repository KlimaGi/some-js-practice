// console.log("----1 level-----");

// // 123 + 456 = 576;
// let correct1 = 579;
// // arciausiai zemes zvaigzde? saule
// let correct2 = "sun";

// let playerAnswear1 = correct1;
// let playerAnswear2 = "moon";
// let whichWrong = 2;

// if (playerAnswear1 === correct1 && playerAnswear2 === correct2) {
//   console.log("You are on the next level");
// } else if (playerAnswear1 === correct1 || playerAnswear2 === correct2) {
//   if (whichWrong === 2) console.log("You are on the next level");
//   else console.log("You stay on the same level");
// } else {
//   console.log("You stay on the same level");
// }

// console.log("----2 level-----");
// // 2 teisingi
// // 1 teisingas, parasyti kuris neteisingas
// let correct3 = 1;
// let correct4 = 2;
// let answear3 = correct3;
// let answear4 = 2;
// let wrong2 = 1;
// if (answear3 === correct3 && answear4 === correct4)
//   console.log("You are on the next level");
// else if (answear3 === correct3 || answear4 === correct4) {
//   if (wrong2 === 2) console.log("You are on the next level");
//   else console.log("You stay on the same level");
// } else console.log("You stay on the same level");

// console.log("----3 level-----");
// // 3 ats teisingai
// // 2 teisingi, pasakyti kuris ats neteisingas
// // atsakyta maziau nei 2 klausimai teisingai, pasakyti kuris ats teisingas
// let correct5 = 5;
// let correct6 = 6;
// let correct7 = 7;
// let answear5 = correct5;
// let answear6 = correct6;
// let answear7 = 2;
// let wrong3 = 1;
// let whichRight = 1;

// // ----------- ciklai -----------
// {
//   let word = "cube";
//   let count = 3;
//   for (let i = count; i > 0; i--) {
//     console.log(`${i}--${word}`);
//   }
//   let i = 0;
//   while (i < 4) {
//     console.log(i);
//     i++;
//   }
// }

function perimKv(x, y, units) {
  let result = (x + y) * 2;
  let text = `Staciakampio plotas yra ${result} ${units}.`;
  return text;
}

function perimTr(x, y, units) {
  let result = (x + y) / 2;
  let text = `Staciojo trikampio plotas yra ${result} ${units}.`;
  return text;
}

function renderText(hight, width, units = "vnt") {
  let htmlElement = document.querySelector("h2");
  let rectText = perimKv(hight, width, units);
  let triangleText = perimTr(hight, width, units);

  htmlElement.textContent = rectText + " " + triangleText;
}
//renderText(13, 55);

//-------------------

// for (let i = 0; i <= 15; i++) {
//   if (i <= 5 || i >= 10) console.log("--" + i);
// }

function loop1() {
  let arr = [];
  for (let i = 5; i >= 0; i--) {
    arr.push(i * 2);
  }
  console.log(arr);
}
//loop1();

function loop2() {
  let arr = [];
  for (let i = 5; i >= 0; i--) {
    arr.push(i * 5);
  }
  console.log(arr);
}
//loop2();

function loop3() {
  let arr = [];
  for (let i = 5; i >= 0; i--) {
    arr.push(i + 5);
  }
  console.log(arr);
}
//loop3();

function loop4(count, nth, begin) {
  let arr = [];
  for (let i = count; i >= begin; i -= nth) {
    arr.push(`${i} - 2 = ${i - 2}`);
  }
  console.log(arr);
}
//loop4(5, 1, 0);

function loop5() {
  let arr = [];
  for (let i = 5; i >= 0; i--) {
    arr.push(i * i);
  }
  console.log(arr);
}
//loop5();
// -------- jei neveiktu sugaudymas
function loop6(end, nth, begin) {
  if (nth < 1 || begin > end) return;

  let arr = [];
  for (let i = begin; i <= end; i += nth) {
    arr.push(Math.pow(i, 3));
  }
  console.log(arr);
}
//loop6(5, 1, 0); // [0, 1, 8, 27, 64, 125]

//fizz buzz

function fizzBuzz(count, nth, begin) {
  for (let i = begin; i <= count; i += nth) {
    let write =
      (i % 3 ? "" : "Fizz") +
        (i % 5 ? "" : "Buzz") +
        (i % 7 ? "" : "Biff") +
        (i % 9 ? "" : "Fuzz") +
        (i % 11 ? "" : "Ziff") || i;
    console.log(write);
  }
}
//fizzBuzz(5, 1, 1);

function fizzBuzz1(begin, end, nth) {
  let list = document.querySelector("ul");
  if (begin > end) return (list.innerHTML = `<li>0</li>`);

  for (let i = begin; i <= end; i += nth) {
    let output = "";

    i % 3 === 0 && (output += "Fizz");
    !(i % 5) && (output += "Buzz");
    !(i % 7) && (output += "Biff");
    !(i % 9) && (output += "Fuzz");
    !(i % 11) && (output += "Ziff");
    output === "" && (output += i);

    // console.log(output);
    list.innerHTML += `<li>${output}</li>`;
  }
}
fizzBuzz1(10, 0, 1);

// -------------------------- do while
function combo(count) {
  let com = "";
  const word = "Yo";
  let num = count;
  do {
    com += word;
    num--;
  } while (num > 0);
  console.log(com);
}
//combo(0);

//-------------------------------------------------------------
let lor = "Lorem ipsum dolor sit amet";
function change(lor, func = undefined) {
  let len;
  let byOne = lor.split(" ");
  if (func !== undefined) byOne.map((a) => func(a.length));
  else {
    len = byOne.map((a) => a.length);
    console.log(len);
  }
}
//change(lor, combo);
// console.log(change(lor));

// function show() {
//   let arr = change(lor);
//   let result = arr.map((el) => combo(el));
// }
// show();
let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function calculator(a, b, func) {
  console.log(func(a, b));
}

//calculator(3, 6, divide);
//calculator(3, 6, substract);
//calculator(3, 6, add);
//calculator(3, 6, multiply);

//

// let arr = [];
// for (let i = 0; i <= 50; i++) {
//   arr.push(Math.floor(Math.random() * 10) * -1);
// }
// for (let i = 0; i <= 50; i++) {
//   arr.push(Math.floor(Math.random() * 10));
// }
// console.log(arr);

// let inter = [];
// for (let i = 0; i <= 50; i++) {
//   inter.push(Math.floor(Math.random() * (10 - -10 + 1) + -10));
// }
// console.log(inter);
// console.log(inter.sort((a, b) => a - b));

function randomInterval(min, max, numOfItems) {
  for (let i = 0; i <= numOfItems; i++) {
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
  }
}
//randomInterval(-25, 75, 100);
