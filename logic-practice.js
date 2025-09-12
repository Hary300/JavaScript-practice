// day 1 (Check number (even or odd) using if else)
// single data
// console.log('======single data=====');
// let num1 = 7;

// // if the num is divided by 2, the remainder is 0, it's an even number
// if (num1 % 2 === 0) {
//   console.log(`${num1} is an even number`);
// } else {
//   console.log(`${num1} is an odd number`);
// }

// array data
// console.log('\n======array data=====');
// //how to keep multiple data? answer: using array
// let number = [1, 3, 4, 5, 6, 7, 8, 9, 0];

// //how to call every single data in an array?
// console.log('++A. using for loop++');
// // 1. Using loop
// // 2. stored in a variable
// for (let i = 0; i < number.length; i++) {
//   let num2 = number[i]; //take the array element by index
//   // check every single data in array - even or odd?
//   if (num2 % 2 === 0) {
//     console.log(`${num2} is an even number`);
//   } else {
//     console.log(`${num2} is an odd number`);
//   }
// }

//using for of loop
// console.log('\n++B. using for of loop++');
// for (let num3 of number) {
//   if (num3 % 2 === 0) {
//     console.log(`${num3} is an even number`);
//   } else {
//     console.log(`${num3} is an odd number`);
//   }
// }

// // array data
// console.log('\n======prompt=====');
// const prompt = require('prompt-sync')();
// console.log('input e for exit');

// while (true) {
//   let input = prompt('input any number: ');

//   if (input === 'e') {
//     break;
//   }

//   let num4 = parseInt(input);
//   if (isNaN(num4)) {
//     console.log('only number');
//   } else if (num4 % 2 === 0) {
//     console.log(`${num4} is an even number`);
//   } else if (num4 % 2 !== 0) {
//     console.log(`${num4} is an odd number`);
//   }
// }

//challenge 1
// const prompt = require('prompt-sync')();

// let number = [];

// for (let i = 0; i < 5; i++) {
//   let input = prompt('input any number: ');

//   let num = parseInt(input);
//   if (isNaN(num)) {
//     console.log('only number');
//     i--;
//   } else {
//     number.push(num);
//   }
// }

// console.log(`your number = ${number}`);

// for (let i = 0; i < number.length; i++) {
//   let num = number[i];
//   if (num % 2 === 0) {
//     console.log(`${num} is an even number`);
//   } else {
//     console.log(`${num} is an odd number`);
//   }
// }

//Challenge 2
// const prompt = require('prompt-sync')();

// let number = [];
// console.log('input 5 numbers');
// console.log('input e for exit');
// for (let i = 0; i < 5; i++) {
//   let input = prompt(`input number ${i + 1}: `);

//   if (input === 'e') {
//     break;
//   }

//   let num = parseInt(input);

//   if (isNaN(num)) {
//     console.log('only number');
//     i--;
//   } else {
//     number.push(num);
//   }
// }

// if (number.length > 0) {
//   console.log('your number = ' + number);
// } else {
// }
