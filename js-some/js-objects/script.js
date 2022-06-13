const moviesD = [
  { name: "filmas1", year: 2001 },
  { name: "filmas2", year: 2006 },
  { name: "filmas3", year: 2011 },
  { name: "filmas4", year: 2021 },
  { name: "", year: 2014 },
  { name: "filmas6" },
];
function listMoviesD(arr) {
  let list = document.querySelector("ul");

  for (let i = 0; i < arr.length; i++) {
    let num = i + 1;
    let nameM = arr[i].name;
    let yearM = arr[i].year || "";

    if (!arr[i].name) continue;

    list.innerHTML += `<li>${num}. ${nameM}, ${yearM} </li>`;
  }
}
//listMoviesD(moviesD);

for (let movie of moviesD) {
  //console.log("For ... of ciklas: " + movie.name);
}

// for (let key in studentObj) {
//   let value = studentObj[key];
//   console.log(key + ": " + value);
// }
// console.log();

console.group("---- objectai");

//   for ... of --- ciklas []
let students = ["David", "Zoe", "Lily", "Oscar"];

for (let student of students) {
  //console.log("For ... of ciklas: " + student);
}

let studentObj = {
  name: "Zari",
  "second name": "Li",
  "last name": "Doe",
  age: 25,
  group: "type25",
  city: "Vilnius",
  getFullName: function () {
    return `${this.name} ${this["second name"]} ${this["last name"]}`;
  },
  setActive() {
    this.active = true;
  },
  setNotActive() {
    this.active = false;
  },
  changeActivity() {
    this.active = !this.active;
  },
  addHoby(hoby) {
    this.hobiai.push(hoby);
  },
};

let fullName = studentObj.getFullName(); // Zari Li Doe

let propertyName = "group";

// console.log(studentObj[propertyName]); // type25
// console.log(studentObj["last name"]); // Doe
// console.log(studentObj.name); // Zari

studentObj.stipend = true; // sukuria ir priskiria reiksme

studentObj["gimtasis miestas"] = "Klaipeda";

// delete studentObj.stipend;
// console.log(studentObj);

let studentHobiai = ["learning", "swimming", "chess"];
studentObj.hobiai = studentHobiai;
console.log(studentObj);

console.log(studentObj.hobiai);
console.log(studentObj.hobiai[0]);
studentObj.hobiai.push("yoga");
console.log(studentObj.hobiai);

studentObj.addHoby("running");
console.log("studentObj.hobiai", studentObj.hobiai);

// objecto kurimas uz objekto ribu
studentObj.removeHobi = function (hoby) {
  console.log(hoby);
  console.log(this.hobiai);

  let updateHobiai = this.hobiai.filter((oldHoby) => hoby !== oldHoby);
  console.log(updateHobiai);
  this.hobiai = updateHobiai;
};
console.log(studentObj.hobiai);
studentObj.removeHobi("chess");
console.log(studentObj.hobiai);

// 1 --------- kuriant nauja kintamaji
// let studentAdress = {
//   city: "Vilnius",
//   street: "Vilnius st",
// };
// studentObj.adress = studentAdress;
// 2
// studentObj.adress = {
//   city: "Vilnius",
//   street: "Vilnius st",
// };
// 3
studentObj.adress = {};
studentObj.adress.city = "Vilnius";
studentObj.adress.street = "Vilnius st.";

// studentObj.country = {};  //----tuscio objekto sukurimas
//studentObj.country = new Object();

studentObj.setActive();
console.log("----1", studentObj);
console.log("-----", studentObj.active);
studentObj.setNotActive();
console.log("----", studentObj);
console.log("-----", studentObj.active);

studentObj.changeActivity();
console.log("-----change", studentObj.active);

console.log(studentObj);
console.groupEnd();

console.groupCollapsed("---- ciklai");

for (let key in studentObj) {
  let value = studentObj[key];
  console.log(key + ": " + value);
}

console.groupCollapsed("---- obj task");

let companyObj = new Object();

companyObj["company name"] = "someCompany";
companyObj.opened = 1974;
companyObj.companyCode = 7687687677;
companyObj.employees = 1325;
companyObj.ceo = "John Doe";
companyObj.nvo = false;
companyObj.workingLocation = ["SW", "LT", "ES"];
companyObj.activityAreas = ["it", "some"];
companyObj.contacts = {};
companyObj.contacts.phone = "+432352544564";
companyObj.contacts.email = "soem@email.com";
companyObj.contacts.adress = {};
companyObj.contacts.adress.country = "LT";
companyObj.contacts.adress.city = "Vln";
companyObj.contacts.adress.street = "Vilnius str.";
companyObj.contacts.adress.apartment = "12";

