// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0) console.log(i);
// }

// let num = 12345;
// let str = String(num);
// let reverse = '';

// for (let i = str.length - 1; i >= 0; i--) {
//   reverse += str[i];
// }
// let num2 = Number(reverse);
// console.log(num2);

let num = 564782;
let num2 = 0;
while (num > 0) {
  let digit = num % 10;
  num2 = num2 * 10 + digit;
  num = parseInt(num / 10);
}
console.log(num2);
