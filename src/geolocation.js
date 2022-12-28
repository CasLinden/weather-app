import { geoLoc } from "./apifunctions";

let lat = 35.6995;
let lon = 139.6355;

function getLocation() {
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  geoLoc()
}

export {
  getLocation,
  lat,
  lon
}