import { displayCurrentWeather } from "./DOMFunctionsMain";
import { displayForecast } from "./DOMFunctionsForecast";
import { getLocation, lat, lon } from "./geolocation";

const key = "13ef3f48c50704ff29636e4380808e39";

let loc = "Suginami";

function setNewLoc(newLoc) {
  loc = newLoc;
  displayCurrentWeather();
  displayForecast();
}

function geoLoc() {
  displayCurrentWeather("geo");
  displayForecast("geo");
}

// geo param is only passed when calculating location from lat and long

function buildURL(geo) {
  if (geo) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
  }
  return `https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${key}`;
}

async function getCurrentWeather(geo) {
  let response = await fetch(buildURL(geo));
  let data = await response.json();
  return data;
}

function buildForecastURL(geo) {
  if (geo) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;
  }
  return `https://api.openweathermap.org/data/2.5/forecast?q=${loc}&APPID=${key}`;
}

async function getFiveDayForecast(geo) {
  let response = await fetch(buildForecastURL(geo));
  let data = await response.json();
  return data;
}

export { getCurrentWeather, setNewLoc, getFiveDayForecast, geoLoc };
