const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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

function displayTime() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, 0);
  const newHour = (hours % 12 || 12).toString().padStart(2, 0);
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const seconds = date.getSeconds().toString().padStart(2, 0);

  const amPM = hours < "12" || hours === "24" ? "AM" : "PM";

  const time = document.getElementById("clock");
  time.textContent = `${newHour}:${minutes}:${seconds} ${amPM}`;
}

function displayDate() {
  const dateObj = new Date();
  const weekday = weekdays[dateObj.getDay()];
  const year = dateObj.getFullYear();
  const date = dateSuffix(dateObj.getDate());
  const month = months[dateObj.getMonth()];

  // const fullDate = weekday + ", " + month + " " + date + ", " + year;

  const fullDate = document.getElementById("date");
  fullDate.textContent = `${weekday}, ${month} ${date}, ${year}`;
}

function dateSuffix(date) {
  if (date % 10 === 1) return `${date}st`;
  if (date % 10 === 2) return `${date}nd`;
  if (date % 10 === 3) return `${date}rd`;
  return `${date}th`;
}

displayDate();
displayTime();
setInterval(displayTime, 1000);
