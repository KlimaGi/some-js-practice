let cities = [
  {
    name: "Nida",
    population: 3609,
    location: {
      continent: "Europe",
      country: "Lithuania",
    },
    touristAttractions: ["Dead dune"],
    isCapital: false,
  },
  {
    name: "Vilnius",
    population: 550834,
    location: {
      continent: "Europe",
      country: "Lithuania",
    },
    touristAttractions: ["Way around Vilnius"],
    isCapital: true,
  },
  {
    name: "San Miguel de Allende",
    population: 174615,
    location: {
      continent: "North America",
      country: "Mexico",
    },
    touristAttractions: ["El Charco del Ingenio Botanical Garden"],
    isCapital: false,
  },
  {
    name: "Quebec",
    population: 832000,
    location: {
      continent: "North America",
      country: "Canada",
    },
    touristAttractions: ["Montmorency Falls", "Parc de la Chute-Montmorency"],
    isCapital: false,
  },
  {
    name: "New York City",
    population: 8804190,
    location: {
      continent: "North America",
      country: "USA",
    },
    touristAttractions: ["Central Park", "Empire State Building"],
    isCapital: false,
  },
  {
    name: "Cape Town",
    population: 4801000,
    location: {
      continent: "Africa",
      country: "South Africa",
    },
    touristAttractions: ["Table Mountain", "Lion's Head"],
    isCapital: true,
  },
  {
    name: "Amsterdam",
    population: 1558755,
    location: {
      continent: "Europe",
      country: "Netherlands",
    },
    touristAttractions: ["Vondelpark", "Zaanse Schans"],
    isCapital: true,
  },
  {
    name: "Florence",
    population: 382258,
    location: {
      continent: "Europe",
      country: "Italy",
    },
    touristAttractions: [],
    isCapital: false,
  },
  // {
  //   name: "Sydney",
  //   population: 5361466,
  //   location: {
  //     continent: "Australia",
  //     country: "Australia",
  //   },
  //   touristAttractions: [
  //     "Sydney Opera House",
  //     "beaches in Sydney",
  //     "Sydney Harbour Bridge",
  //   ],
  //   isCapital: false,
  // },
  {
    name: "Hallstatt",
    population: 800,
    location: {
      continent: "Europe",
      country: "Austria",
    },
    touristAttractions: [
      "The Hallstatter See",
      "Rudolf's Tower",
      "Dachstein Mountains and the Five Fingers",
      "Old Town",
      "Hallstatt Salt Mine",
    ],
    isCapital: true,
  },
];

// 7. Naudojant tik JavaScript:

// 8. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%, o visų kitų - 50%.

const citiesContainerEl = document.querySelector("#cities-container");
citiesContainerEl.style = `
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0;
`;

console.log(cities);

cities.map((city, index) => {
  let capital = "";
  let capitalText = "";
  let styleCapital = "";
  if (city.isCapital) {
    capital = " (capital)";
    capitalText = ` ${city.name} is the capital of ${city.location.country}.`;
    styleCapital = "capital";
  }

  let touristAttractionsText = "";

  if (city.touristAttractions.length > 0) {
    let touristAttractionsEl = "";

    city.touristAttractions.map((place) => {
      touristAttractionsEl += `<li class="li-style">${place}</li>`;
    });

    let isAre = city.touristAttractions.length > 1 ? "are" : "is";
    let s = city.touristAttractions.length > 1 ? "s" : "";

    touristAttractionsText = `<h4>Main tourist attraction${s} of ${city.name} ${isAre}:</h4>
                              <ul>${touristAttractionsEl}</ul>`;
  }

  citiesContainerEl.innerHTML += `<div class="city-item box">
                                    <h3 class="${styleCapital}">${index + 1}. ${
    city.name
  }${capital}</h3>
                                    <p>${city.name} city is location in ${
    city.location.continent
  }, ${city.location.country} and has population of ${
    city.population
  } people.${capitalText}</p>
                                    ${touristAttractionsText}
                                  </div>`;
});

let capitalTitles = document.querySelectorAll("h3.capital");
//capitalTitles.style.color = "red";

capitalTitles.forEach((title) => {
  title.style.color = "mediumvioletred";
});

let allCities = document.querySelectorAll(".city-item:nth-child(even)");

let oddCities = document.querySelectorAll(".city-item:nth-child(odd)");

oddCities.forEach((city) => {
  city.style.backgroundColor = "lightgrey";
});

// allCities.forEach((city, index) => {
//   console.log(city);
//   if (index % 2 === 0) {
//     city.style.backgroundColor = "lightgrey";
//   }
// });

// let firstAtraction = document.querySelectorAll("li:first-child");
// firstAtraction.forEach((place) => {
//   place.style.color = "green";
// });

// let lastAtractions = document.querySelectorAll("li:nth-of-type(1n+4)");
// lastAtractions.forEach((place) => {
//   place.style.color = "purple";
// });

let attractionList = document.querySelectorAll("ul");
attractionList.forEach((list) => {
  let places = list.querySelectorAll("li");
  places.forEach((place, index) => {
    if (index === 0) place.style.color = "palevioletred";
    else if (index > 2) place.style.color = "steelblue";
  });
});

let itemEven = document.querySelectorAll(".city-item");
itemEven.forEach((item) => (item.style.width = "45%"));
if (cities.length % 2 !== 0) {
  let lastItem = document.querySelectorAll(".city-item:last-child");
  lastItem.forEach((item) => (item.style.width = "92%"));
}

// let itemBox = document.querySelectorAll(".box");
// itemBox.style = `margin: 1rem;
//   padding: 1rem;
//   box-sizing: border-box;
//   border-radius: 3px;
//   box-shadow: 2px 2px 5px grey;
// `;

//itemBox.style.margin = "0.5rem";

let title = document.querySelectorAll(".city-item h3");
title.forEach((item) => (item.style.padding = "10px 0"));

let all = document.querySelector("*");
all.style = `
  line-height: 1.3rem;
  margin: 0;
  box-sizing: border-box;
`;
let pageTitle = document.querySelector("main h2");
pageTitle.style.padding = "0 2.1rem";
