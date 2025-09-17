const botName = 'MathBot';
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting + '\n');

// Math.random()
console.log(
  'The Math.random() method returns a pseudo random number between 0 and less than 1.'
);

const randomNum = Math.random();
console.log(`Math.random(): ${randomNum}
  `);

// Math.random() (min - max)
console.log('Now, generate a random number between two values.');

const min = 50;
const max = 100;

const randomNum2 = Math.random() * (max - min + 1) + min;
console.log(`Math.random() (50-100): ${randomNum2}
  `);

// Math.floor()
console.log(
  'The Math.floor() method rounds the value down to the nearest whole integer.'
);

const numRoundedDown = Math.floor(6.7);
console.log(`Math.floor(): ${numRoundedDown}
  `);

// Math.ceil()
console.log(
  'The Math.ceil() method rounds the value up to the nearest whole integer.'
);

const numRoundedUp = Math.ceil(3.2);
console.log(`Math.ceil(): ${numRoundedUp}
  `);

// Math.round()
console.log(
  'The Math.round() method rounds the value to the nearest whole integer.'
);

const numRounded = Math.round(2.7);
console.log(`Math.ceil() "round up": ${numRounded}`);
const numRounded2 = Math.round(11.2);
console.log(`Math.ceil() "round down": ${numRounded2}
  `);

// Math.max() and Math.min()
console.log(
  'The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.'
);

const maxNum = Math.max(3, 125, 55, 24);
console.log(`Math.max() ${maxNum}`);
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(`Math.min() ${minNum}
  `);

console.log('It was fun learning about the different Math methods with you!');
