// Membuat Program array EvenOdd dengan menggunakan Built-in function Array
// apakah semua didalam array adalah genap atau ganjil jika iya maka true jika tidak maka false

const numbers = [2, 4, 6, 8];
const oddNumbers = [1, 3, 5, 7, 9];
const evenOdd = (array, even) => {
    return array.every((item) => {

        if (even) {
            return item % 2 === 0;
        } else {
            return item % 2 !== 0;
        }

    });
};

const even = true;
const odd = false;

console.log(evenOdd(numbers,even)); // Output : True (karena sesuai yang diminta yaitu even/genap dan variabel numbers nya isi array nya semua genap)
console.log(evenOdd(oddNumbers,odd)); // Output : True (karena sesuai yang diminta yaitu odd/ganjil dan variabel oddNumbers nya isi array nya semua genap)
console.log(evenOdd(numbers, odd)); // output : false (karena yang diminta odd/ganjil sedangkan variabel numbers, isi array nya semua genap)
console.log(evenOdd(oddNumbers, even));// Output : false (karena yang diminta even/genap sedangkan variabel oddMumbers, isi array nya semua ganjil)


