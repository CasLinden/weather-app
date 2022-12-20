import { getCurrentWeather, setNewLoc } from "./apifunctions";
import { displayTime } from "./clock";


function typeInLoc() {
  let btn = document.querySelector(".submit-location")
  btn.addEventListener("click", () => {
    let inputField = document.getElementById("location-input").value;
    document.getElementById("location-input").value = "";
    setNewLoc(inputField)
  });
  document.getElementById('location-input').addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      btn.click();
    }
  });
}
typeInLoc()

async function displayCurrentWeather() {
  let data = await getCurrentWeather()
  console.log(data)
  displayName(data)
  displayTime(data.timezone)
  mainIcon(data);
  displayTemp(data)
  displayWind(data)
}

function displayName(data) {
  document.getElementById("location").textContent = `${data.name}, ${data.sys.country}`;
}

function mainIcon(data) {
  document.getElementById('main-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}

let tempUnit = "Celsius";

function toggleTempUnit() {
  tempUnit === "Celsius" ? (tempUnit = "Fahrenheit") : (tempUnit = "Celsius");
}

function convertTemp(kelvinTemp) {
  if (tempUnit === "Celsius") {
    return kelvinTemp - 273.15;
  } else if (tempUnit === "Fahrenheit") {
    return ((kelvinTemp - 273.15) * 9) / 5 + 32;
  }
}

function displayTemp(data) {
  let temp = Math.round(convertTemp(data.main.temp))
  document.querySelector('.current-temp').textContent = temp
}

function displayWind(data) {
  document.querySelector('.wind-speed').textContent = data.wind.speed
  
}

export {
  displayCurrentWeather
}