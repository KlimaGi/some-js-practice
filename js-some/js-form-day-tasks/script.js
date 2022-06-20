const studentFormEl = document.querySelector("form");

const INITIAL_STUDENT_DATA = [
  {
    name: "Lily",
    surname: "Doe",
    age: 32,
    phone: "867979797",
    email: "some@mail.com",
    itKnowledge: 7,
    groupName: "type 2",
    interests: ["node.js", "js"],
  },
  {
    name: "Zari",
    surname: "Goe",
    age: 29,
    phone: "865676984",
    email: "zari@mail.com",
    itKnowledge: 4,
    groupName: "type 2",
    interests: ["js", "c#", "node.js"],
  },
  {
    name: "Oscar",
    surname: "Rio",
    age: 43,
    phone: "864453697",
    email: "oscar@mail.com",
    itKnowledge: 2,
    groupName: "type 3",
    interests: ["JS"],
  },
  {
    name: "Edy",
    surname: "Foe",
    age: 39,
    phone: "869769797",
    email: "edy@mail.com",
    itKnowledge: 4,
    groupName: "type 3",
    interests: ["node.js", "JS"],
  },
  {
    name: "Bea",
    surname: "Di",
    age: 27,
    phone: "862324249",
    email: "bea@mail.com",
    itKnowledge: 7,
    groupName: "type 1",
    interests: ["node.js", "c#"],
  },
];

function renderInitialData(students) {
  students.map((student) => {
    console.log(student);
    console.log(student.name);

    let studentsListEl = document.querySelector("#students-list");
    let studentItem = document.createElement("div");
    studentItem.classList.add("student-item");

    let nameEl = document.createElement("p");
    nameEl.innerHTML = `<strong>Name</strong>: ${student.name}`;

    let surnameEl = document.createElement("p");
    surnameEl.innerHTML = `<strong>Surname</strong>: ${student.surname}`;

    let studentAgeEl = document.createElement("p");
    studentAgeEl.innerHTML = `<strong>Age</strong>: ${student.age}`;

    let studentPhoneEl = document.createElement("p");
    studentPhoneEl.innerHTML = `<strong>Phone</strong>: ${student.phone}`;

    let studentEmailEl = document.createElement("p");
    studentEmailEl.innerHTML = `<strong>Email</strong>: ${student.email}`;

    let studentKnowledgeEl = document.createElement("p");
    studentKnowledgeEl.innerHTML = `<strong>IT knowledge</strong>: ${student.itKnowledge}`;

    let studentGroupEl = document.createElement("p");
    studentGroupEl.innerHTML = `<strong>Student group</strong>: ${student.groupName}`;
    // --------- get all checkboxes checked values
    let interestWrapperEl = document.createElement("div");
    interestWrapperEl.classList.add("interest-wrapper");

    let interestTitleEl = document.createElement("h4");
    interestTitleEl.classList.add("interest-title");
    interestTitleEl.textContent = "Interests: ";

    let interestListEl = document.createElement("ul");
    interestListEl.classList.add("interest-list");

    student.interests.forEach((el) => {
      let interestItemElement = document.createElement("li");
      interestItemElement.textContent = el;

      interestListEl.append(interestItemElement);
    });

    interestWrapperEl.append(interestTitleEl, interestListEl);

    studentItem.append(
      nameEl,
      surnameEl,
      studentAgeEl,
      studentPhoneEl,
      studentEmailEl,
      studentKnowledgeEl,
      studentGroupEl,
      interestWrapperEl
    );
    studentsListEl.prepend(studentItem);
  });
}
renderInitialData(INITIAL_STUDENT_DATA);

const itKnowledgeInputEl = document.querySelector("#student-it-knowledge");
const itKnowledgeOutputEl = document.querySelector("#it-knowledge-output");

itKnowledgeInputEl.addEventListener("input", (event) => {
  itKnowledgeOutputEl.textContent = event.target.value;
});

studentFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let studentName = document.querySelector("#student-name").value;
  let studentSurname = document.getElementById("student-surname").value;
  let studentAge = studentFormEl.querySelector("#student-age").value;
  let studentPhone = studentFormEl.querySelector('[name="phone"]').value;
  let studentEmail = event.target.elements.email.value;
  let studentKnowledge = event.target.elements["it-knowledge"].value;
  //let studentGroupEl = document.querySelector('input[name="group"]:checked');
  let studentGroup = event.target.elements.group.value;

  let interests = studentFormEl.querySelectorAll(
    'input[name="languages"]:checked'
  );

  document
    .querySelectorAll(".input-error-message")
    .forEach((input) => input.remove());

  let requiredInputs = document.querySelectorAll("input.required");

  let validForm = true;

  requiredInputs.forEach((input) => {
    input.classList.remove("input-error");

    if (!input.value) {
      validForm = false;

      let alertText = "Not all fields are filled";
      alertMessage(alertText, "error-alert");

      input.classList.add("input-error");

      let validationText = document.createElement("span");
      validationText.textContent = "This field is required";
      validationText.classList.add("input-error-message");

      input.after(validationText);
    }
  });
  if (!validForm) return;

  let studentsListEl = document.querySelector("#students-list");
  let studentItem = document.createElement("div");
  studentItem.classList.add("student-item");

  let nameEl = document.createElement("p");
  nameEl.innerHTML = `<strong>Name</strong>: ${studentName}`;

  let surnameEl = document.createElement("p");
  surnameEl.innerHTML = `<strong>Surname</strong>: ${studentSurname}`;

  let studentAgeEl = document.createElement("p");
  studentAgeEl.innerHTML = `<strong>Age</strong>: ${studentAge}`;

  let studentPhoneEl = document.createElement("p");
  studentPhoneEl.innerHTML = `<strong>Phone</strong>: *******`;

  let studentEmailEl = document.createElement("p");
  studentEmailEl.innerHTML = `<strong>Email</strong>: *******`;

  let studentKnowledgeEl = document.createElement("p");
  studentKnowledgeEl.innerHTML = `<strong>IT knowledge</strong>: ${studentKnowledge}`;

  let studentGroupEl = document.createElement("p");
  studentGroupEl.innerHTML = `<strong>Student group</strong>: ${studentGroup}`;
  // --------- get all checkboxes checked values
  let interestWrapperEl = document.createElement("div");
  interestWrapperEl.classList.add("interest-wrapper");

  let interestTitleEl = document.createElement("h4");
  interestTitleEl.classList.add("interest-title");
  interestTitleEl.textContent = "Interests: ";

  let interestListEl = document.createElement("ul");
  interestListEl.classList.add("interest-list");

  interests.forEach((el) => {
    let interestItemElement = document.createElement("li");
    interestItemElement.textContent = el.value;

    interestListEl.append(interestItemElement);
  });

  interestWrapperEl.append(interestTitleEl, interestListEl);

  // buttons
  let privateInfoButton = document.createElement("button");
  privateInfoButton.textContent = "Show private info";

  // let hiddenData = true;

  // privateInfoButton.addEventListener("click", () => {
  //   if (hiddenData) {
  //     studentPhoneEl.innerHTML = `<strong>Phone</strong>: ${studentPhone}`;
  //     studentEmailEl.innerHTML = `<strong>Email</strong>: ${studentEmail}`;
  //     privateInfoButton.textContent = "Hide personal info";
  //   } else {
  //     studentPhoneEl.innerHTML = `<strong>Phone</strong>: *******`;
  //     studentEmailEl.innerHTML = `<strong>Email</strong>: *******`;
  //     privateInfoButton.textContent = "Show personal info";
  //   }
  //   hiddenData = !hiddenData;
  // });

  privateInfoButton.addEventListener("click", () => {
    if (!privateInfoButton.classList.contains("hide")) {
      studentPhoneEl.innerHTML = `<strong>Phone</strong>: ${studentPhone}`;
      studentEmailEl.innerHTML = `<strong>Email</strong>: ${studentEmail}`;
      privateInfoButton.textContent = "Hide personal info";
    } else {
      studentPhoneEl.innerHTML = `<strong>Phone</strong>: *******`;
      studentEmailEl.innerHTML = `<strong>Email</strong>: *******`;
      privateInfoButton.textContent = "Show personal info";
    }
    privateInfoButton.classList.toggle("hide");
  });

  let deleteStudentButton = document.createElement("button");
  deleteStudentButton.textContent = "Remove student";

  deleteStudentButton.addEventListener("click", () => {
    console.log(studentName);
    studentItem.remove();
    let deleteText = `Student ${studentName} ${studentSurname} is removed`;
    alertMessage(deleteText);
  });

  studentItem.append(
    nameEl,
    surnameEl,
    studentAgeEl,
    studentPhoneEl,
    studentEmailEl,
    studentKnowledgeEl,
    studentGroupEl,
    interestWrapperEl,
    privateInfoButton,
    deleteStudentButton
  );
  studentsListEl.prepend(studentItem);

  //studentFormEl.reset();
  event.target.reset();

  let alertText = `Student created ${studentName} ${studentSurname}`;
  alertMessage(alertText);
});

function alertMessage(text, elementClass = "") {
  const alertEl = document.querySelector("#alert");
  alertEl.textContent = text;

  if (elementClass) alertEl.classList.add(elementClass);

  setTimeout(() => {
    alertEl.textContent = "";
    if (elementClass) alertEl.classList.remove(elementClass);
  }, 5000);
}

// document.body.dataset.hide = false;
// console.log(document.body.dataset.hide);

//4. Formoje pridėti „checkbox" tipo input'ą, kuriame pateikta galimybę rinktis iš dominančių programavimo kalbų.
// 5. Dominančias programavimo kalbas atvaizduoti „student-item" elemente.

