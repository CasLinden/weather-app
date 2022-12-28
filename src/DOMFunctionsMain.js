import { getCurrentWeather, setNewLoc } from "./apifunctions";
import { displayTime } from "./clock";
import tempIcon from "./assets/temperature-icon.svg";
import arrowIcon from "./assets/compass-arrow.svg";
import windIcon from "./assets/wind-speed.svg";
import humidityIcon from "./assets/humidity-icon.svg";
import {convertTemp, toggleTempUnit, tempUnit} from "./temperatures"

let currentKelvin

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

async function displayCurrentWeather(geo) {
  let data = await getCurrentWeather(geo);
  currentKelvin = data.main.temp
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

function displayTemp(temp) {
 document.querySelector(".temperature-icon").src = tempIcon;
 document.querySelector(".current-temp").textContent = convertTemp(temp)
}

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

export {
  displayCurrentWeather,
  currentKelvin
};
