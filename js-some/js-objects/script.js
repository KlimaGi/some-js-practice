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

console.log("---- objectai");

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
console.log();

console.log("---- ciklai");

for (let key in studentObj) {
  let value = studentObj[key];
  console.log(key + ": " + value);
}

console.log("---- obj task");

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
    this.nvo = !this.nvo;
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
    this.workingLocation.push(location);
  },
  addActivityArea(area) {
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
console.log(companyObj.nvo);
companyObj.setNVO = function () {
  this.nvo = true;
};
companyObj.setNVO();
console.log(companyObj.nvo);
company2.setNVO();
console.log(company2.nvo);
// 6.2. Pakeičia NVO statusą į false.
companyObj.setNonNVO = function () {
  this.nvo = false;
};
company2.setNonNVO();
companyObj.setNonNVO();
console.log(company2.nvo);
console.log(companyObj.nvo);
// 6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.
companyObj.switchNVO = function () {
  this.nvo = !this.nvo;
};
companyObj.switchNVO();
console.log(companyObj.nvo);
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
companyObj.getActivityAreas = function () {
  let outputText = this.activityAreas.reduce(
    (all, current) => all + ", " + current
  );
  return outputText + ".";
};
console.log(companyObj.getActivityAreas());
console.log(company2.getActivityAreas());
// 8. Sukurti funkcijas, kurios prideda:
// 8.1. Naują veiklos šalį prie šalių masyvo.
companyObj.addWorkingLocation = function (location) {
  console.log("location", location);
  this.workingLocation.push(location);
};
companyObj.addWorkingLocation("SP");
company2.addWorkingLocation("GR");
console.log(companyObj.workingLocation);
console.log(company2.workingLocation);
// 8.2. Naują veiklos rūšį prie veiklų masyvo.
companyObj.addActivityArea = function (area) {
  this.activityAreas.push(area);
};
console.log(companyObj.activityAreas);
companyObj.addActivityArea("other");
console.log(companyObj.activityAreas);
console.log(company2.activityAreas);
company2.addActivityArea("another");
console.log(company2.activityAreas);
// 9. Sukurti funkcijas, kurios pašalina:
// 9.1. Veiklos šalį iš šalių masyvo.
companyObj.removeWorkingLocation = function (locationToRemove) {
  let updatedWorkingLocations = this.workingLocation.filter(
    (loc) => loc !== locationToRemove
  );
  this.workingLocation = updatedWorkingLocations;
};
console.log(companyObj.workingLocation);
companyObj.removeWorkingLocation("SP");
console.log(companyObj.workingLocation);
console.log(company2.workingLocation);
company2.removeWorkingLocation("GR");
console.log(company2.workingLocation);
// 9.2. Veiklos rūšį iš veiklų masyvo.
companyObj.removeActivityArea = function (areaToRemove) {
  console.log(areaToRemove);
  console.log(this.activityAreas);

  this.activityAreas = this.activityAreas.filter(
    (area) => area.toLowerCase() !== areaToRemove.toLowerCase()
  );
};
console.log(companyObj.activityAreas);
companyObj.removeActivityArea("some");
console.log(companyObj.activityAreas);

console.log(company2.activityAreas);
company2.removeActivityArea("other");
console.log(company2.activityAreas);

console.log(company2["company name"]);
const companyNameEl = document.querySelector(".company-name");
const companyAdressEl = document.querySelector(".company-adress");
const companyEmailEl = document.querySelector(".company-email");
const companyPhoneEl = document.querySelector(".company-phone");
const companyInfoEl = document.querySelector(".company-info");

console.dir(companyNameEl);
companyNameEl.textContent = companyObj["company name"];
companyNameEl.style.textTransform = "uppercase";
companyNameEl.style.border = "2px solid green";
companyNameEl.style.padding = "5px 10px";

companyAdressEl.textContent = "Adress: " + companyObj.getAdress();

companyEmailEl.innerHTML = `Email: <a href="mailto:${companyObj.contacts.email}">${companyObj.contacts.email}</a>`;

if (companyObj.contacts.phone) {
  companyPhoneEl.innerHTML = `Phone: <a href="tel:${companyObj.contacts.phone}">${companyObj.contacts.phone}</a>`;
} else {
  companyPhoneEl.textContent = "The phone number is not specified.";
}

// -----------------
if (companyObj.opened) {
  companyInfoEl.innerHTML = `<li>Opened year: ${companyObj.opened} m.</li>`;
}

if (companyObj.companyCode)
  companyInfoEl.innerHTML += `<li>Company code: ${companyObj.companyCode}</li>`;

if (companyObj.employees)
  companyInfoEl.innerHTML += `<li>Employess number: ${companyObj.employees}</li>`;

if (companyObj.ceo)
  companyInfoEl.innerHTML += `<li>Company CEO: ${companyObj.ceo}</li>`;

companyObj.setNonNVO();
console.log(companyObj.nvo);
if (!companyObj.nvo)
  companyInfoEl.innerHTML += `<li>Governmental organization.</li>`;

console.log(companyObj.workingLocation);

if (company2.workingLocation.length > 0) {
  let workingLocationsTitleEl = document.querySelector(".working-locations h2");
  let workingLocationsListEl = document.querySelector(".working-locations ul");
  workingLocationsTitleEl.textContent = "Company working locations: ";

  companyObj.workingLocation.map(
    (location) => (workingLocationsListEl.innerHTML += `<li>${location}</li>`)
  );
  // let locationsList = companyObj.workingLocation.reduce((list, current) => {
  //   return list + `<li>${current}</li>`;
  // }, "");
  // console.log(locationsList);

  // workingLocationsListEl.innerHTML = locationsList;
}

// console.log(companyObj.activityAreas);
// if (companyObj.activityAreas.length > 0) {
//   let activityAreasEl = document.querySelector(".activity-areas");
//   activityAreasEl.innerHTML = `<h2>Company activity areas: </h2>`;

//   let activityList = companyObj.activityAreas
//     .map((area) => `<li>${area}</li>`)
//     .join(" ");

//   activityAreasEl.innerHTML += `<ul>${activityList}</ul>`;
// }

console.log(companyObj.subsidiaries);

function renderList(dataAray, elementClass, title) {
  if (dataAray.length > 0) {
    let activityAreaEl = document.querySelector(elementClass);

    activityAreaEl.innerHTML = `<h2>${title}</h2>`;

    let activityList = dataAray.map((area) => `<li>${area}</li>`).join("");

    activityAreaEl.innerHTML += `<ul>${activityList}</ul>`;
  }
}

renderList(
  companyObj.workingLocation,
  ".working-locations-2",
  "Company working locations"
);

renderList(
  companyObj.activityAreas,
  ".activity-areas",
  "Company activity areas..."
);

if (companyObj.subsidiaries.length > 0) {
  let subsidiariesWrapperEl = document.querySelector(".subsidiaries-wrapper");

  // subsidiariesWrapperEl.innerHTML = "<h2>Subsidiary companies</h2>";

  // let subsidiaryList = companyObj.subsidiaries
  //   .map((subCompany) => `<li>${subCompany["company name"]}</li>`)
  //   .join("");

  // subsidiariesWrapperEl.innerHTML += `<ul>${subsidiaryList}</ul>`;

  let subsidiaryList = companyObj.subsidiaries
    .map((subCompany) => `<li>${subCompany["company name"]}</li>`)
    .join("");
  subsidiariesWrapperEl.innerHTML = `<h2>Subsidiary companies:</h2>
    <ul>${subsidiaryList}</ul>
    `;
}
