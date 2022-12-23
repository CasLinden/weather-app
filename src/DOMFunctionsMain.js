import { getCurrentWeather, setNewLoc } from "./apifunctions";
import { displayTime } from "./clock";
import tempIcon from "./assets/temperature-icon.svg";
import arrowIcon from "./assets/compass-arrow.svg";
import windIcon from "./assets/wind-speed.svg";
import humidityIcon from "./assets/humidity-icon.svg";

function typeInLoc() {
  const input = document.getElementById("location-input")
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        let inputField = document.getElementById("location-input").value;
        document.getElementById("location-input").value = "";
        setNewLoc(inputField);
        setTimeout(() => {
          input.blur()
        }, 100);
      }
    });
}
typeInLoc();

let Kelvin;

async function displayCurrentWeather() {
  let data = await getCurrentWeather();
  displayWeatherDescription(data.weather[0].description);
  displayName(data.name, data.sys.country);
  displayTime(data.timezone);
  displayMainIcon(data.weather[0].icon);
  displayTemp(data.main.temp);
  displayWind(data.wind.speed, data.wind.deg);
  displayHumidity(data.main.humidity);
}

function displayWeatherDescription(desc) {
  document.getElementById("description").textContent = desc
    .split(" ")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

function displayName(name, country) {
  document.getElementById(
    "location"
  ).textContent = `${name.toUpperCase()} ${country}`;
}

function displayMainIcon(icon) {
  document.getElementById(
    "main-icon"
  ).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

let tempUnit = "Celsius";

function toggleTempUnit() {
  tempUnit === "Celsius" ? (tempUnit = "Fahrenheit") : (tempUnit = "Celsius");
}

function displayTemp(KelvinTemp) {
  Kelvin = KelvinTemp;
  if (tempUnit === "Celsius") {
    var localtemp = `${Math.round(KelvinTemp - 273.15)}°C`;
  } else if (tempUnit === "Fahrenheit") {
    var localtemp = `${Math.round(((KelvinTemp - 273.15) * 9) / 5 + 32)}°F`;
  }
  document.querySelector(".temperature-icon").src = tempIcon;
  document.querySelector(".current-temp").textContent = localtemp;
}

document.querySelector(".other-temp-unit").addEventListener("click", () => {
  toggleTempUnit();
  displayTemp(Kelvin);
  document.querySelector(".other-temp-unit");
});

function displayWind(speed, deg) {
  document.querySelector(".wind-speed").textContent = `${Math.round(
    speed * 3.6
  )} km/h`;
  document.querySelector(".wind-icon").src = windIcon;
  const arrow = document.getElementById("compass-arrow");
  arrow.src = arrowIcon;
  arrow.style.transform = "rotate(" + deg + "deg)";
}

function displayHumidity(hum) {
  document.querySelector(".humidity").textContent = hum;
  document.querySelector(".humidity-icon").src = humidityIcon;
}

export { displayCurrentWeather };
