// formos submito veikimas ir reiksmiu pasiemimas
let formEl = document.querySelector("form");
formEl.addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault();
  let result = event.target.elements.name.value;
  //console.log(document.querySelector("input[name=name]").value);

  let h3El = document.querySelector("h3");
  h3El.textContent = result;
}
