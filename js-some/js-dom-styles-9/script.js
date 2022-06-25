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
const clickBtn = document.querySelector("#click");
const istop = "position:absolute; top:0; left:0;";
const isbottom = "position:absolute; bottom:0; right:0;";
clickBtn.style.cssText = istop;
let originalPosition = true;

function changePosition() {
  clickBtn.style.cssText = originalPosition ? isbottom : istop;
  originalPosition = !originalPosition;
}

clickBtn.addEventListener("click", changePosition);

// 9.3
