import { displayCurrentWeather } from "./DOMfunctions";

const key = "13ef3f48c50704ff29636e4380808e39";

let loc = "Suginami";

function setNewLoc(newLoc) {
  loc = newLoc
  displayCurrentWeather()
}

function buildURL() {
  return `https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${key}`
}

async function getCurrentWeather() {
  let response = await fetch(buildURL());
  let data = await response.json();
  return data ;
}

export {
  getCurrentWeather,
  setNewLoc
}

