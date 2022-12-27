import { foreCastKelvins } from "./DOMFunctionsForecast";
import { currentKelvin } from "./DOMFunctionsMain";

let tempUnit = "Celsius";

function toggleTempUnit() {
  tempUnit === "Celsius" ? (tempUnit = "Fahrenheit") : (tempUnit = "Celsius");
  toggleCurrentTemp()
  toggleForecastTemps()
  toggleButtonText()
}

function toggleCurrentTemp() {
  let currentTemp = document.querySelector('.current-temp')
  currentTemp.textContent = convertTemp(currentKelvin)
}

function toggleForecastTemps() {
  let forecastTemps = document.getElementsByClassName("forecast-entry-temp");
  Array.from(forecastTemps).forEach((element, index) => { 
    element.textContent = convertTemp(foreCastKelvins[index])
  });
}

function toggleButtonText() {
  let btn = document.querySelector('.other-temp-unit')
  if (btn.textContent === '°F') {
    btn.textContent = '°C'
  } else {
    btn.textContent = '°F';
  }
}

function convertTemp(KelvinTemp) {
  if (tempUnit === "Celsius") {
    var localTemp = `${Math.round(KelvinTemp - 273.15)}°C`;
  } else if (tempUnit === "Fahrenheit") {
    var localTemp = `${Math.round(((KelvinTemp - 273.15) * 9) / 5 + 32)}°F`;
  }
  return localTemp
}

document.querySelector('.other-temp-unit').addEventListener("click", toggleTempUnit)

export {
  tempUnit,
  toggleTempUnit,
  convertTemp
}