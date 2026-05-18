// Membuat Program Mengecek apakah semua didalam array adalah genap atau ganjil 
// Menggunakan proses manual
const numbers = [2, 4, 6, 8];
const oddNumbers = [1, 3, 5, 7, 9];
const even = true;
const odd = false;
const evenOdd = (array, even) => {
    for (let i = 0; i < array.length; i++) {
        if (even === true) {
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

console.log(evenOdd(numbers, even));
console.log(evenOdd(oddNumbers, odd));