# JavaScript Array Methods: With and Without Callback Functions

Ini adalah ringkasan method array di JavaScript yang **memerlukan function (callback)** dan yang **tidak memerlukan function**.

---

## 1️⃣ Method Array yang **BUTUH function (callback)**

| Method         | Fungsi / Penjelasan                                                     | Contoh                                     |
| -------------- | ----------------------------------------------------------------------- | ------------------------------------------ |
| `.forEach()`   | Jalankan function untuk tiap elemen, **tidak mengembalikan array baru** | `[1,2,3].forEach(n => console.log(n*2));`  |
| `.map()`       | Buat **array baru** dengan hasil function tiap elemen                   | `[1,2,3].map(n => n*2); // [2,4,6]`        |
| `.filter()`    | Buat **array baru** berisi elemen yang memenuhi kondisi                 | `[1,2,3,4].filter(n => n%2===0); // [2,4]` |
| `.reduce()`    | “Mengurangi” array jadi satu nilai                                      | `[1,2,3].reduce((acc,n)=>acc+n,0); // 6`   |
| `.some()`      | Cek **setidaknya satu elemen** memenuhi kondisi                         | `[1,2,3].some(n=>n%2===0); // true`        |
| `.every()`     | Cek **semua elemen** memenuhi kondisi                                   | `[2,4,6].every(n=>n%2===0); // true`       |
| `.find()`      | Cari **elemen pertama** yang memenuhi kondisi                           | `[1,2,3].find(n=>n>1); // 2`               |
| `.findIndex()` | Cari **index pertama** yang memenuhi kondisi                            | `[1,2,3].findIndex(n=>n>1); // 1`          |
| `.sort()`      | Bisa pakai function untuk custom sorting                                | `[3,1,2].sort((a,b)=>a-b); // [1,2,3]`     |

> Semua method ini memerlukan **function** sebagai parameter (arrow function, function expression, atau function nama).

---

## 2️⃣ Method Array yang **TIDAK BUTUH function**

| Method       | Fungsi / Penjelasan                     | Contoh                              |
| ------------ | --------------------------------------- | ----------------------------------- |
| `.push()`    | Tambah elemen di akhir array            | `[1,2].push(3); // [1,2,3]`         |
| `.pop()`     | Hapus elemen terakhir                   | `[1,2,3].pop(); // [1,2]`           |
| `.shift()`   | Hapus elemen pertama                    | `[1,2,3].shift(); // [2,3]`         |
| `.unshift()` | Tambah elemen di awal                   | `[2,3].unshift(1); // [1,2,3]`      |
| `.slice()`   | Ambil sebagian array, return array baru | `[1,2,3,4].slice(1,3); // [2,3]`    |
| `.splice()`  | Hapus/tambah elemen di posisi tertentu  | `[1,2,3,4].splice(1,2); // [1,4]`   |
| `.concat()`  | Gabungkan array                         | `[1,2].concat([3,4]); // [1,2,3,4]` |
| `.join()`    | Ubah array jadi string                  | `[1,2,3].join('-'); // "1-2-3"`     |
| `.reverse()` | Membalik urutan array                   | `[1,2,3].reverse(); // [3,2,1]`     |

> Catatan: Beberapa method seperti `.sort()` **bisa pakai function**, tapi **tidak wajib**. Default sorting `.sort()` tanpa function pakai **string comparison**.

---

## 🔑 Tips

- **Method dengan callback** → gunakan function agar bisa memproses tiap elemen.
- **Method tanpa callback** → langsung mengubah array atau mengambil nilai.
- Lebih sering gunakan **arrow function** (`n => n*2`) untuk kode yang singkat dan modern.
