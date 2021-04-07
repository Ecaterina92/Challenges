function firstNumbers() {
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < 11; i++) {
    console.log(Numbers[i]);
}
};
console.log(firstNumbers());

function oddNumbers() {
    for(let i = 0; i < 100; i++)
    if(i % 2 !== 0) {
        console.log(i);
    }
}
console.log(oddNumbers());

function multiplyBySeven() {
    for(let i = 0; i < 10; i++) {
        console.log(i * 7);
    }
}
console.log(multiplyBySeven());

function multiply() {
    for(let i = 1; i <= 10; i++) {
        console.log(i * 1, i * 2, i * 3, i * 4, i * 5, i * 6, i * 7, i * 8, i * 9, i * 10);
    }
}
console.log(multiply());

function SumNumbers () {
    let Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    for(let i = 0; i < Number.length; i++) {
        sum += Number[i];
    } 
    return sum;
}
console.log(SumNumbers());

function factorial (n) {
     if(n == 0 || n == 1 ) 
            return 1;
        else return n * factorial(n - 1); 
}
console.log(factorial(10));

function sumOdd() {
    let oddArray = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
    let sum = 0;
    for(let i = 10; i < 30; i++) {
        if(i % 2 !== 0) {
        sum = sum + i;
    }
    } 
    return sum;
}
console.log(sumOdd());

function sumNum () {
const arrayNum = [1, 5, 217, 89, 53, 1276];
let sum = 0;
for(let i = 0; i < arrayNum.length; i++) {
    sum += arrayNum [i];
} return sum;
}
console.log(sumNum());

function average () {
    let total = 0;
    let avg = 0;
    const Num = [10, 90, 345, 82, 5476, 23];  
    for(let i = 0; i < Num.length; i++) {
        total += Num[i];
        avg = total / Num.length;
    } return avg;
    
}
console.log(average());

function getPositiveNum () {
    const arrayOfNum = [-1, 2, -5, -10, 25, 67, -345];
    let Positive = [];
    for(let i = 0; i < arrayOfNum.length; i++) {
        if(arrayOfNum[i] > 0) {
            Positive.push(arrayOfNum[i]);
        }
    } return Positive;
    
}
console.log(getPositiveNum());

function findMaxNum () {
    const Numbers = [-45, 0, 49, -2, -7, 90, 567];
    return Math.max.apply(null, Numbers);
}
console.log(findMaxNum());

function getPrime (num) {
    let isPrime = [1, 3, 5, 20, 7, 9];
    for(let i = 2; i <= Math.sqrt(num); i++) {
if (num % i === 0) return false;
    } return true;
}
console.log(getPrime(20));

function addDigits (num) {
let str = num.toString();
let sum = 0;
for(let i = 0; i < str.length; i++) {
    sum += parseInt(str.charAt(i), 10);
}
return sum;
}
console.log(addDigits(58764939));

function getPrimeNumbers (n) {
    let primes=[];
        for (let i=1; i<n; i++) {
         prime = true;
            let rootI = Math.sqrt(i) + 1;
            for (let j = 2; j < rootI; j++) {
                if (i%j == 0) {prime = false; break;}
            };
            if (prime) primes.push(i);
        }
        document.write(primes.join('-'));
    }
    console.log(getPrimeNumbers(1000));

function rotateArray () {
    let arr = [1, 5, 6, 7, 4, 9, 11];
    let first = arr.shift();
    arr.push(first);
    return arr;
}
console.log(rotateArray());

function reverseArray () {
    let array = ['potato', 'orange', 'juice', 'cheese'];
    array.reverse();
    return array;
}
console.log(reverseArray());

function mergeArrays () {
    let arr1 = ['I like to read'];
    let arr2 = ['novels and history books']
    let arr3 = arr1.concat(arr2);
    return arr3;
}
console.log(mergeArrays());

function twoArrays (one, two) {
    one = [1, 5, 6, 4, 9];
    two = [1, 10, 11, 4, 15];
    let x = one.filter(function(currentValue) {
        return two.indexOf(currentValue) === -3
    });
    let y = two.filter(function(currentValue) {
        return one.indexOf(currentValue) === -3
    });
    
    return one.concat(two);
}
console.log(twoArrays());

function distinctArray (years) {
    years = [2019, 2020, 2018, 2022, 2024, 2006];
    let distinctYears = [...new Set(years)];
    return distinctYears;
}
console.log(distinctArray());

function countWords (str) {
let count = str.split(' ').length;
return count;
}
console.log(countWords(`We live a wonderful life but don't appreciate it`));