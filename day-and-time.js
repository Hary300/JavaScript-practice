let time = new Date();
// console.log(date);

let dayName = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let day = dayName[time.getDay()];
console.log(day);

let monthName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// console.log(time.getDate());
let date = time.getDate();
let month = monthName[time.getMonth()];
// console.log(month);
let year = time.getFullYear();

let hour = time.getHours();
hour = hour < 10 ? '0' + hour : hour;
let minutes = time.getMinutes();
minutes = minutes < 10 ? '0' + minutes : minutes;

let seconds = time.getSeconds();
seconds = seconds < 10 ? '0' + seconds : seconds;
console.log(`${day}, ${date}/${month}/${year}, ${hour}:${minutes}:${seconds}`);
