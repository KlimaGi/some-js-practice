// -------------------
let paragraph = document.querySelector("p.so");
paragraph.textContent = "labas";
paragraph.innerHTML = 'Labas <span style="color: red;">vakaras</span>';

let spanEl = document.createElement("span");
spanEl.textContent = "!";

// prideda su js sukurta el i pabaiga
paragraph.append(spanEl);
// prideda su js sukurta el i pradzia
paragraph.prepend(spanEl);
// prideda su js sukurta el po kitu el
paragraph.after(spanEl);
// prideda su js sukurta el pries kita el
paragraph.before(spanEl);

// pasalina HTML el is DOM
spanEl.remove();

let newParagraph = document.createElement("p");
newParagraph.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, iure!";

paragraph.after(newParagraph);

// budas pakeisti HTML elemento klases
newParagraph.className = "pirma-klase antra-klase";
console.log(newParagraph.className);
//
newParagraph.className += " trecica-klase";
console.log(newParagraph.className);
// prideda clase prie HTML elemento, bet neperraso
newParagraph.classList.add("ketvirta-klase", "penkta-klase");
console.log(newParagraph.className);

// pasalinti klase
newParagraph.classList.remove("pirma-klase");
console.log(newParagraph.className);

// prideda klase prie HTML el, jeigu tokios klases neturi ir pasalina jei turi
newParagraph.classList.toggle("toggle");
console.log(newParagraph.className);
newParagraph.classList.toggle("toggle");
console.log(newParagraph.className);
newParagraph.classList.toggle("toggle");
console.log(newParagraph.className);

// patikrina ar HTML elementas turi nurodyta klase (grazina true arba fasle)
console.log(newParagraph.classList.contains("toggle"));

// keicia html el id
newParagraph.id = "paragrafo-id";
console.log(newParagraph.id);

//
let link = document.createElement("a");
link.textContent = "nuoroda";
newParagraph.after(link);

link.setAttribute("href", "https://www.google.com");
link.setAttribute("target", "_blank");
link.setAttribute("title", "cia yra nuoroda");
link.setAttribute("class", "nuorodos-klase");
link.setAttribute("class", "antra-nuorodos-klase");

link.removeAttribute("class");

link.style.border = "1px solid black";
link.style.padding = "5px 10px";

link.style = `background: green;
              color: white;
              font-size: 25px;
              display: inline-block;
              padding: 10px;`;

console.log("-----> dom");

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");
const h5 = document.querySelector("h5");

h1.addEventListener("click", () => {
  h1.style.color = "seagreen";
  h1.style.backgroundColor = "pink";
});

h2.addEventListener("click", () => {
  h2.style.fontSize = "50px";
});

//h3.addEventListener('click', ())//

function changeHeaderBorder() {
  h1.style.border = "2px solid purple";
  h5.style.border = "2px solid purple";
  h2.style.fontSize = "15px";
}

h3.addEventListener("click", changeHeaderBorder);
h4.addEventListener("click", changeHeaderBorder);

// ----- dom
let numbersEl = document.querySelector("#numbers");
let h3El = document.createElement("h3");
let buttonPlusEl = document.createElement("button");
let buttonMinusEl = document.createElement("button");
let buttonResetEl = document.createElement("button");
let buttonMinus2El = document.createElement("button");
let buttonPlus2El = document.createElement("button");
numbersEl.append(
  h3El,
  buttonPlusEl,
  buttonMinusEl,
  buttonResetEl,
  buttonMinus2El,
  buttonPlus2El
);

h3El.textContent = 0;
buttonPlusEl.textContent = "+";
buttonMinusEl.textContent = "-";
buttonResetEl.textContent = "reset";
buttonMinus2El.textContent = "-2";
buttonPlus2El.textContent = "+2";

buttonMinusEl.setAttribute("disabled", true);
buttonMinus2El.setAttribute("disabled", true);

buttonPlusEl.addEventListener("click", () => {
  let num = Number(h3El.textContent);
  num++;
  h3El.textContent = num;
  checkData();
});

buttonMinusEl.addEventListener("click", () => {
  let num = Number(h3El.textContent);
  num--;
  h3El.textContent = num;
  checkData();
});

buttonPlus2El.addEventListener("click", () => {
  let num = Number(h3El.textContent);
  num += 2;
  h3El.textContent = num;
  checkData();
});

buttonMinus2El.addEventListener("click", () => {
  let num = Number(h3El.textContent);
  num -= 2;
  h3El.textContent = num;
  checkData();
});

