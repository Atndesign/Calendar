/*

- Get the number of days in a month V
- Generate the number of days
- Be able to switch from month to month
- Convert text to Date

*/

function getDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function generateDays() {
  let days = getDaysInMonth(new Date(2020, 9));
  for (day = 1; day <= days; day++) {
    console.log(day);
  }
}

generateDays();
