// Day 1
console.log('Halo dunia!');
console.log(2 + 3);
console.log('Jumlahnya adalah', 2 + 3);

console.log('Halo, saya Hary');
console.log('saya lagi belajar javascript');
console.log('2+3 =', 2 + 3);

console.log('===========');
// Day 2
// variabel let
// let nama = 'Hary';
// console.log(nama);

// nama = 'Dina';
// console.log(nama); // 🧠 let = kamu bisa ubah isinya nanti.

// variabel conts
// const umur = 25;
// console.log(umur);

// umur = 30 (error karena 🧠 const = isinya nggak boleh diubah.)

let makanan = 'Nasi goreng';
console.log('Menu hari ini:', makanan);

makanan = 'Bakso';
console.log('Menu besok:', makanan);

const negara = 'Indonesia';
console.log('Saya tinggal di', negara);

// const negara = "malaysia" (tidak bisa karena pakai variable const)

console.log('===========');

// Day 3
let a = 'Belajar JavaScript';
let b = 100;
let c = false;
let d;
let e = null;

console.log(typeof a); // string
console.log(typeof b); // number
console.log(typeof c); // boolean
console.log(typeof d); // undefined
console.log(typeof e); // object (null dianggap sebagai object di JavaScript)

console.log('===========');
console.log(typeof a, typeof b, typeof c, typeof d, typeof e);
console.log('===========');

let f = ''; // string kosong
let g = ' '; // string spasi
let h = 'abc'; // string isi

console.log(typeof f); // string
console.log(typeof g); // string
console.log(typeof h); // string

console.log('===========');
let umur = 25;
let nama = '25';
console.log(umur + nama); // 2525 (number + string = string)
console.log(umur - nama); // 0 (number - string = number, string dianggap )
console.log(umur * nama); // 625 (number * string = number, string dianggap 25)
console.log(umur / nama); // 1 (number / string = number, string dianggap 25)
console.log(umur % nama); // 0 (number % string = number, string dianggap 25)
console.log('===========');

// Day 4
let nilai = 80;
if (nilai >= 75) {
  console.log('Kamu Lulus');
} else {
  console.log('Kamu Tidak Lulus');
}

let umurOrang = 17;
if (umurOrang >= 18) {
  console.log('Kamu sudah dewasa');
} else {
  console.log('Kamu masih dibawah umur');
}

// let nilaiUjian = 85;
// if (nilaiUjian >= 90) {
//   console.log('A');
// } else if (nilaiUjian >= 80) {
//   console.log('B');
// } else if (nilaiUjian >= 70) {
//   console.log('C');
// } else if (nilaiUjian >= 60) {
//   console.log('D');
// } else {
//   console.log('E');
// }

// latihan 1
// let nilaiUjian = 82;
// if (nilaiUjian >= 75) {
//   console.log('Lulus');
// } else {
//   console.log('Tidak lulus');
// }

// latihan 2
let skor = 77;
if (skor >= 90) {
  console.log('A');
} else if (skor >= 80) {
  console.log('B');
} else if (skor >= 70) {
  console.log('C');
} else {
  console.log('D');
}

// latihan 3
let umuranak = 25;
if (umuranak < 13) {
  console.log('anak-anak');
} else if (umuranak < 18) {
  console.log('Remaja');
} else if (umuranak < 60) {
  console.log('Dewasa');
} else {
  console.log('Lansia');
}

// prompt

const prompt = require('prompt-sync')(); // ambil fungsi prompt

// minta input nama dari user
const namaUser = prompt('Siapa namamu? ');
const umurUser = prompt('Berapa umurmu? ');
// tampilkan sapaan
console.log(
  'Halo, ' + namaUser + '!' + ' umur kamu ' + umurUser + ' tahun kan? '
);
console.log(`Halo, ${namaUser}! Umur kamu ${umurUser} tahun kan?`);
