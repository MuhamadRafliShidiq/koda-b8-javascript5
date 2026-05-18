// Membuat Program Mengecek apakah semua didalam array adalah genap atau ganjil 
// Menggunakan proses manual
const numbers = [2, 4, 6, 8];
const oddNumbers = [1, 3, 5, 7, 9];
const even = true;
const odd = false;
const evenOdd = (array, typeNumber) => {
    for (let i = 0; i < array.length; i++) {
        if (typeNumber === true) {
            if (array[i] % 2 !== 0) {
                return false;
            }
        } else {
            if (array[i] % 2 === 0) {
                return false;
            }
        }
    }
    return true;
};

console.log(evenOdd(numbers,even)); // Output : True (karena sesuai yang diminta yaitu even/genap dan variabel numbers nya isi array nya semua genap)
console.log(evenOdd(oddNumbers,odd)); // Output : True (karena sesuai yang diminta yaitu odd/ganjil dan variabel oddNumbers nya isi array nya semua genap)
console.log(evenOdd(numbers, odd)); // output : false (karena yang diminta odd/ganjil sedangkan variabel numbers, isi array nya semua genap)
console.log(evenOdd(oddNumbers, even));// Output : false (karena yang diminta even/genap sedangkan variabel oddMumbers, isi array nya semua ganjil)
