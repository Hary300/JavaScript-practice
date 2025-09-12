//matematika tipe data
const result1 = '5' + 2;
console.log(result1); // + number jadi string

const result2 = '5' * 2;
console.log(result2); // * string jadi number

const result3 = '5' / 2;
console.log(result3); // / string jadi number

const result4 = '5' - 2;
console.log(result4); // - srting jadi number

//ternary
// const age = 18;
// const message = age >= 18 ? 'You are an adult.' : 'You are a minor.';
// console.log(message); // "You are an adult."

const age = 25;
const hasID = true;
const money = 50;

const message =
  age >= 18 && hasID && money >= 100
    ? 'You are allowed to enter.'
    : 'You are not allowed to enter.';
console.log(message);

console.log('=======');

console.log(true) || console.log('not printed'); // tidak dicetak
false || console.log('printed'); // dicetak
'' || console.log('printed'); // dicetak
console.log(0) || console.log('printed'); // dicetak
'hello' || console.log('not printed'); // tidak dicetak

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log('The office is closed.'); // it is the weekend
}
