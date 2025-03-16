//const url = "https://api.openweathermap.org/data/2.5/weather";
//const apiKey = "f00c38e0279b7bc85480c3fe775d518c";

let degrees = document.querySelector(".degrees");
let discrip = document.querySelector("#description");
let feels_like_box = document.querySelector("#feels-box");
let humidity_box = document.querySelector("#humidity-box");
let wind = document.querySelector("#wind-box");
let w_img = document.querySelector("img");

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  let getInput = document.querySelector("#location").value;
  let full_url = `https://api.openweathermap.org/data/2.5/weather?q=${getInput}&appid=f00c38e0279b7bc85480c3fe775d518c&units=metric`;
  fetch(full_url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      degrees.textContent = data.main["feels_like"];
      discrip.textContent = data.weather[0].description;
      feels_like_box.textContent = data.main["feels_like"];

      if (data.weather[0].main == "Clouds") {
        w_img.src = "src/img/cloud.svg";
      } else if (data.weather[0].main == "Rain") {
        w_img.src = "src/img/rainy.svg";
      } else if (data.weather[0].main == "Clear") {
        w_img.src = "src/img/sunny.svg";
      } else {
        w_img = "src/img/part_cloudy.svg";
      }
      humidity_box.textContent = data.main.humidity;
      wind.textContent = data.wind.speed;
      //degrees.textContent = data.weather[0].main;
    });
});
