fetch("movies-list.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.map((movieId) => {
      console.log(movieId);
      fetch(`./movies/${movieId}.json`)
        .then((res) => res.json())
        .then((movie) => {
          console.log(movie.title);
        });
    });
  });
