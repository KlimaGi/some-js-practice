const studentFormEl = document.querySelector("form");
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

  const alertEl = document.querySelector("#alert");
  let alertText = `Student created ${studentName} ${studentSurname}`;

  alertEl.textContent = alertText;

  setTimeout(() => {
    alertEl.textContent = "";
  }, 5000);

  if (!studentName) {
    document.querySelector("#student-name").style.borderColor = "crimson";
    alertEl.textContent = "Not all fields are filled";
    alertEl.style.color = "crimson";
    console.log("neveikia");
    return;
  }

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

  studentItem.append(
    nameEl,
    surnameEl,
    studentAgeEl,
    studentPhoneEl,
    studentEmailEl,
    studentKnowledgeEl,
    studentGroupEl,
    interestWrapperEl,
    privateInfoButton
  );
  studentsListEl.prepend(studentItem);

  //studentFormEl.reset();
  event.target.reset();
});

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

// PAPILDOMA UŽDUOTIS (formos validacija naudojant JavaScript):
// Papildyti formos validaciją. Jeigu:
// 1. Vardas yra trumpesnis nei 3 simboliai, parašyti: „Vardas privalo būti bent 3 simbolių ilgumo".
// 2. Pavardė yra trumpesnė nei 3 simboliai, parašyti: „Pavardė privalo būti bent 3 simbolių ilgumo".
// 3. Amžius yra neigamas, parašyti: „Amžius privalo būti teigiamas skaičius".
// 4. Amžius yra daugiau nei 120 metų, parašyti: „Įvestas amžius yra per didelis".
// 5. Telefono numeris yra mažiau nei 9 arba daugiau nei 12, parašyti: „Įvestas telefono numeris yra neteisingas".
// 6. Elektroninis paštas yra trumpesnis nei 5 simboliai arba jame nėra panaudotas @ simbolis, parašyti: „Įvestas elektroninis paštas yra neteisingas".
