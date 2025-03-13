let content = document.querySelector("p");
let authr = document.querySelector("span");

document.querySelector("button").addEventListener("click", () => {
  digit = Math.floor(Math.random() * 30);

  fetch("https://dummyjson.com/quotes/" + digit)
    .then((res) => res.json())
    .then((data) => {
      content.innerHTML = data["quote"];
      authr.innerHTML = data["author"];
    });
});
