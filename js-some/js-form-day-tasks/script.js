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

//4. Formoje prid??ti ???checkbox" tipo input'??, kuriame pateikta galimyb?? rinktis i?? dominan??i?? programavimo kalb??.
// 5. Dominan??ias programavimo kalbas atvaizduoti ???student-item" elemente.

// 6. Suk??rus student??, turi i????okti <span> elementas, kuris informuoja apie studento suk??rim??: ???Sukurtas studentas (Vardas Pavard??)". ??is span elementas dingsta po 5 sekund??i??.

// 7. Range reik??m??s atvaizdavimas naujame elemente.

// TRE??IA DALIS:
// 1. Vietoje asmens duomen?? (el. pa??tas ir tel. nr) rodyti tik ??vaig??dutes ???****".
// 2. Kiekviename ???student-item" elemente sukurti mygtuk?? ???Rodyti asmens duomenis".
// 3. Paspaudus ???? mygtuk??:
// 3.1. Parodyti to studento el. pa??t?? ir tel. nr.
// 3.2. Pakeist mygtuko tekst?? ?? ???Sl??pti asmens duomenis".
// 4. Jeigu asmens duomenys yra rodomi, tai paspaudus mygtuk??:
// 4.1. Pasl??pti asmens duomenis.
// 4.2. Mygtuko tekst?? pakeisti ?? ???Rodyti asmens duomenis".

// KETVIRTA U??DUOTIS (formos validacija naudojant JavaScript):
// 1. Priduodant form?? (submit) patikrinti ar privalomi laukeliai n??ra tu??ti.
// 2. Jeigu bent vienas privalomas formos laukelis yra tu????ias:
// 2.1. Formos alert ??inut??je reikia para??yti, jog ne visi laukeliai yra u??pildyti. ??is tekstas turi b??ti raudonos spalvos.
// 2.2. Kiekvienas privalomas input laukelis, kuris n??ra u??pildytas:
// 2.2.1. Turi b??ti apvestas raudonu r??meliu.
// 2.2.2. ??alia laukelio turi b??ti para??ytas raudonas tekstas: ?????is laukelis yra privalomas".

// ------------------------- PAPILDOMA U??DUOTIS (formos validacija naudojant JavaScript):
// Papildyti formos validacij??. Jeigu:
// 1. Vardas yra trumpesnis nei 3 simboliai, para??yti: ???Vardas privalo b??ti bent 3 simboli?? ilgumo".
// 2. Pavard?? yra trumpesn?? nei 3 simboliai, para??yti: ???Pavard?? privalo b??ti bent 3 simboli?? ilgumo".
// 3. Am??ius yra neigamas, para??yti: ???Am??ius privalo b??ti teigiamas skai??ius".
// 4. Am??ius yra daugiau nei 120 met??, para??yti: ?????vestas am??ius yra per didelis".
// 5. Telefono numeris yra ma??iau nei 9 arba daugiau nei 12, para??yti: ?????vestas telefono numeris yra neteisingas".
// 6. Elektroninis pa??tas yra trumpesnis nei 5 simboliai arba jame n??ra panaudotas @ simbolis, para??yti: ?????vestas elektroninis pa??tas yra neteisingas".

// PENKTA U??DUOTIS (studento i??trynimas):
// 1. Prie kiekvieno sukurti studento elemento prid??ti mygtuk?? ???I??trinti student??".
// 2. Paspaudus ???? mygtuk??, studento elementas yra i??trinamas.
// 3. I??trynus student??, turi i????okti <span> elementas, kuris informuoja apie studento i??trynim??: ???Studentas (Vardas Pavard??) s??kmingai i??trintas.". ??is span elementas dingsta po 5 sekund??i??.

// ??E??TA U??DUOTIS:
// 1. Sukurti pradinius duomen?? masyv??, kuriame b??t?? bent 5 student?? duomenys (objekt?? formatu).
// 2. Sukurti funkcij??, kuri priima ??iuos duomenis ir u??krovus puslap?? ?? ekran?? i??kart i??veda duomenis i?? ??io masyvo.

// SEPTINTA U??DUOTIS:
// 1. Prie kiekvieno studento prid??ti mygtuk??, kur?? paspaudus leist?? redaguoti studento duomenis.
// 2. Redaguojant student??, submit mygtuko tekstas tur??t?? pasikeisti ?? ???Save Changes".
// 3. Pakeitus studento duomenis, turi i????okti <span> elementas, kuris informuoja apie studento duomen?? redagavim??: ???Studento (Vardas Pavard??) duomenys s??kmingai pakeisti". ??is span elementas dingsta po 5 sekund??i??.

// 1. Sukurti Edit mygtuk??.
// 2. Prie mygtuko prid??ti event listener'??.
// 3. Surinkti studento duomenis ir jais u??pildyti formos laukelius.
// 4. Pakeisti formos submit mygtuko tekst??.
// 5. I??saugoti studento HTML element?? kintam??jame.
// 6. Submit event'o metu patikrinti ar kuriame nauj?? student??, ar redaguojame jau sukurt??.
// 7. Jeigu studentas redaguojamas, ???? nauj?? (redaguot??) HTML element?? panaudoti perra??ant sen?? studento HTML element?? (kuris i??saugotas 5 ??ingsnyje).

//8. Pakeisti formos submit mygtuko tekst?? ?? pradin?? ir pakeisti i????okan??io prane??imo tekst??.