companyObj.subsidiaries = [];
let company2 = {
  "company name": "otherCompany",
  opened: 2012,
  companyCode: 8768789669,
  employees: 547,
  ceo: "Zari Deen",
  nvo: false,
  workingLocation: ["SW", "LT"],
  activityAreas: ["it", "some", "other", "something"],
  contacts: {
    phone: "+432352544564",
    email: "soem@email.com",
    adress: {
      country: "LT",
      city: "Vln",
      street: "Kaunas str",
      apartment: "34",
    },
    getAdress() {
      return `${this.adress.street} ${this.adress.apartment}, ${this.adress.city}, ${this.adress.country}.`;
    },
  },
  setNVO() {
    this.nvo = true;
  },
  setNonNVO() {
    this.nvo = false;
  },
  switchNVO() {
    this.NVO = !this.NVO;
  },
  getWorkingLocations() {
    let outputText = this.workingLocation.join(", ") + ".";
    return outputText;
  },
  getActivityAreas() {
    let outputText = this.activityAreas.reduce(
      (all, current) => all + ", " + current
    );
    return outputText + ".";
  },
  addWorkingLocation(location) {
    this.activityAreas.push(location);
  },
  addActivityArea() {
    this.activityAreas.push(area);
  },
  removeWorkingLocation(locationToRemove) {
    let updatedWorkingLocation = this.workingLocation.filter(
      (location) => location !== locationToRemove
    );
    this.workingLocation = updatedWorkingLocation;
  },
  removeActivityArea(areaToRemove) {
    this.activityAreas = this.activityAreas.filter(
      (area) => area.toLowerCase() !== areaToRemove.toLowerCase()
    );
  },
};

companyObj.subsidiaries.push(company2);
companyObj.subsidiaries.push(company2);

console.log();
// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".

companyObj.getAdress = function () {
  let addressText = `${this.contacts.adress.street} ${this.contacts.adress.apartment}, ${this.contacts.adress.city}, ${this.contacts.adress.country}.`;
  console.log(addressText);
  return addressText;
};
console.log(companyObj.getAdress());
console.log(company2.contacts.getAdress());
// 6. Sukurti dvi funkcijas, kurios:

// 6.1. Pakeičia NVO statusą į true.
console.log(company2.nvo);
companyObj.setNVO = function () {
  this.nvo = true;
};
console.log(company2.nvo);
// 6.2. Pakeičia NVO statusą į false.
company2.setNonNVO();
console.log(company2.nvo);
// 6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.
company2.switchNVO = function () {
  this.nvo = !this.nvo;
};
console.log(company2.nvo);
company2.switchNVO();
console.log(company2.nvo);
// 7. Sukurti funkcijas, kurios grąžina:
// 7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
companyObj.getWorkingLocations = function () {
  let outputText = this.workingLocation.join(", ") + ".";
  return outputText;
};

console.log(companyObj.getWorkingLocations());
console.log(company2.getWorkingLocations());

// 7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
company2.getActivityAreas = function () {
  let outputText = this.activityAreas.reduce(
    (all, current) => all + ", " + current
  );
  return outputText + ".";
};
console.log(company2.getActivityAreas());
// 8. Sukurti funkcijas, kurios prideda:
// 8.1. Naują veiklos šalį prie šalių masyvo.
company2.addWorkingLocation = function (location) {
  console.log("location", location);
  this.workingLocation.push(location);
};
company2.addWorkingLocation("GR");
console.log(company2.workingLocation);
// 8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
// 9.1. Veiklos šalį iš šalių masyvo.
// 9.2. Veiklos rūšį iš vEiklų masyvo.
company2.removeActivityArea = function (areaToRemove) {
  console.log(areaToRemove);
  console.log(this.activityAreas);

  this.activityAreas = this.activityAreas.filter(
    (area) => area.toLowerCase() !== areaToRemove.toLowerCase()
  );
};
console.log(company2.activityAreas);
company2.removeActivityArea("some");
console.log(company2.activityAreas);

console.log(company2["company name"]);
const companyNameEl = document.querySelector(".company-name");
const companyAdressEl = document.querySelector(".company-adress");
const companyEmailEl = document.querySelector(".company-email");
const companyPhoneEl = document.querySelector(".company-phone");
const companyInfoEl = document.querySelector(".company-info");

console.dir(companyNameEl);
companyNameEl.textContent = company2["company name"];
companyNameEl.style.textTransform = "uppercase";
companyNameEl.style.border = "2px solid green";
companyNameEl.style.padding = "5px 10px";

companyAdressEl.textContent = "Adress: " + company2.contacts.getAdress();

