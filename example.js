// Mencari 20 Built-in Method pada Javascript
// 1. filter ()
// untuk menyaring elemen-elemen dari sebuah array berdasarkan kondisi tertentu
// contoh
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers + " Method Filter()");

// 2. find ()
// untuk mencari elemen pertama dalam sebuah array yang memenuhi kondisi (tes) tertentu. Jika tidak ada elemen yang cocok, metode ini akan mengembalikan nilai undefined
// contoh
const evenNumbers1 = numbers.find((number) => number % 2 === 0);
console.log(evenNumbers1 + " Method Find()");

// 3. some ()
// untuk mengecek apakah setidaknya satu elemen di dalam array memenuhi kondisi tertentu. Metode ini akan mengembalikan nilai boolean (true atau false) dan tidak mengubah array aslinya
// contoh
const evenNumbers2 = numbers.some((number) => number % 2 === 0);
console.log(evenNumbers2 + " Method Some()");

// 4. every ()
// untuk menguji apakah semua elemen dalam suatu array sesuai dengan kondisi tertentu yang diberikan oleh fungsi tertentu
// contoh
const evenNumbers3 = numbers.every((number) => number % 2 === 0);
console.log(evenNumbers3 + " Method Every()");

// 5. ForEach ()
// berfungsi untuk melakukan perulangan (iterasi) pada setiap elemen di dalam sebuah array
// contoh
const array = ["a", "b", "c"];
array.forEach((element) => console.log(element + " Method ForEach()"));


// 6. map ()
// untuk membuat array baru dengan mengubah setiap elemen dalam array lama menggunakan fungsi tertentu
// contoh
const array1 = [1, 2, 3, 4, 5];
const array2 = array1.map((element) => element * 2);
console.log(array2 + " Method Map()");

// 7. reduce ()
// untuk menghitung nilai akhir dari sebuah array menggunakan fungsi tertentu
// contoh
const array3 = [1, 2, 3, 4, 5];
const total = array3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total + " Method Reduce()");

// 8. Push ()
// untuk menambahkan elemen baru di akhir array
// contoh
const array4 = [1, 2, 3];
array4.push(4);
console.log(array4 + " Method Push()");

// 9. Slice ()
// untuk mengambil bagian dari array
// contoh
const array5 = [1, 2, 3, 4, 5];
const slicedArray = array5.slice(1, 4);
console.log(slicedArray + " Method Slice()");

// 10. Splice ()
// untuk menghapus elemen dari array
// contoh
const array6 = [1, 2, 3, 4, 5];
array6.splice(2, 2);
console.log(array6 + " Method Splice()");

// 11. Concat ()
// untuk menggabungkan dua atau lebih array menjadi satu array baru
// contoh
const array7 = [1, 2, 3];
const array8 = [4, 5, 6];
const mergedArray = array7.concat(array8);
console.log(mergedArray + " Method Concat()");

// 12. Sort ()
// untuk mengurutkan elemen dalam array ascending 
// contoh
const array9 = [5, 3, 1, 4, 2];
array9.sort();
console.log(array9 + " Method Sort()");

// 13. Reverse ()
// untuk mengubah urutan elemen dalam array descending
// contoh
const array10 = [1, 2, 3, 4, 5];
array10.reverse();
console.log(array10 + " Method Reverse()");

// 14. Join ()
// untuk menggabungkan elemen dalam array menjadi sebuah string
// contoh
const array11 = [1, 2, 3, 4, 5];
const joinedString = array11.join("-");
console.log(joinedString + " Method Join()");

// 15. Fill ()
// untuk mengisi semua elemen dalam array dengan nilai tertentu
// contoh
const array12 = [1, 2, 3, 4, 5];
array12.fill(0);
console.log(array12 + " Method Fill()");

// 16. IndexOf ()
// untuk mencari indeks pertama dari elemen tertentu dalam array
// contoh
const array13 = [1, 2, 3, 4, 5];
const index = array13.indexOf(3);
console.log(index + " Method IndexOf()");

// 17. LastIndexOf ()
// untuk mencari indeks terakhir dari elemen tertentu dalam array
// contoh
const array14 = [1, 2, 3, 4, 5];
const lastIndex = array14.lastIndexOf(3);
console.log(lastIndex + " Method LastIndexOf()");

// 18. Includes ()
// untuk mengecek apakah array memiliki elemen tertentu
// contoh
const array15 = [1, 2, 3, 4, 5];
const includes = array15.includes(3);
console.log(includes + " Method Includes()");

// 19. toSorted ()
// untuk mengurutkan elemen dalam array tetapi tidak mengubah array asli
// contoh
const fruits = ['Banana', 'Apple', 'Mango'];
const sortedFruits = fruits.toSorted();
console.log(sortedFruits); // ['Apple', 'Banana', 'Mango']
console.log(fruits); // ['Banana', 'Apple', 'Mango']

// 20. ToString ()
// untuk mengubah suatu nilai menjadi tipe string
// contoh
const array17 = [1, 2, 3, 4, 5];
const string = array17.toString();
console.log(string + " Method ToString()");

// MENCARI BUILT-IN FUNCTION PADA JAVASCRIPT

// 1. Lenght ()
// untuk menghitung panjang array
// contoh
const array18 = [1, 2, 3, 4, 5];
const length = array18.length;
console.log(length + " Method Length()");

//  2. Apply()
// untuk menentukan konteks nilai this pada fungsi tertentu yang dipanggil dengan diteruskan dengan satu array
// contoh
const orang = {
    nama: 'Budi',
    sapa: function (pesan, waktu) {
        console.log(`${pesan}, ${waktu} ${this.nama}`);
    }
};
const orangLain = {
    nama: 'Siti'
};
orang.sapa.apply(orangLain, ['Halo', 'Selamat Pagi']); // Output: Halo, Selamat Pagi Siti

// 3. Call()
// untuk menentukan konteks nilai this pada fungsi tertentu yang langsung diteruskan oleh parameternya
// contoh
orang.sapa.call(orangLain, 'Halo', 'Selamat Pagi'); // Output: Halo, Selamat Pagi Siti

// 4. Bind()
// untuk membuat fungsi baru dengan konteks this tertentu dengan memastikan nilai this tetap terikat pada objek tertentu
// contoh
const orangBaru = orang.sapa.bind(orang);
orangBaru('Halo', 'Selamat Pagi'); // Output: Halo, Selamat Pagi Budi

// 5. Name()
// untuk mendapatkan nama fungsi
// contoh
console.log(orang.sapa.name); // Output: sapa
