let now = new Date();

let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = weekDays[now.getDay()];
let month = now.getMonth() + 1;
let date = now.getDate();
let year = now.getFullYear();
let time = now.toLocaleTimeString();
let today = `${day}, ${date}/${month}/${year}`;

let weatherDate = document.querySelector("#weather-date");
let weatherTime = document.querySelector("#weather-time");

weatherDate.innerHTML = today;
weatherTime.innerHTML = time;

let inputCity = document.querySelector("#input-city");
let weatherCity = document.querySelector("#weather-city");
let currentCity = document.querySelector("#current-city");

function changeCity(event) {
  event.preventDefault();
  let city = inputCity.value;
  weatherCity.innerHTML = city;
}

currentCity.addEventListener("submit", changeCity);

let fahrenheit = document.querySelector("#fahrenheit");
let celcius = document.querySelector("#celcius");

function calculateFahrenheit(event) {
  event.preventDefault();
  let solve = (35 * 9) / 5 + 32;
  fahrenheit.innerHTML = `${solve} &deg;F`;
}
fahrenheit.addEventListener("click", calculateFahrenheit);
