/*

- Get the number of days in a month V
- Generate the number of days V
- Check the first day of the week
- Be able to switch from month to month
- Convert text to Date

*/
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let calendar = document.getElementById("calendar");

date.setDate(1);

function displayDate() {
  document.querySelector(".date__month").innerHTML = months[date.getMonth()];
  document.querySelector(".date__full-date").innerHTML = date.toDateString();
}

const firstDayIndex = date.getDay();
let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const lastDayIndex = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDay();

const nextDays = 7 - lastDayIndex;

function generatePastDays() {
  for (lastDay = firstDayIndex; lastDay > 0; lastDay--) {
    calendar.innerHTML += `<p class="numbers__number --grey">${
      prevLastDay - lastDay + 1
    }</p>`;
  }
}

function generateNextDays() {
  for (nextDay = 1; nextDay <= nextDays; nextDay++) {
    calendar.innerHTML += `<p class="numbers__number --grey">${nextDay}</p>`;
  }
}

function generateDays() {
  let days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  for (day = 1; day < days; day++) {
    if (
      day === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      calendar.innerHTML += `<p class="numbers__number --current">${day}</p>`;
    } else {
      calendar.innerHTML += `<p class="numbers__number">${day}</p>`;
    }
  }
}

function generateDayName() {
  for (i = 1; i <= 7; i++) {
    calendar.innerHTML += `<p class="days__text">${dayNames[i - 1]}</p>`;
  }
}

function renderCalendar() {
  calendar.innerHTML = "";
  displayDate();
  generateDayName();
  generatePastDays();
  generateDays();
  generateNextDays();
}

document.querySelector("#lastMonth").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector("#nexttMonth").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

date.setMonth(date.getMonth());
renderCalendar();
