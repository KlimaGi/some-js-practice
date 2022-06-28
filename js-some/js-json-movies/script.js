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
      console.log(movie);
      console.log(movie.title);
      console.log(movie.releaseYear);
      let movieItem = document.createElement("div");
      movieItem.textContent = movie.title;

      moviesList.append(movieItem);
    });
  });
