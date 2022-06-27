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
