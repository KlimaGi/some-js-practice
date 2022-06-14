// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// let company1 = {};
let company1 = new Object();
// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1["company name"] = "Company ABC";
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 1999;
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = 45645646454;
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 15;
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = "John Doe";
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = false;
// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ["Lithuania", "Poland"];
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ["Marketing", "Tourism"];
// 2.9. Property „contacts", kuris turės:
// company1.contacts = new Object();
company1.contacts = {};
//       2.9.1. „phone"
company1.contacts.phone = 8645646545;
//       2.9.2. „email"
company1.contacts.email = "info@abc.lt";
//       2.9.3. „address", kuris turės:
company1.contacts.address = {
  //           2.9.3.1. „country"
  country: "Lithuania",
  //           2.9.3.2. „city"
  city: "Vilnius",
  //           2.9.3.3. „street"
  street: "Vilnius st.",
  //           2.9.3.4. „apartment"
  apartment: 15,
};
// 2.10. Property „subsidiary", kurio reikšmė bus naujas objektas.
company1.subsidiary = {};
// 3.1 Sukurti naują kintamąjį pagal tą patį modelį. Tai bus dukterinė įmonę.
let company2 = {
  "company name": "Company XYZ",
  opened: 2000,
  companyCode: 789875464,
  employees: 10,
  ceo: "Doe John",
  nvo: true,
  workingLocations: ["Lithuania", "Poland", "Germany"],
  activityAreas: ["B2B sales"],
  contacts: {
    phone: 84654654654,
    email: "info@xyz.com",
    address: {
      country: "Lithuania",
      city: "Kaunas",
      street: "Vilniaus st.",
      apartment: 10,
    },
  },
  getAddress: function () {
    let addressText = `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`;
    return addressText;
  },
  setNVO: function () {
    this.nvo = true;
  },
  setNonNVO() {
    this.nvo = false;
  },
  switchNVO() {
    this.nvo = !this.nvo;
  },
  getWorkingLocations() {
    let outputText = this.workingLocations.join(", ") + ".";
    return outputText;
  },
  getActivityAreas() {
    // let outputText = this.activityAreas.reduce((allLocations, currentLocation) => allLocations + ', ' + currentLocation);
    // return outputText;
    return this.activityAreas.reduce(
      (allLocations, currentLocation) => allLocations + ", " + currentLocation
    );
  },
  addWorkingLocation(location) {
    this.workingLocations.push(location);
  },
  addActivityArea(area) {
    this.activityAreas.push(area);
  },
  removeWorkingLocation(locationToRemove) {
    let updatedWorkingLocations = this.workingLocations.filter(
      (location) => location !== locationToRemove
    );
    this.workingLocations = updatedWorkingLocations;
  },
  removeActiviryArea(areaToRemove) {
    this.activityAreas = this.activityAreas.filter(
      (area) => area !== areaToRemove
    );
  },
};
// 3.2 Šį objektą priskirti prie „subsidiary" reikšmės pirmame objekte.
company1.subsidiary = company2;
// 4. BONUS: property „subsidiaries" sukurti kaip masyvą, kuriame gali būti ir daugiau dukterinių įmonių.
company1.subsidiaries = [company2];
company1.subsidiaries.push(company2);
console.log(company1);
console.log(company2);
// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
company1.getAddress = function () {
  let addressText = `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`;
  return addressText + ".";
};
console.log(company1.getAddress());
console.log(company2.getAddress());
// 6. Sukurti dvi funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
company1.setNVO = function () {
  this.nvo = true;
};
//        6.2. Pakeičia NVO statusą į false.
company1.setNonNVO = function () {
  this.nvo = false;
};
console.log(company1.nvo);
company1.setNVO();
console.log(company1.nvo);
company1.setNonNVO();
console.log(company1.nvo);
console.log(company2.nvo);
company2.setNonNVO();
console.log(company2.nvo);
company2.setNVO();
console.log(company2.nvo);
//        6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.
company1.switchNVO = function () {
  this.nvo = !this.nvo;
};
console.log(company1.nvo);
company1.switchNVO();
console.log(company1.nvo);
company1.switchNVO();
console.log(company1.nvo);
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
company1.getWorkingLocations = function () {
  let outputText = this.workingLocations.join(", ") + ".";
  return outputText;
};
console.log(company1.getWorkingLocations());
console.log(company2.getWorkingLocations());
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
company1.getActivityAreas = function () {
  let outputText = this.activityAreas.reduce(
    (allLocations, currentLocation) => {
      return allLocations + ", " + currentLocation;
    }
  );
  return outputText + ".";
};
console.log(company1.getActivityAreas());
console.log(company2.getActivityAreas());
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
company1.addWorkingLocation = function (location) {
  this.workingLocations.push(location);
};
company1.addWorkingLocation("Germany");
company1.addWorkingLocation("France");
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
company1.addActivityArea = function (area) {
  this.activityAreas.push(area);
};
console.log(company1.activityAreas);
company1.addActivityArea("Sales");
console.log(company1.activityAreas);
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
company1.removeWorkingLocation = function (locationToRemove) {
  let updatedWorkingLocations = this.workingLocations.filter(
    (location) => location !== locationToRemove
  );
  this.workingLocations = updatedWorkingLocations;
};
console.log(company1.workingLocations);
company1.removeWorkingLocation("France");
console.log(company1.workingLocations);
//        9.2. Veiklos rūšį iš vaiklų masyvo.
company1.removeActiviryArea = function (areaToRemove) {
  this.activityAreas = this.activityAreas.filter(
    (area) => area.toLowerCase() !== areaToRemove.toLowerCase()
  );
};
console.log(company1.activityAreas);
company1.removeActiviryArea("Sales");
console.log(company1.activityAreas);
console.log(company1["company name"]);
const companyName = document.querySelector(".company-name");
const companyAddress = document.querySelector(".company-address");
const companyEmail = document.querySelector(".company-email");
const companyPhone = document.querySelector(".company-phone");
const companyInfo = document.querySelector(".company-info");
companyName.textContent = company1["company name"];
companyName.style.textTransform = "uppercase";
companyName.style.border = "2px solid green";
companyName.style.padding = "5px 10px";
companyAddress.textContent = "Adresas: " + company1.getAddress();
companyEmail.innerHTML = `El. paštas: <a href="mailto:${company1.contacts.email}">${company1.contacts.email}</a>`;
if (company1.contacts.phone) {
  companyPhone.innerHTML = `Telefono numeris: <a href="tel:${company1.contacts.phone}">${company1.contacts.phone}</a>`;
} else {
  companyPhone.textContent = "Telefono numeris nenurodytas.";
}
if (company1.opened) {
  companyInfo.innerHTML += `<li>Atidarymo metai: ${company1.opened} m.</li>`;
}
if (company1.companyCode) {
  companyInfo.innerHTML += `<li>Įmonės kodas: ${company1.companyCode}</li>`;
}
if (company1.employees) {
  companyInfo.innerHTML += `<li>Darbuotojų skaičius: ${company1.employees}</li>`;
}
if (company1.ceo) {
  companyInfo.innerHTML += `<li>Įmonės vadovas: ${company1.ceo}</li>`;
}
if (!company1.nvo) {
  companyInfo.innerHTML += "<li>Vyriausybinė organizacija</li>";
}
if (company1.workingLocations.length > 0) {
  let workingLocationsTitle = document.querySelector(".working-locations h2");
  let workingLocationsList = document.querySelector(".working-locations ul");
  workingLocationsTitle.textContent = "Įmonės veiklos šalys:";
  // company1.workingLocations.map(location => {
  //   workingLocationsList.innerHTML += `<li>${location}</li>`;
  // });
  let locationsList = company1.workingLocations.reduce((list, current) => {
    return list + `<li>${current}</li>`;
  }, "");
  workingLocationsList.innerHTML = locationsList;
}
// if (company1.activityAreas.length > 0) {
//   let activityAreas = document.querySelector('.activity-areas');
//   activityAreas.innerHTML = '<h2>Įmonės veiklos sritys:</h2>';
//   let activityList = company1.activityAreas.map(area => `<li>${area}</li>`).join('');
//   activityAreas.innerHTML += `<ul>${activityList}</ul>`;
// }
function renderList(dataArray, elementClass, title) {
  if (dataArray.length > 0) {
    let activityAreas = document.querySelector(elementClass);
    activityAreas.innerHTML = "<h2>" + title + "</h2>";
    let activityList = dataArray.map((area) => `<li>${area}</li>`).join("");
    activityAreas.innerHTML += `<ul>${activityList}</ul>`;
  }
}
renderList(
  company1.workingLocations,
  ".working-locations-2",
  "Įmonės veiklos šalys:"
);
renderList(company1.activityAreas, ".activity-areas", "Įmonės veiklos sritys:");
if (company1.subsidiaries.length > 0) {
  let subsidiariesWrapper = document.querySelector(".subsidiaries-wrapper");
  // subsidiariesWrapper.innerHTML = '<h2>Dukterinės įmonės:</h2>';
  // let subsidiaryList = company1.subsidiaries.map(subsidiaryCompany => '<li>' + subsidiaryCompany['company name'] + '</li>').join('');
  // subsidiariesWrapper.innerHTML += `<ul>${subsidiaryList}</ul>`;
  let subsidiaryList = company1.subsidiaries
    .map(
      (subsidiaryCompany) =>
        "<li>" + subsidiaryCompany["company name"] + "</li>"
    )
    .join("");
  subsidiariesWrapper.innerHTML = `<h2>Dukterinės įmonės:</h2>
                                   <ul>${subsidiaryList}</ul>`;
}
