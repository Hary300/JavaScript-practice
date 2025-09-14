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

// let max = number[0];
// let min = number[0];

// for (let i = 0; i < number.length; i++) {
//   if (number[i] > max) max = number[i];
//   if (number[i] < min) min = number[i];
// }

// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//   sum = sum + number[i];
// }

// let average = sum / number.length;
// console.log(`the max num = ${max}`);
// console.log(`the min num = ${min}`);
// console.log(`the sum = ${sum}`);
// console.log(`the average = ${average}`);

//challenge 3
// const prompt = require('prompt-sync')();

// let number = [];

// for (let i = 0; i < 5; i++) {
//   let input = prompt(`input number ${i + 1}: `);

//   let num = parseInt(input);
//   if (isNaN(num)) {
//     console.log('only number');
//   } else {
//     number.push(num);
//   }
// }

// let sum = 0;
// let max = number[0];
// let min = number[0];

// for (let i = 0; i < number.length; i++) {
//   sum = sum + number[i];
//   if (number[i] > max) max = number[i];
//   if (number[i] < min) min = number[1];
// }

// let average = sum / number.length;
// console.log(`your numbers = ${number}`);
// console.log(`sum = ${sum}`);
// console.log(`max = ${max}`);
// console.log(`min = ${min}`);
// console.log(`average = ${average}`);

//challenge 4
// const prompt = require('prompt-sync')();
// let input = prompt(`input your score: `);

// let score = parseInt(input);
// if (score >= 90) {
//   console.log('A (Brilliant)');
// } else if (score >= 80) {
//   console.log('B (Good)');
// } else if (score >= 70) {
//   console.log('C (Not bad)');
// } else if (score >= 60) {
//   console.log('D (Warning)');
// } else {
//   console.log('F (failed)');
// }

// challenge 5
// let str = 'hello';
// let reverse = '';

// for (let i = str.length - 1; i >= 0; i--) {
//   reverse = reverse + str[i];
// }

// console.log(reverse);

//challenge 6
const prompt = require('prompt-sync')();
console.log('input number (1-10)');
console.log('input e for exit');
let score = 0;
let lives = 10;
console.log(`HP = ${lives}, SCORE = ${score}`);
let number = Math.floor(Math.random() * 3) + 1;

for (let i = 0; i < 10; i++) {
  let input = prompt(`input any number ${i + 1}: `);

  if (input === 'e') {
    console.log('thank you');
    break;
  }

  let num = parseInt(input);

  if (isNaN(num)) {
    console.log('only number please');
    i--;
  } else if (num === number) {
    score = score + 1;
    console.log("That's right");
    console.log(`HP = ${lives}, SCORE = ${score}`);
    number = Math.floor(Math.random() * 3) + 1;
  } else if (num > number) {
    console.log('too high');
    lives = lives - 1;
    console.log(`HP = ${lives}, SCORE = ${score}`);
  } else if (num < number) {
    console.log('too low');
    lives = lives - 1;
    console.log(`HP = ${lives}, SCORE = ${score}`);
  }

  if (lives === 0) {
    console.log('game over');
    break;
  }
}
