import { getFiveDayForecast } from "./apifunctions";

async function displayForecast() {
  let data = await getFiveDayForecast();
  console.log(data)
  let days = fourDays(trimToday(data.list))
}

// We need to trim off data that is for today, meaning we only get forecast data for 4 full coming days

function findTomorrow(list) {
  let today = list[0].dt_txt.split("-")[2].substring(0, 2);
  let tomorrow = list.find((day) => day.dt_txt.split("-")[2].substring(0, 2) != today);
  return list.indexOf(tomorrow)
}

function trimToday(list) {
  let newStartIndex = findTomorrow(list)
  let newList = list.slice(newStartIndex)
  return newList
}

function fourDays (newList) {
  let fourDayArray = [];
  for (let i = 0; i < 32; i += 8) {
    fourDayArray.push(newList.slice(i, i + 8));
  }
  console.log(fourDayArray)
  return fourDayArray
}

function getAvgTemps(fourDayArray) {
  let fourTemps = [];
  fourDayArray.forEach((arrayOfEight) => {
    fiveTemps.push(
      arrayOfEight
        .map((e) => e.main.temp)
        .reduce((acc, curr) => acc + curr, 0) / 8
    );
  });
  return fourTemps
}




export { displayForecast };
