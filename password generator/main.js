let leters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "d",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "{",
  "[",
  "}",
  "]",
  "?",
  "<",
  ">",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
];

let input = document.querySelector("#password");

document.querySelector("#generate").addEventListener("click", () => {
  let x = 0;
  let password = [];
  while (x < 12) {
    let randomNum = Math.floor(Math.random() * leters.length);
    let randomChar = leters[randomNum];
    password.push(randomChar);

    x++;
  }

  input.value = password.toString().trim().replace(/,/g, " ");
});

document.querySelector("#copy").addEventListener("click", () => {
  // Select the text field
  input.select();
  input.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(input.value);

  // Alert the copied text
  alert("Copied the text: " + input.value);
});
