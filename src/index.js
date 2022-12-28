import "./styles/main.scss";
import { displayCurrentWeather } from "./DOMFunctionsMain";
import { displayForecast } from "./DOMFunctionsForecast";
import { getLocation } from "./geolocation";

// display the weather (Suginami by default)
displayCurrentWeather();
displayForecast()
getLocation()