function checkData() {
  let currentNum = h3El.textContent;
  numInputEl.value = currentNum;

  if (currentNum < 10) buttonPlusEl.removeAttribute("disabled");
  else buttonPlusEl.setAttribute("disabled", true);

  if (currentNum < 9) buttonPlus2El.removeAttribute("disabled");
  else buttonPlus2El.setAttribute("disabled", true);

  if (currentNum > 1) buttonMinusEl.removeAttribute("disabled");
  else buttonMinusEl.setAttribute("disabled", true);

  if (currentNum > 2) buttonMinus2El.removeAttribute("disabled");
  else buttonMinus2El.setAttribute("disabled", true);

  changeColor();
}

function changeColor() {
  let currentNum = h3El.textContent;
  if (currentNum >= 5) h3El.style.color = "green";
  else h3El.style.color = "crimson";
}

// 13. Sukurti nauj?? element?? (h4) ir j?? prid??ti ?? ???numbers" elemento pabaig??.
let h4El = document.createElement("h4");
let ulEl = document.createElement("ul");
numbersEl.append(h4El, ulEl);
// 13.1. ??io elemento tekstas tur??t?? b??ti ???Balai:"
h4El.textContent = "Points";
// 14. Sukurti nauj?? element?? (ul) ir j?? prid??ti ?? ???numbers" elemento pabaig??.

// 14.1. Sukurti nauj?? mygtuk??, kurio teksta b??t?? ?????ra??yti bal??".
let buttonWrite = document.createElement("button");
buttonWrite.textContent = "write points";
numbersEl.append(buttonWrite);
// 14.2. Paspaudus ???? mygtuk??, reikia paimti reik??m?? i?? h3 elemento ir sukurti nauj?? li element?? bei j?? append'inti prie ul elemento.
buttonWrite.addEventListener("click", () => {
  let h3text = h3El.textContent;
  let newLi = document.createElement("li");
  newLi.textContent = h3text;

  if (h3text >= 5) newLi.style.color = "green";
  else newLi.style.color = "crimson";

  ulEl.prepend(newLi);

  newLi.addEventListener("click", () => {
    newLi.remove();
  });
});
// 14.3. Nuresetinti skai??iuokl??.
buttonResetEl.addEventListener("click", () => {
  //h3El.textContent = 1;
  h3El.style.color = "crimson";

  // let liAll = document.querySelectorAll("li");
  // liAll.forEach((el) => el.remove());

  resetForm();
});

function resetForm() {
  h3El.textContent = 1;
  numInputEl.value = 1;
  checkData();
}

// document.querySelector("ul li").forEach((li) => {
//   li.addEventListener("click", () => li.remove());
// });

// 11. sukurt input elementa
let numInputEl = document.querySelector("input");
numInputEl.setAttribute("type", "number");
numInputEl.setAttribute("value", "1");
numInputEl.setAttribute("min", "1");
numInputEl.setAttribute("max", "10");

numInputEl.addEventListener("change", () => {
  h3El.textContent = numInputEl.value;
  checkData();
});

// ---- papildoma uzduotis po CAO
// Sukurti kontakt?? form??. J?? pridavus (submit):
// 1. Kontakt?? forma turi i??sivalyti.
// 3. Kontakt?? formoje turi b??ti ??ie laukeliai:
// 1. Tekstinis laukelis vardui (privalomas).
// 2. Tekstinis laukelis pavardei (privalomas).
// 3. Skai??iaus laukelis am??iui (privalomas).
// 4. Laukelis ??vesti telefono numer?? (neprivalomas).
// 5. Laukelis ??vesti el. pa??t?? (privalomas).
// 6. Range tipo laukelis, kuris skirtas ??vertinti savo IT ??inias nuo 1 iki 10. Galimas vertinimas tik sveikiems skai??iams.
// 7. Radio tipo laukeliai, kuriuose pasirenkamas grup??s numeris. Turi b??ti galimyb?? pasirinkti grupes nuo TYPE 1gr. iki TYPE 15gr.
// 4. ??alia kiekvieno ??vesties (input) elemento, prid??ti label element??, kuris ??ymi laukelio pavadinim??.

// ANTRA DALIS:
// 1. Sukurti div element??, kuris tur??s id ???students-list".
// 2. Kiekvien?? kart?? pridavus form?? (submit), turi b??ti sukurtas naujas div elementas su klase ???student-item" ir pridedamas ?? ???students-list" elemento prad??i??.
// 3. Duomenys apie student?? turi b??ti ??d??ti ?? ???student-item" element??.
