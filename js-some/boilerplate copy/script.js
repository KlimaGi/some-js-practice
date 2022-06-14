console.groupCollapsed("");
console.groupEnd();

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
      continent: "South America",
      country: "Mexico",
    },
    touristAttractions: ["El Charco del Ingenio Botanical Garden"],
    isCapital: false,
  },
  {
    name: "Quebec",
    population: 832000,
    location: {
      continent: "South America",
      country: "Canada",
    },
    touristAttractions: ["Montmorency Falls", "Parc de la Chute-Montmorency"],
    isCapital: false,
  },
  {
    name: "New York City",
    population: 8804190,
    location: {
      continent: "South America",
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
  {
    name: "Sydney",
    population: 5361466,
    location: {
      continent: "Australia",
      country: "Australia",
    },
    touristAttractions: [
      "Sydney Opera House",
      "beaches in Sydney",
      "Sydney Harbour Bridge",
    ],
    isCapital: false,
  },
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

// 4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.

// 7. Naudojant tik JavaScript:

// 7.3. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.
// 8. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%, o visų kitų - 50%.

const citiesContainerEl = document.querySelector("#cities-container");

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
      touristAttractionsEl += `<li>${place}</li>`;
    });

    let isAre = city.touristAttractions.length > 1 ? "are" : "is";
    let s = city.touristAttractions.length > 1 ? "s" : "";

    touristAttractionsText = `<h4>Main tourist attraction${s} of ${city.name} ${isAre}:</h4>
                              <ul>${touristAttractionsEl}</ul>`;
  }

  citiesContainerEl.innerHTML += `<div class="city-item">
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

let allCities = document.querySelectorAll(".city-item:nth-child(even)");

let oddCities = document.querySelectorAll(".city-item:nth-child(even)");
console.log(oddCities);
oddCities.forEach((city) => {
  city.style.backgroundColor = "lightgrey";
});

// allCities.forEach((city, index) => {
//   console.log(city);
//   if (index % 2 === 0) {
//     city.style.backgroundColor = "lightgrey";
//   }
// });

let firstAtraction = document.querySelectorAll("li:first-child");
console.log(firstAtraction);
firstAtraction.forEach((place) => {
  place.style.color = "green";
});

let lastAtractions = document.querySelectorAll("li:nth-of-type(1n+4)");
console.log(lastAtractions);
lastAtractions.forEach((place) => {
  place.style.color = "purple";
});

let capitalTitles = document.querySelectorAll("h3.capital");
//capitalTitles.style.color = "red";
console.log(capitalTitles.length);
capitalTitles.forEach((title) => {
  console.log(title);
  title.style.color = "mediumvioletred";
});

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
// prideda clase prei HTML elemento, bet neperraso
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
