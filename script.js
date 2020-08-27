/*

- Get the number of days in a month V
- Generate the number of days V
- Check the first day of the week
- Be able to switch from month to month
- Convert text to Date

*/

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
  "November",
  "December",
];

let date = new Date();

date.setDate(1);

document.querySelector(".date__month").innerHTML = months[date.getMonth()];
document.querySelector(".date__full-date").innerHTML = date.toDateString();

function generateDays() {
  let calendar = document.getElementById("calendar");
  let days = getDaysInMonth(new Date(2020, 9));
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

generatePastDays();
generateDays();
generateNextDays();
