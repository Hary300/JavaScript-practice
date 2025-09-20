//Quest: Display Current Day and time

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
console.log('Today is : ' + day);

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
hour = hour % 12 || 12;
hour = hour < 10 ? '0' + hour : hour;
// console.log(hour);

let timeFormat = hour <= 12 ? 'AM' : 'PM';

let minutes = time.getMinutes();
minutes = minutes < 10 ? '0' + minutes : minutes;

let seconds = time.getSeconds();
seconds = seconds < 10 ? '0' + seconds : seconds;

console.log(`Current time: ${hour} ${timeFormat} : ${minutes} : ${seconds}`);
