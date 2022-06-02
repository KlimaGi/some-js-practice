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

// day task 05-31 --- 0.3
// let personName = "John";
// let isLoggedIn = true;
// let time = 21;
// let isBirthday = false;

function greeting(personName, isLoggedIn, time, isBirthday) {
  let htmlElement = document.querySelector("h2");
  let dayPart;
  if (time >= 5 && time <= 12) dayPart = "Good Morning";
  else if (time >= 13 && time <= 18) dayPart = "Good Afternoon";
  else if ((time >= 19 && time < 24) || time <= 4) dayPart = "Good Evening";
  else dayPart = "Hello";

  let text;
  if (isBirthday && isLoggedIn)
    text = `, ${personName} and have a great birthday!`;
  else if (isLoggedIn) text = `, ${personName}.`;
  else text = "...";

  htmlElement.textContent = dayPart + text;
}
greeting("John", true, 31, true);

// 1.
// let age = 18;
// let hasCarRights = true;
// let isDrunk = false;

// if (age >= 18 && hasCarRights && !isDrunk) console.log("You can ride a car");
// else console.log("You can't ride a car");

// 2.
// let personName = "Suzi";
// let city = "Kaunas";
// let hello = `Hello, ${personName}`;

// let what = "";
// //console.log(hello);
// if (city === "Vilnius") what = "green";
// else if (city === "Kaunas") what = "sunny";
// else if (city === "Klaipeda") what = "rainy";
// console.log(hello.concat(` from ${what} ${city}.`));

//3.
// let person = {
//   name: "John",
//   gender: "",
//   age: 27,
//   pet: "cat",
// };
// if (person.gender === "male") console.log(`Hello, Mr. ${person.name}`);
// else if (person.gender === "female") console.log(`Hello, Ms. ${person.name}`);
// else console.log(`Helo, ${person.name}`);

//4.
// let month = "05";
// let season = "";
// switch (month) {
//   case "12":
//   case "01":
//   case "02":
//     season = "winter";
//     break;
//   case "03":
//   case "04":
//   case "05":
//     season = "spring";
//     break;
//   case "06":
//   case "07":
//   case "08":
//     season = "summer";
//     break;
//   case "09":
//   case "10":
//   case "11":
//     season = "autumn";
//     break;
//   default:
//     console.log("lets write number of month");
// }
// console.log(season);

// 5.
// let name = ["Brigita", "Vilte", "Lukas"];
// let personName = name[1];
// let result = personName
//   .split("")
//   .slice(0, personName.length - 1)
//   .join("");
// let last = personName
//   .split("")
//   .slice(personName.length - 1, personName.length)
//   .join();

// let ref = "";
// if (last === "s") ref = result.concat("i");
// else ref = personName;
// console.log(`Labas, ${ref}`);

let say = document.querySelector("p");
say.textContent = "Sveiki";
