let number = 0;
let numberText = document.querySelector("h1");

let minusBtn = document.querySelector("#minus");
let resetBtn = document.querySelector("#reset");
let plusBtn = document.querySelector("#plus");

minusBtn.addEventListener("click", () => {
  number = number - 1;
  chenckNumber(number);
  numberText.innerHTML = number;
});
plusBtn.addEventListener("click", () => {
  number = number + 1;
  chenckNumber(number);
  numberText.innerHTML = number;
});

resetBtn.addEventListener("click", () => {
  number = 0;
  chenckNumber(number);
  numberText.innerHTML = number;
});

function chenckNumber(num) {
  if (num > 0) {
    numberText.style.color = "#387F39";
  } else if (number < 0) {
    numberText.style.color = "#c7253e";
  } else {
    numberText.style.color = "#1e2a5e";
  }
}
