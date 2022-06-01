console.log("----1 level-----");

// 123 + 456 = 576;
let correct1 = 579;
// arciausiai zemes zvaigzde? saule
let correct2 = "sun";

let playerAnswear1 = correct1;
let playerAnswear2 = "moon";
let whichWrong = 2;

if (playerAnswear1 === correct1 && playerAnswear2 === correct2) {
  console.log("You are in a next level");
} else if (playerAnswear1 === correct1 || playerAnswear2 === correct2) {
  if (whichWrong === 2) console.log("You are in a next level");
  else console.log("You stay in same level");
} else {
  console.log("You stay in same level");
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
  console.log("You are in next a level");
else if (answear3 === correct3 || answear4 === correct4) {
  if (wrong2 === 2) console.log("You are in next level");
  else console.log("You stay in same level");
} else console.log("You stay in same level");

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

//

let perimKv = (x, y) => (x + y) * 2;
console.log(perimKv(10, 10));
console.log(perimKv(10, 25));

let perimTr = (x, y) => (x + y) / 2;
console.log(perimTr(10, 10));
console.log(perimTr(10, 25));
