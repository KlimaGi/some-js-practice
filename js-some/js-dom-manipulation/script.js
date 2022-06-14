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
