const studentFormEl = document.querySelector("form");
console.log(studentFormEl);
studentFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let studentNameEl = document.querySelector("#student-name").value;
  let studentSurnameEl = document.getElementById("student-surname").value;
  let studentAge = studentFormEl.querySelector("#student-age").value;
  let studentPhone = studentFormEl.querySelector('[name="phone"]').value;

  let studentEmail = event.target.elements.email.value;
  console.log(studentEmail);
});