companyEmailEl.innerHTML = `Email: <a href="mailto:${company2.contacts.email}">${company2.contacts.email}</a>`;

//company2.contacts.phone = "";

if (company2.contacts.phone) {
  companyPhoneEl.innerHTML = `Phone: <a href="tel:${company2.contacts.phone}">${company2.contacts.phone}</a>`;
} else {
  companyPhoneEl.textContent = "The phone number is not specified";
}

// -----------------
if (company2.opened) {
  companyInfoEl.innerHTML = `<li>Atidarymo metai: ${company2.opened} m.</li>`;
}

if (company2.companyCode)
  companyInfoEl.innerHTML += `<li>Company code: ${company2.companyCode} m.</li>`;

if (company2.employees)
  companyInfoEl.innerHTML += `<li>Employess: ${company2.employees} m.</li>`;

console.log(company2.workingLocation);

if (company2.workingLocation.length > 0) {
  let workingLocationsTitleEl = document.querySelector(".working-locations h2");
  let workingLocationsListEl = document.querySelector(".working-locations ul");
  workingLocationsTitleEl.textContent = "Company working locations: ";

  company2.workingLocation.map(
    (location) => (workingLocationsListEl.innerHTML += `<li>${location}</li>`)
  );

  // let activitiesList = company2.workingLocation.reduce((list, current) => {
  //   return list + `<li>${current}</li>`;
  // }, "");
  // console.log(activitiesList);

  // workingLocationsListEl.innerHTML = activitiesList;
}

console.log(company2.activityAreas);
if (company2.activityAreas.length > 0) {
  let activityAreasEl = document.querySelector(".activity-areas");
  activityAreasEl.innerHTML = `<h2>Company activity areas</h2>`;

  let activityList = company2.activityAreas
    .map((area) => `<li>${area}</li>`)
    .join(" ");

  activityAreasEl.innerHTML += `<ul>${activityList}</ul>`;
}

console.log(company2.subsidiaries);

// if (companyObj.subsidiaries.length > 0) {
//   let subsidiariesWrapperEl = document.querySelector(".subsidiaries-wrapper");

//   subsidiariesWrapperEl.innerHTML = "<h2>Subsidiary companies</h2>";

//   let subsidiaryList = companyObj.subsidiaries
//     .map((subCompany) => `<li>${subCompany["company name"]}</li>`)
//     .join("");

//   subsidiariesWrapperEl.innerHTML += `<ul>${subsidiaryList}</ul>`;
// }

function renderList(dataAray, elementClass, title) {
  if (dataAray.length > 0) {
    let activityAreaEl = document.querySelector(elementClass);

    activityAreaEl.innerHTML = `<h2>${title}</h2>`;

    let activityList = dataAray.map((area) => `<li>${area}</li>`).join("");

    activityAreaEl.innerHTML += `<ul>${activityList}</ul>`;
  }
}

renderList(
  company2.workingLocation,
  ".working-locations-2",
  "Company activity areas"
);

let cities = [
  {
    name: "Nida",
    population: 3609,
    location: {
      continent: "Eurasia",
      country: "Lithuania",
    },
    touristAttractions: ["Dead dune"],
    isCapital: false,
  },
  {
    name: "Vilnius",
    population: 550834,
    location: {
      continent: "Eurasia",
      country: "LT",
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
      continent: "Eurasia",
      country: "Netherlands",
    },
    touristAttractions: ["Vondelpark", "Zaanse Schans"],
    isCapital: true,
  },
  {
    name: "Florence",
    population: 550834,
    location: {
      continent: "Eurasia",
      country: "Italy",
    },
    touristAttractions: ["kelias aplink vilniu", "kalnu parkas"],
    isCapital: true,
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
      continent: "Eurasia",
      country: "Austria",
    },
    touristAttractions: [
      "The Hallstatter See",
      "Rudolf's Tower",
      "Dachstein Mountains and the Five Fingers",
    ],
    isCapital: true,
  },
];

//2. HTML faile sukurti tuščią div elementą, kuriame bus atvaizduoti visi miestai.
// 2.1. Panaudojant ciklą, atvaizduoti visus miestus ekrane pagal nurodytą stilių.

// 3.1. Jeigu miestas yra sostinė, tai:
// 3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
// 3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."
// 4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
// 4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
// 4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
// 4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.

// 6. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".
// 6.1. Naudojant tik JavaScript, pakeisti visų sostinių teksto spalvą.

// 7. Naudojant tik JavaScript:
// 7.1. Pakeisti kas antro miesto fono spalvą.
// 7.2. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
// 7.3. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.
// 8. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%, o visų kitų - 50%.
