function getTemperature(response) {
  let h1 = document.querySelector("h1");
  let temp = Math.round(response.data.main.temp);
  console.log(temp);
  h1.innerHTML = `It is ${temp}&degC right now`;
  
}

function myLocation(position) {
  let lat = position.coords.longitude;
  // console.log(lat);
  let long = position.coords.latitude;
  // console.log(long);
  let apiKey = "cb399caa6a2646c8d531b4311e9df224";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(getTemperature);

}

navigator.geolocation.getCurrentPosition(myLocation);



