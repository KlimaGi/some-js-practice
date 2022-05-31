// 0

// let age = 18;
// if (age < 6) console.log("neina i mokykla");
// else if (age <= 10) console.log("eina i pradine klase");
// else if (age <= 14) console.log("eina i pagrindine klase");
// else if (age <= 18) console.log("eina i gimnazija");
// else if (age >= 19) console.log("mokykla baige");

// 0.1.
// let num = Number(prompt("iveskite skaiciu"));
// if (num === 1) console.log("labai blogai");
// else if (num === 2) console.log("blogai");
// else if (num === 3) console.log("vidutiniskai");
// else if (num === 4) console.log("gerai");
// else if (num === 5) console.log("puikiai");
// else console.log("iveskite skaiciu (1-5)");

// 0.2.
// let color = "pink";
// switch (color) {
//   case "red":
//     console.log("stop");
//     break;
//   case "yellow":
//     console.log("be ready");
//     break;
//   case "green":
//     console.log("go");
//     break;
//   default:
//     console.log("broken");
// }
// 1.
//let age = Number(prompt("iveskite amziu"));

let pElement = document.getElementById("#tx");
// pElement.textContent = "Sveikas";

// day task 05-31
let personName = "John";
let isLoggedIn = true;
let time = 21;
let isBirthday = false;

let dayPart;
if (time >= 5 && time <= 12) dayPart = "Morning";
else if (time >= 13 && time <= 18) dayPart = "Afternoon";
else if (time >= 19 || time <= 4) dayPart = "Evening";
let hello = `Good ${dayPart}`;

if (isBirthday && isLoggedIn)
  console.log(hello.concat(`, ${personName} and have a great birthday!`));
else if (isLoggedIn) console.log(hello.concat(`, ${personName}.`));
else console.log(hello.concat("..."));
