export function displayTime(timeZone) {
  const now = new Date();
  const clientLocationOffsetInMs = now.getTimezoneOffset() * 60 * 1000;
  const currentTime = new Date(
    now.getTime() + clientLocationOffsetInMs + timeZone * 1000
  );

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds;

  let clock = document.getElementById("clock");
  clock.textContent = time;

  startClock(timeZone);
}

let intervalID;

function startClock(timeZone) {
  if (!intervalID) {
    intervalID = setInterval(() => {
      displayTime(timeZone);
    }, 1000);
  } else {
    clearInterval(intervalID);
    intervalID = setInterval(() => {
      displayTime(timeZone);
    }, 1000);
  }
}
