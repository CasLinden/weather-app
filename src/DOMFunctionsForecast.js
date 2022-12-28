import { getFiveDayForecast } from "./apifunctions";
import { convertTemp } from "./temperatures";


let foreCastKelvins = []

async function displayForecast(geo) {
  let data = await getFiveDayForecast(geo);
  let fourDayData = fourDays(trimToday(data.list))
  createElements(fourDayData)
}

// We need to trim off data about the remainder of today,  we only get forecast data for 4 full coming days

function getDate(entry) {
  return entry.dt_txt.split(" ")[0]
}

function getDayOfMonth(entry) {
  return getDate(entry).split("-")[2].substring(0, 2);
}

function findTomorrowIndex(list) {
  const today = getDayOfMonth(list[0])
  const tomorrow = list.find((day) => getDayOfMonth(day) != today);
  return list.indexOf(tomorrow)
}

function trimToday(list) {
  return list.slice(findTomorrowIndex(list))
}

function fourDays (newList) {
  let fourDayArray = [];
  for (let i = 0; i < 32; i += 8) {
    fourDayArray.push(newList.slice(i, i + 8));
  }
  return fourDayArray
}

// BELOW: dom elements 

function createElements(fourDayData) {
  const container = document.querySelector('.forecast-container')
  clearContainer()
  foreCastKelvins = []
  fourDayData.forEach(day => {
    let entryContainer = makeEntryContainer()
    entryContainer.appendChild(makeEntryDate(day))
    entryContainer.appendChild(makeEntryIcon(getIconUrl(getDayTimeIcon(day))));
    entryContainer.appendChild(makeEntryTemp(day))
    container.appendChild(entryContainer)
  }); 
  addDivisions()
}

function clearContainer() {
    const container = document.querySelector(".forecast-container");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
}

function makeEntryContainer() {
  let container = document.createElement("div");
  container.classList.add("forecast-entry-container");
  return container;
}

function makeEntryIcon(url) {
  let icon = document.createElement('img')
  icon.classList.add('forecast-entry-icon', 'icon')
  icon.src = url
  return icon
}

function getDayTimeIcon(day) {
  let dayTimeIcons = day
    .map(entry => entry.weather[0].icon)
    .filter(icon => icon.substring(2) === 'd')

  //for the simple forecast we want to display the most common of the day time icons
    const iconCounts = dayTimeIcons.reduce((counts, icon) => {
      counts[icon] = (counts[icon] || 0) + 1;
      return counts;
    }, {});

    let commonIcon;
    let highestCount = 0;
//the highest count is stored in commonIcon
    Object.keys(iconCounts).forEach((str) => {
      if (iconCounts[str] > highestCount) {
        highestCount = iconCounts[str];
        commonIcon = str;
      }
    });
    return commonIcon;
}

function getIconUrl(icon) {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

function makeEntryTemp(day) {
  let temp = document.createElement('div')
  temp.classList.add('forecast-entry-temp')
  temp.textContent = convertTemp(getAvgTemp(day))
  foreCastKelvins.push(getAvgTemp(day))
  return temp
}

function getAvgTemp(day) {
  return (
    day
      .map((entry) => entry.main.temp)
      .reduce((total, currentVal) => total + currentVal, 0) / 8
  );
}

function makeEntryDate(day) {
  let dateContainer = document.createElement('h4')
  dateContainer.classList.add('forecast-entry-date')
  dateContainer.textContent = `${daysOfWeek[new Date(day[3].dt_txt).getDay()]} ${getDayOfMonth(day[0])}`;
  return dateContainer
}

const daysOfWeek = [
  "Sun",
  "Mon",
  "Tues",
  "Wed",
  "Thur",
  "Fri",
  "Sat",
];

function addDivisions() {
  const icons = document.getElementsByClassName('forecast-entry-container')
  const iconsArray = Array.from(icons)
  iconsArray.pop()
  iconsArray.forEach(element => {
    element.style.borderRight = "1px solid rgba(255, 255, 255, 0.3)"
  })
}

export {
  displayForecast,
  foreCastKelvins
};
