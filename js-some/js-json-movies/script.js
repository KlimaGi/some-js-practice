// let obj = {
//   name: "John",
//   age: 28,
//   nextAge: 28 + 1,
//   children: ["child 1", "child 2"],
//   address: {
//     street: "Vilnius st.",
//     city: "Vilnius",
//     country: "Lithuania",
//   },
//   married: true,
//   getAddressInfo() {
//     return `Address is ${this.address.street}, ${this.address.city}, ${this.address.country}.`;
//   },
// };

// console.log(obj.getAddressInfo());

// let json = JSON.stringify(obj);
// console.log(json);

// let convertedObj = JSON.parse(json);
// console.log(convertedObj);

fetch("movies.json")
  .then((res) => res.json())
  .then((movies) => {
    console.log(movies);

    let moviesList = document.querySelector("#movies-list");

    movies.map((movie) => {
      let movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");

      let movieTitle = document.createElement("h3");
      movieTitle.textContent = movie.title;
      movieTitle.classList.add("movie-title");

      let movieGenresList = document.createElement("ul");
      movieGenresList.classList.add("movies-genres");
      movie.genres.map((genre) => {
        let movieGenre = document.createElement("li");
        movieGenre.textContent = genre;
        movieGenresList.append(movieGenre);
      });

      let movieRanking = document.createElement("span");
      movieRanking.textContent = movie.review.ranking;
      movieRanking.classList.add("star");

      let movieViews = document.createElement("span");
      let count = numberShort(movie.review.count);
      movieViews.textContent = count;
      movieViews.classList.add("views");

      let movieSummary = document.createElement("p");
      movieSummary.textContent = movie.summary;

      let movieDirector = document.createElement("p");
      let isPlural = movie.director.length && "s";
      let directors = movie.director.join(", ");
      movieDirector.textContent = `Director${isPlural}: ${directors}`;

      let movieCast = document.createElement("p");
      let actors = movie.cast.join(", ");
      movieCast.textContent = `Stars: ${actors}`;

      moviesList.append(movieItem);
      movieItem.append(movieTitle);
      movieItem.append(movieGenresList);

      movieItem.append(movieRanking);
      movieItem.append(movieViews);
      movieItem.append(movieSummary);
      movieItem.append(movieDirector);
      movieItem.append(movieCast);
    });
  });

let numberShort = (number) => {
  if (number > 1000000) return number / 1000000 + "M";
  if (number > 1000) return number / 1000 + "K";
  return number;
};
