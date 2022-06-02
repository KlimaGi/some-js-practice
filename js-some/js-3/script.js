console.log("----1 level-----");

// 123 + 456 = 576;
let correct1 = 579;
// arciausiai zemes zvaigzde? saule
let correct2 = "sun";

let playerAnswear1 = correct1;
let playerAnswear2 = "moon";
let whichWrong = 2;

if (playerAnswear1 === correct1 && playerAnswear2 === correct2) {
  console.log("You are on the next level");
} else if (playerAnswear1 === correct1 || playerAnswear2 === correct2) {
  if (whichWrong === 2) console.log("You are on the next level");
  else console.log("You stay on the same level");
} else {
  console.log("You stay on the same level");
}

console.log("----2 level-----");
// 2 teisingi
// 1 teisingas, parasyti kuris neteisingas
let correct3 = 1;
let correct4 = 2;
let answear3 = correct3;
let answear4 = 2;
let wrong2 = 1;
if (answear3 === correct3 && answear4 === correct4)
  console.log("You are on the next level");
else if (answear3 === correct3 || answear4 === correct4) {
  if (wrong2 === 2) console.log("You are on the next level");
  else console.log("You stay on the same level");
} else console.log("You stay on the same level");

console.log("----3 level-----");
// 3 ats teisingai
// 2 teisingi, pasakyti kuris ats neteisingas
// atsakyta maziau nei 2 klausimai teisingai, pasakyti kuris ats teisingas
let correct5 = 5;
let correct6 = 6;
let correct7 = 7;
let answear5 = correct5;
let answear6 = correct6;
let answear7 = 2;
let wrong3 = 1;
let whichRight = 1;

// ----------- ciklai -----------
{
  let word = "cube";
  let count = 3;
  for (let i = count; i > 0; i--) {
    console.log(`${i}--${word}`);
  }
  let i = 0;
  while (i < 4) {
    console.log(i);
    i++;
  }
}

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
renderText(13, 55);
