function dateTime(event) {
  let now = new Date();

  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = weekDays[now.getDay()];
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let year = now.getFullYear();
  let time = now.toLocaleTimeString();
  let today = `${day}, ${date}/${month}/${year} ${time}`;

  return today
}

function currentData(event) {
  event.preventDefault();

  let InputCity = document.querySelector("#input-city");
  let city = InputCity.value
  let currentCity = document.querySelector("#weather-city");
  currentCity.innerHTML = city;
  
  
}

let current = document.querySelector("#current-city");
current.addEventListener("submit",currentData)