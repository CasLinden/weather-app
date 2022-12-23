import { displayCurrentWeather } from "./DOMFunctionsMain";
import { displayForecast } from "./DOMFunctionsForecast";

const key = "13ef3f48c50704ff29636e4380808e39";

let loc = "Suginami";

function setNewLoc(newLoc) {
  loc = newLoc;
  displayCurrentWeather();
  displayForecast()
}

function buildURL() {
  return `https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${key}`;
}

async function getCurrentWeather() {
  let response = await fetch(buildURL());
  let data = await response.json();
  return data;
}

function buildForecastURL() {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${loc}&APPID=${key}`;
}

async function getFiveDayForecast() {
  let response = await fetch(buildForecastURL());
  let data = await response.json();
  return data;
}

export { getCurrentWeather, setNewLoc, getFiveDayForecast };
