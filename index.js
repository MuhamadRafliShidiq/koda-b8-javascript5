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

console.log(evenOdd(numbers,even)); // Output : True (karena sesuai yang diminta yaitu even/genap)
console.log(evenOdd(numbers,odd)); // Output : True (karena sesuai yang diminta yaitu odd/ganjil)
console.log(evenOdd(numbers, odd)); // output : false (karena yang diminta odd/ganjil)
console.log(evenOdd(oddNumbers, even));// Outpu : false (karena yang diminta even/genap)


