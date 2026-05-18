# Javascript 5

Pada Kode Program JavaScript sederhana ini untuk memvalidasi apakah seluruh elemen di dalam sebuah array memiliki tipe angka yang seragam (semuanya genap atau semuanya ganjil) menggunakan fungsi bawaan (built-in function) Array.

## Cara Kerja Program dengan Menggunakan built-in function Array.

## Built-in Function

### 1. Inisialisasi Data Array dan Indikator

Program menyiapkan dua buah array contoh untuk diuji:

- `numbers`: Berisi sekumpulan angka genap `[2, 4, 6, 8]`.
- `oddNumbers`: Berisi sekumpulan angka ganjil `[1, 3, 5, 7, 9]`.

Selain itu, dibuat dua variabel berbasis boolean untuk type bilangan:

- `even = true` (untuk mode pengecekan angka genap).
- `odd = false` (untuk mode pengecekan angka ganjil).

### 2. Fungsi Validasi `evenOdd(array, even)`

Fungsi ini melakukan pemeriksaan utama dengan menerima dua parameter: `array` yang akan diperiksa dan `typeNumber` sebagai penentu jenis angka (genap/ganjil).

### 3. Pemanfaatan Built-in Function `Array.every()`

Di dalam fungsi `evenOdd`, program menggunakan metode bawaan `every()`untuk menyusuri setiap elemen (`item`) di dalam array dan menguji apakah semua elemen tersebut memenuhi kondisi tertentu:

- Jika `typeNumber` bernilai `true` (Genap)\*\*: `every()` akan memeriksa apakah setiap `item % 2 === 0` (sisa hasil bagi 2 adalah 0). Jika ada satu saja angka ganjil, proses berhenti dan langsung mengembalikan `false`.
- Jika `typeNumber` bernilai `false` (Ganjil)\*\*: `every()` akan memeriksa apakah setiap `item % 2 !== 0` (sisa hasil bagi 2, tidak 0). Jika ada satu saja angka genap, proses langsung mengembalikan `false`.

### 4. Hasil Akhir (Return Value)

Method `every()` akan mengembalikan nilai `true` jika seluruh elemen array lolos pengujian kondisi di atas. Jika ada satu saja elemen yang melanggar, fungsi akan langsung mengembalikan nilai `false`.

## Proses Manual

### 1. Inisialisasi Data dan Indikator

Program menyiapkan dua buah array sebagai data uji:

- `numbers`: Berisi sekumpulan angka genap `[2, 4, 6, 8]`.
- `oddNumbers`: Berisi sekumpulan angka ganjil `[1, 3, 5, 7, 9]`.

Serta dua variabel boolean :

- `even = true` (pemeriksaan mode genap).
- `odd = false` (pemeriksaan mode ganjil).

### 2. Fungsi Pengecekan `evenOdd(array, typeNumber)`

Fungsi ini menerima array yang akan diperiksa dan variabel `typeNumber` sebagai penentu target tipe angka yang dicari. Di dalam fungsi ini, proses pemeriksaan manual dilakukan menggunakan struktur perulangan `for`.

### 3. Perulangan Manual dan Logika Eliminasi

Program akan menyusuri array satu per satu mulai dari indeks `0` hingga indeks terakhir (`array.length - 1`). Pada setiap iterasi, program melakukan pengecekan berdasarkan nilai `typeNumber`:

- Jika `typeNumber === true` (Mencari Semua Genap) maka akan memeriksa apakah ada elemen yang ganjil (`array[i] % 2 !== 0`). Jika menemukan satu saja angka ganjil, program tidak akan melanjutkan perulangan dan langsung menghentikan fungsi
  dengan mengembalikan nilai `false`.

- Jika `typeNumber === false` (Mencari Semua Ganjil) maka akan memeriksa apakah ada elemen yang genap (`array[i] % 2 === 0`). Jika menemukan satu saja angka genap, fungsi akan langsung dihentikan dan mengembalikan nilai `false`.

### 4. Hasil Akhir (Return Value)

Jika perulangan `for` berhasil berjalan sampai selesai tanpa sekalipun memicu kondisi `return false` di dalam blok `if`, artinya seluruh elemen di dalam array tersebut telah memenuhi syarat. Program kemudian akan mengeksekusi baris paling
akhir, yaitu mengembalikan nilai `true`.
