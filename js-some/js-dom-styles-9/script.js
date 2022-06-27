const title = document.querySelector("h2");
title.style.color = "crimson";
title.style.width = "50%";
title.style.background = "papayawhip";
title.style.padding = "2rem 1rem";
title.style.borderRadius = "0.5rem";

console.log(title.style.color);

document.querySelector("button").addEventListener("click", () => {
  title.style.color = "steelblue";
});
// 9.1
const wordOnClick = document.querySelector("h3");
wordOnClick.addEventListener("click", () => {
  wordOnClick.style.textAlign = "center";
  wordOnClick.style.fontSize = "2rem";
  wordOnClick.style.color = "steelblue";
});

// 9.2
// const clickBtn = document.querySelector("#click");
// const istop = "position:absolute; top:0; left:0;";
// const isbottom = "position:absolute; bottom:0; right:0;";
// clickBtn.style.cssText = istop;
// let originalPosition = true;

// function changePosition() {
//   clickBtn.style.cssText = originalPosition ? isbottom : istop;
//   originalPosition = !originalPosition;
// }

// clickBtn.addEventListener("click", changePosition);

// 9.3
const clickBtn = document.querySelector("#click");
const topleft = "position:absolute; top:0; left:0;";
const topright = "position:absolute; top:0; right:0;";
const bottomright = "position:absolute; bottom:0; right:0;";
const bottomleft = "position:absolute; bottom:0; left:0;";

clickBtn.style.cssText = topleft;
let count = 1;

function changePosition() {
  count++;
  switch (count) {
    case 1:
      clickBtn.style.cssText = topleft;
      break;
    case 2:
      clickBtn.style.cssText = topright;
      break;
    case 3:
      clickBtn.style.cssText = bottomright;
      break;
    case 4:
      clickBtn.style.cssText = bottomleft;
      count = 0;
      break;
    default:
      count = 0;
  }
}

clickBtn.addEventListener("click", changePosition);

// 9.4
const inputChangeBackEl = document.querySelector("#change-back");
inputChangeBackEl.addEventListener("input", (event) => {
  let word = event.target.value;
  let backstyle = word.length < 3 ? "floralwhite" : "aliceblue";
  document.querySelector("main").style.background = backstyle;
});

// 9.5
const colorBtnEL = document.querySelector("#change-color");
colorBtnEL.addEventListener("click", changeColor);

function changeColor() {
  let colors = ["cadetblue", "burlywood", "lightblue", "lightpink"];
  let randomNum = Math.round(Math.random() * 3);
  const mainEl = document.querySelector("main");
  mainEl.style.background = colors[randomNum];
}

// 9.6
const rgbBtnEl = document.querySelector("#random-rgb");
rgbBtnEl.addEventListener("click", randomColorsRGB);

function randomColorsRGB() {
  let colorR = Math.floor(Math.random() * 256);
  let colorG = Math.floor(Math.random() * 256);
  let colorB = Math.floor(Math.random() * 256);

  const mainEl = document.querySelector("main");
  mainEl.style.background = `rgb(${colorR}, ${colorG}, ${colorB})`;
}
