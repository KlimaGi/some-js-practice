// 12.1
let isLegalAge = true;
console.log(isLegalAge);
console.log(isLegalAge.toString());

// 12.2.1
let orangePrice = 1.39;
let text = Number.isInteger(orangePrice)
  ? "you do not need cents"
  : "you need cents";
console.log(text); // false

// 12.2.2
let price = 1.576;
console.log(price.toFixed(2));

// 12.2.3
let fuelFormEl = document.querySelector("#fuel-price-counter-form");
let resultTextEl = document.querySelector("#price");
fuelFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let price = event.target.elements.price.value;
  let amount = event.target.elements.amount.value;
  let result = price * amount;
  console.log(result.toFixed(2));
  resultTextEl.textContent = result.toFixed(2) + " Eur";
});
