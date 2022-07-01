//console.log(document.location);

let btnEl = document.querySelector("button");
btnEl.addEventListener("click", () => {
  // document.location.replace("http://google.com");
  //document.location.replace("/about.html");
});

const car = {
  doors: 4,
  color: "powderblue",
  brand: "tesla",
};

//console.log(car.doors);
// 10.2
const formEl = document.querySelector("#person");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const person = {
    name: event.target.elements.name.value,
    surname: event.target.elements.surname.value,
  };
  console.log(person.name);
  console.log(person.surname);
});

// 10.3
const formAgeLegal = document.querySelector("#form-age-legal");
formAgeLegal.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = event.target.elements.name.value;
  let age = Number(event.target.elements.age.value);
  const isLegalAge = age >= 18;

  const person = {
    name,
    isLegalAge,
  };
  console.log(person);
});

// 11
const header = document.createElement("h1");
const footer = document.createElement("h1");
header.textContent = "JS dom elements creation";
header.style.color = "crimson";
footer.textContent = "JS dom elements creation";
footer.style.color = "crimson";
document.body.prepend(header);
document.body.append(footer);

// 11.1
const title = document.createElement("span");
title.textContent = "Very important title";
title.style.color = "steelblue";
document.body.append(title);

// 11.2
const ulEl = document.createElement("ul");
const liEl = document.createElement("li");
document.body.append(ulEl);
const cars = ["tesla", "maseratti", "lamborgini"];
cars.map((car) => {
  const liEl = document.createElement("li");
  liEl.textContent = car;
  ulEl.append(liEl);
});

// 11.3
const divEl = document.createElement("div");
divEl.style.background = "powderblue";
divEl.style.padding = "6rem";
document.body.append(divEl);

const mainEl = document.createElement("main");
mainEl.style.background = "whitesmoke";
mainEl.style.width = "50%";
mainEl.style.margin = "1rem auto";
mainEl.style.padding = "1rem";
mainEl.style.borderRadius = "5px";
mainEl.style.textAlign = "center";
divEl.append(mainEl);

const imgEl = document.createElement("img");
imgEl.src =
  "https://static.parade.com/wp-content/uploads/2020/07/iStock-586699164.jpg";
imgEl.style.width = "10rem";
imgEl.style.height = "10rem";
imgEl.style.objectFit = "cover";
imgEl.style.borderRadius = "50%";
imgEl.style.padding = "0.5rem";
imgEl.style.border = "1px solid powderblue";
imgEl.style.marginTop = "-6.5rem";

mainEl.append(imgEl);

const nameEl = document.createElement("h2");
nameEl.textContent = "Oscar";
mainEl.append(nameEl);

const emailEl = document.createElement("h2");
emailEl.textContent = "oscar@mail.com";
emailEl.style.fontSize = "1.2rem";
emailEl.style.color = "grey";
mainEl.append(emailEl);
