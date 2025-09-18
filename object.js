// Lesson 1
let input = 'name';

let alien = {
  name: 'Hary',
  tech: 'JS',
  'work exp': 4,
};

console.log(typeof alien, alien);
console.log(alien.name);
console.log(alien.tech);
console.log(alien['work exp']); // if the key has two or more words
console.log(alien[input]);

//Lesson 2
// let alien = {
//   name: 'Hary',
//   tech: 'JS',
//   laptop: {
//     cpu: 'i7',
//     ram: '4gb',
//     brand: 'ASUS',
//   },
// };

// // delete alien.laptop;

// console.log(alien);
// console.log(alien.laptop);
// console.log(alien.laptop?.brand);
// console.log(alien.laptop?.brand.length);

//Lesson 3
// let alien = {
//   name: 'Hary',
//   tech: 'JS',
//   laptop: {
//     cpu: 'i7',
//     ram: '4gb',
//     brand: 'ASUS',
//   },
// };

// for (let key in alien.laptop) {
//   console.log(key, alien.laptop[key]);
// }

// //Lesson 4
// let num = [2, 4, 1, 5, 6, 3, 5, 6, 4];
// let max = num[0];
// let min = num[0];
// let sum = 0;

// for (let i = 0; i < num.length - 1; i++) {
//   if (num[i] > max) max = num[i];
//   if (num[i] < min) min = num[i];

//   sum += num[i];
// }

// let average = sum / num.length;

// console.log(max);
// console.log(min);
// console.log(sum);
// console.log(average);