// 6. Sukūrus studentą, turi iššokti <span> elementas, kuris informuoja apie studento sukūrimą: „Sukurtas studentas (Vardas Pavardė)". Šis span elementas dingsta po 5 sekundžių.

// 7. Range reikšmės atvaizdavimas naujame elemente.

// TREČIA DALIS:
// 1. Vietoje asmens duomenų (el. paštas ir tel. nr) rodyti tik žvaigždutes „****".
// 2. Kiekviename „student-item" elemente sukurti mygtuką „Rodyti asmens duomenis".
// 3. Paspaudus šį mygtuką:
// 3.1. Parodyti to studento el. paštą ir tel. nr.
// 3.2. Pakeist mygtuko tekstą į „Slėpti asmens duomenis".
// 4. Jeigu asmens duomenys yra rodomi, tai paspaudus mygtuką:
// 4.1. Paslėpti asmens duomenis.
// 4.2. Mygtuko tekstą pakeisti į „Rodyti asmens duomenis".

// KETVIRTA UŽDUOTIS (formos validacija naudojant JavaScript):
// 1. Priduodant formą (submit) patikrinti ar privalomi laukeliai nėra tušti.
// 2. Jeigu bent vienas privalomas formos laukelis yra tuščias:
// 2.1. Formos alert žinutėje reikia parašyti, jog ne visi laukeliai yra užpildyti. Šis tekstas turi būti raudonos spalvos.
// 2.2. Kiekvienas privalomas input laukelis, kuris nėra užpildytas:
// 2.2.1. Turi būti apvestas raudonu rėmeliu.
// 2.2.2. Šalia laukelio turi būti parašytas raudonas tekstas: „Šis laukelis yra privalomas".

// ------------------------- PAPILDOMA UŽDUOTIS (formos validacija naudojant JavaScript):
// Papildyti formos validaciją. Jeigu:
// 1. Vardas yra trumpesnis nei 3 simboliai, parašyti: „Vardas privalo būti bent 3 simbolių ilgumo".
// 2. Pavardė yra trumpesnė nei 3 simboliai, parašyti: „Pavardė privalo būti bent 3 simbolių ilgumo".
// 3. Amžius yra neigamas, parašyti: „Amžius privalo būti teigiamas skaičius".
// 4. Amžius yra daugiau nei 120 metų, parašyti: „Įvestas amžius yra per didelis".
// 5. Telefono numeris yra mažiau nei 9 arba daugiau nei 12, parašyti: „Įvestas telefono numeris yra neteisingas".
// 6. Elektroninis paštas yra trumpesnis nei 5 simboliai arba jame nėra panaudotas @ simbolis, parašyti: „Įvestas elektroninis paštas yra neteisingas".

// PENKTA UŽDUOTIS (studento ištrynimas):
// 1. Prie kiekvieno sukurti studento elemento pridėti mygtuką „Ištrinti studentą".
// 2. Paspaudus šį mygtuką, studento elementas yra ištrinamas.
// 3. Ištrynus studentą, turi iššokti <span> elementas, kuris informuoja apie studento ištrynimą: „Studentas (Vardas Pavardė) sėkmingai ištrintas.". Šis span elementas dingsta po 5 sekundžių.

// ŠEŠTA UŽDUOTIS:
// 1. Sukurti pradinius duomenų masyvą, kuriame būtų bent 5 studentų duomenys (objektų formatu).
// 2. Sukurti funkciją, kuri priima šiuos duomenis ir užkrovus puslapį į ekraną iškart išveda duomenis iš šio masyvo.

// SEPTINTA UŽDUOTIS:
// 1. Prie kiekvieno studento pridėti mygtuką, kurį paspaudus leistų redaguoti studento duomenis.
// 2. Redaguojant studentą, submit mygtuko tekstas turėtų pasikeisti į „Save Changes".
// 3. Pakeitus studento duomenis, turi iššokti <span> elementas, kuris informuoja apie studento duomenų redagavimą: „Studento (Vardas Pavardė) duomenys sėkmingai pakeisti". Šis span elementas dingsta po 5 sekundžių.

// 1. Sukurti Edit mygtuką.
// 2. Prie mygtuko pridėti event listener'į.
// 3. Surinkti studento duomenis ir jais užpildyti formos laukelius.
// 4. Pakeisti formos submit mygtuko tekstą.
// 5. Išsaugoti studento HTML elementą kintamąjame.
// 6. Submit event'o metu patikrinti ar kuriame naują studentą, ar redaguojame jau sukurtą.
// 7. Jeigu studentas redaguojamas, šį naują (redaguotą) HTML elementą panaudoti perrašant seną studento HTML elementą (kuris išsaugotas 5 žingsnyje).

//8. Pakeisti formos submit mygtuko tekstą į pradinį ir pakeisti iššokančio pranešimo tekstą.
