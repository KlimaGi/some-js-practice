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
//--------------
let selectEl = document.querySelector("#categories-select");

function category() {
  fetch("https://api.chucknorris.io/jokes/categories")
    .then((res) => res.json())
    .then((categories) => {
      categories.map((category) => {
        let categoryOptionEl = document.createElement("option");
        categoryOptionEl.value = category;
        categoryOptionEl.textContent = "-- " + category;
        selectEl.append(categoryOptionEl);
        document.querySelector("#category-btn").removeAttribute("disabled");
        //---------------
      });
    });
}
category();

let formEl = document.querySelector("#joke-by-category");
let jokeCategoryTextEl = document.querySelector("#category-joke-text");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  //const form = event.target;
  //const selectedValue = form.querySelector("select").value;
  const selectedValue = event.target.elements.category.value;

  fetch(`https://api.chucknorris.io/jokes/random?category=${selectedValue}`)
    .then((res) => res.json())
    .then((joke) => {
      jokeCategoryTextEl.textContent = joke.value;
    });
});

function searchJoke() {
  let searchFormEl = document.querySelector("#search-form");
  let searchJokeEl = document.querySelector("#search-joke");

  searchFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    let searchInput = event.target.elements["search-input"].value;
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchInput}`)
      .then((res) => res.json())
      .then((jokes) => {
        if (jokes.total > 0) {
          let randomIndex = Math.floor(Math.random() * jokes.total);
          searchJokeEl.textContent = jokes.result[randomIndex].value;
        } else {
          searchJokeEl.textContent = "No jokes found...";
        }
        console.log(jokes.result);
      });

    //  console.log();
  });
}
searchJoke();
//------------
function searchCategoryForm() {
  let categorySearchFormEl = document.querySelector("#category-search-form");
  let categorySearchSelectEl = document.querySelector(
    "#category-search-select"
  );
  let categorySearchTextEl = document.querySelector("#category-search-joke");

  fetch("https://api.chucknorris.io/jokes/categories")
    .then((res) => res.json())
    .then((categories) => {
      categories.map((category) => {
        let categoryOptionEl = document.createElement("option");
        categoryOptionEl.value = category;
        categoryOptionEl.textContent = "-- " + category;
        categorySearchSelectEl.append(categoryOptionEl);
        document
          .querySelector("#category-search-btn")
          .removeAttribute("disabled");
      });
    });

  categorySearchFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    let searchCategory = event.target.elements["category-search"].value;

    let searchPhrase = event.target.elements["category-search-input"].value;

    fetch(`https://api.chucknorris.io/jokes/search?query=${searchPhrase}`)
      .then((res) => res.json())
      .then((data) => {
        let jokes = data.result;
        console.log(jokes);

        let filteredJokes = jokes.filter((joke) =>
          joke.categories.includes(searchCategory)
        );

        if (filteredJokes.length > 0) {
          let randomIndex = Math.floor(Math.random() * filteredJokes.length);

          categorySearchTextEl.textContent = filteredJokes[randomIndex].value;
        } else {
          categorySearchTextEl.textContent = "No jokes found...";
        }
      });
    categorySearchFormEl.reset();
  });
}
searchCategoryForm();
