let chuckJokeEl = document.querySelector("#chuck-joke");
let button = document.querySelector("#new-joke");

button.addEventListener("click", newJoke);

function newJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => {
      chuckJokeEl.textContent = "Loading...";
      return res.json();
    })
    .then((joke) => {
      //console.log(joke.value);
      chuckJokeEl.textContent = joke.value;
    });
}

let selectEl = document.querySelector("#categories-option");

function category() {
  fetch("https://api.chucknorris.io/jokes/categories")
    .then((res) => {
      return res.json();
    })
    .then((categories) => {
      categories.map((category) => {
        let optionEl = document.createElement("option");
        optionEl.value = category;
        optionEl.textContent = category;
        selectEl.append(optionEl);
      });
    });
}
category();

let formEl = document.querySelector("#joke-by-category");
let jokeCategoryTextEl = document.querySelector("#category-joke-text");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const selectedValue = form.querySelector("select").value;

  fetch(`https://api.chucknorris.io/jokes/random?category=${selectedValue}`)
    .then((res) => res.json())
    .then((joke) => {
      jokeCategoryTextEl.textContent = joke.value;
    });
});
