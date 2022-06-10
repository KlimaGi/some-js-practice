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
listMoviesD(moviesD);

console.groupCollapsed("---- objectai");

//   for ... of --- ciklas []
let students = ["David", "Zoe", "Lily", "Oscar"];

for (let student of students) {
  console.log("For ... of ciklas: " + student);
}

let studentObj = {
  name: "Zari",
  "last name": "Doe",
  age: 25,
  group: "type25",
  city: "Vilnius",
};
let propertyName = "group";

console.log(studentObj[propertyName]);
console.log(studentObj["last name"]);
console.log(studentObj.name);

studentObj.stipend = true;
console.log(studentObj);

studentObj["gimtasis miestas"] = "Klaipeda";

delete studentObj.stipend;
console.log(studentObj);

let studentHobiai = ["learning", "swimming", "chess"];
studentObj.hobiai = studentHobiai;
console.log(studentObj);

console.log(studentObj.hobiai);
console.log(studentObj.hobiai[0]);
studentObj.hobiai.push("yoga");
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

console.log(studentObj);
console.groupEnd();

console.group("---- ciklai");

for (let key in studentObj) {
  let value = studentObj[key];
  console.log(key + ": " + value);
}
console.log();

console.log();
console.groupEnd();
