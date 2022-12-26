let tempUnit = "Celsius";

let Kelvin

function toggleTempUnit() {
  tempUnit === "Celsius" ? (tempUnit = "Fahrenheit") : (tempUnit = "Celsius");
}

function convertTemp(KelvinTemp) {
  Kelvin = KelvinTemp;
  if (tempUnit === "Celsius") {
    var localTemp = `${Math.round(KelvinTemp - 273.15)}°C`;
  } else if (tempUnit === "Fahrenheit") {
    var localTemp = `${Math.round(((KelvinTemp - 273.15) * 9) / 5 + 32)}°F`;
  }
  return localTemp
}

export {
  tempUnit,
  toggleTempUnit,
  convertTemp
}