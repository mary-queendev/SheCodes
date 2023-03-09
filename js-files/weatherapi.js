let city = 'Sydney'
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
let apiKey = "cb399caa6a2646c8d531b4311e9df224";
let h1 = document.querySelector("h1");

function getTemperature(response) {
    let temp = Math.round(response.data.main.temp);
    console.log(temp);
    h1.innerHTML = `It is ${temp}&degC in ${city}`
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperature);