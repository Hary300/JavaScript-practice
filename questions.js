// 1. myFunction() vs myFunction2(), bedanya, positif dan negatifnya??
//  function myFunction() {
//   'use strict';
//   let x = '20';
//   let y = 2;
//   let z = x + y;

//   return z;
// }

// console.log(myFunction()); //202

// function myFunction2() {
//   'use strict';
//   let x = '20';
//   let y = 2;
//   let z = x + y;

//   console.log(z);
// }

// myFunction2(); //202

// jawaban:
// function myFunction() {
//   'use strict';
//   let x = '20';
//   let y = 2;
//   let z = x + y;

//   return z;
// }

// Reusable (bisa dipakai ulang) karena Nilai z dikembalikan sebagai nilai dari myFunction(),
// let hasil = myFunction();
// console.log('Hasilnya adalah ' + hasil); // Hasilnya adalah 202

// function myFunction2() {
//   'use strict';
//   let x = '20';
//   let y = 2;
//   let z = x + y;

//   console.log(z); //202
// }

// myFunction2(); //202

// Tidak Reusable (Hasil z tidak bisa dipakai, karena hasil z tidak dikembalikan sebagai nilai dari fungsi, secara gak langsung fungsinya belum ada nilainya)
// let hasil = myFunction2();
// console.log('Hasilnya adalah ' + hasil); //undefined

// 2. cuma fungsi 1 (aktif) output: 202. cuma fungsi 2 (aktif) output: 202. fungsi 1 dan 2 (aktif) output: 202, undefined, 202, kenapa ada undefined muncul?

// function myFunction() {
//   'use strict';
//   let x = '20';
//   let y = 2;
//   let z = x + y;

//   return z;
// }

// console.log(myFunction()); //202

// function myFunction() {
//   'use strict';
//   let x = '20';
//   let y = 2;
//   let z = x + y;

//   console.log(z);
// }
// myFunction();

//muncul undefined dan 202 di console ketika fungsi yang pertama di aktifkan

// jawaban:
// console.log(myFunction()); //202
// console.log(myFunction()); //undefined (hoisting dari sifat hoisting fungsi ke 2)
// console.log(z); //202

// 3. maksud hoisting itu apa ya ?
//untuk var
// console.log(a); // undefined
// var a = 10;
// console.log(a); // 10

// console.log(b); // error
// let b;
// console.log(b); // 10

// Tidak Ada Hoisting yang Berfungsi untuk let: Meskipun secara teknis variabel yang dideklarasikan dengan let juga diangkat (hoisted), mereka tidak dapat digunakan sebelum deklarasi.

// jawaban: let gak ada hoisting, tapi masih bisa kita lakukan hoisted.

// 4. Memastikan pemahaman
// let mainan = 'yoyo';
// mainan = 'gasing';
/*
1. Let mainan ibarat mainan
2. yoyo isinya (bayangkan satu kotak hanya untuk satu jenis mainan)
3. yoyonya saya jual dan sekarang kotaknya kosong dan saya masukin gasing
4. berarti kotak let yang namanya mainan sekarang didalamnya ada gasing */

// console.log(mainan); //gasing

// const biola = 'biola';
// biola = 'gitar';
/*
1. const ibarat jenis kotaknya​ yang !!!GAK!!! bisa diganti2 isinya
2. kata "biola" pertama adalah nama kotaknya​
3. kata "biola" kedua isinya 
4. kotak biola gak bisa buat nyimpan gitar sehingga hasilnya akan error
*/

// console.log(biola); // error

//Declaration: let a; atau let a = 100;
//inisialisai: let a = 100 atau a = 100; (harus ada nilainya)
// identifier = label/nama yang kita bikin sendiri untuk ngasih identitas ke suatu hal di program.
//contoh
/*let namaSiswa = 'Budi'; // `namaSiswa` adalah identifier
function hitungNilai() {
  return 100;
} // `hitungNilai` adalah identifier */

//5. Tipe data "symbol" akan ada jika sebuah value telah diubah jadi symbol? jawaban: iya, tanpa konversi tidak ada contoh dari type data symbol
/*
console.log(typeof 123);          // "number"
console.log(typeof "halo");       // "string"
console.log(typeof true);         // "boolean"
console.log(typeof Symbol());     // "symbol"
console.log(typeof undefined);    // "undefined"
*/

//6. Increment dan Decrement
// (counter++): Mengembalikan nilai sebelum penambahan.
/*let counter = 5;
console.log(counter++); // 5
console.log(counter); // 6 */

// (++counter): Menambahkan nilai dan mengembalikan nilai setelah penambahan.
/* let counter = 5;
console.log(++counter); // 6*/

//7. gak begitu paham dengan ini
// if (1 || 0) {
//   // seperti if(true || false)
//   console.log('truthy!'); // 'truthy!'
// }

//8. ini maksudnya apa kak?
// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   console.log('The office is closed.'); // it is the weekend
// }

//operator logika dan comparison selalu mengembalikan nilai boolean

//9. Memastikan pemahaman || dan &&
// || kalau ada true, mengembalikan nilai true, jika gak ada yang true munculin operand terakhir
/*console.log(null || 0 || 1 || undefined); // 1
console.log(undefined || null || 0); // 0

//&& kalau ada false, mengembalikan nilai false itu, jika gak ada yang false munculin operand yang terakhir
console.log(1 && 2 && null && 3); // null
console.log(1 && 2 && 3); // 3 */

// || (OR)
/*console.log('========================');

console.log(true || 6); // true
console.log('hello' || 7); //'hello'
console.log(false || 8); // 8
console.log('' || 9); // 9

console.log('========================');*/
// const name = console.log(true);
// const name2 = true;
// console.log(name);
// console.log(name2);

// Operator OR || menghentikan evaluasi segera setelah menemukan nilai true
// true || console.log(5); // 22 nya tidak muncul di console
// console.log(true) || console.log(6); // muncul 22 nya di console (true dan 6), kenapa gak berhenti di true saja??

// 'hello' || console.log(7); // 22 nya tidak muncul di console
// console.log('hello') || console.log(7); // 22 nya muncul di console, kenapa gak berhenti di 'hello' saja??

// false || console.log(8); // muncul di console (8)
// console.log(false) || console.log(8); // muncul di console (false dan 8)

// '' || console.log(9); // muncul di console (9)
// console.log('') || console.log(9); // muncul di console (" " dan 9)

// console.log('========================');*/

// && (AND)
// console.log('========================');

// console.log(true && 6); // 6
// console.log('hello' && 7); // 7
// console.log(false && 8); // false
// console.log('' && 9); // ''

// console.log('========================');
// true && console.log(6); // hanya 6 muncul di console
// console.log(true) && console.log(6); // hanya true muncul di console, kenapa gak yang 6, bukan 6 adalah operand yang terakhir.

// // 'hello' && console.log(7); // hanya 7 muncul di console
// // console.log('hello') && console.log(7); // hanya 'hello' muncul di console, kenapa gak yang 7, bukanya 7 adalah operand yang terakhir.

// false && console.log(8); // 22 nya gak muncul di console
// console.log(false) && console.log(8); // hanya false muncul diconsole

// console.log('========');
// '' && console.log(9); // 22 nya gak muncul di console
// console.log('========');
// console.log('') && console.log(9); // hanya " " muncul diconsole
// console.log('========');

//10. ini posisi sum++ menentukan nilai yang keluar di console, kenapa bisa gitu?
// code pertama hasil:
// sum :>> 1
// sum :>> 2
// sum :>> 3
// sum :>> 4

// let sum = 0;

// while (sum < 100) {
//   sum++;
//   if (sum == 5) break;

//   console.log('sum :>> ', sum);
// }

// code kedua hasil:
// sum :>> 1
// sum :>> 2
// sum :>> 3
// sum :>> 4
// sum :>> 5

// let sum = 0;

// while (sum < 100) {
//   if (sum == 5) break;
//   sum++;
//   console.log('sum :>> ', sum);
// }

// code ketiga hasil:
// sum :>> 0
// sum :>> 1
// sum :>> 2
// sum :>> 3
// sum :>> 4

// let sum = 0;

// while (sum < 100) {
//   if (sum == 5) break;

//   console.log('sum :>> ', sum);
//   sum++;
// }

//11. 1 kalau kondisinya kita membutuhkan object itu tidak terpisah, bagaimana? apakah pakai let clone = Object.assign({}, user);
//11. 2 let clone = Object.assign({}, user); clone dan user objectnya tidak terpisah. kalau kondisinya kita ingin mereka terpisah, apa pakai let clone = structuredClone(user); walaupun struktur objectnya tidak ada nested.
//11.3 sebenernya clone disini itu gunanya apa ya kak? kenapa gak copas saja data dalam objectnya?

// ### **Nested Cloning**
// Jika objek memiliki properti yang juga merupakan objek lain, kita perlu melakukan *deep cloning* agar objek-objek tersebut benar-benar terpisah.
// let user = {
//   name: 'John',
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };

// let clone = structuredClone(user);

// console.log(user.sizes === clone.sizes); // false, objek berbeda (tapi nilainya tetap sama kan ya? height: 182)

//12. memastikan pemahaman
// Setup
// const myArray = [
//   ['John', 23],
//   ['cat', 2],
// ];
// myArray.pop(); // ← pertama kali pop, buang ["cat", 2]

// // Only change code below this line
// const removedFromMyArray = myArray.pop(); // ← kedua kali pop, buang ["John", 23]
// console.log(removedFromMyArray); // Output: ["John", 23]
// console.log(myArray); // Output: []

//13. Kak boleh kita diskusi tentang method? pastikan paham yang mana yang disebut dengan method.
//14. Perbandingan dengan dan tanpa method
// let user = {
//   name: 'John',
//   age: 25,

//   sayHi() {
//     console.log(this.name);
//   },
// };

// user.sayHi(); // John

// let user2 = {
//   name: 'David',
//   age: 30,
// };

// console.log(user2.name); // David
