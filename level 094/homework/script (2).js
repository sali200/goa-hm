function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let sumPrimes = 0;
for (let num = 1; num <= 100; num++) {
    if (isPrime(num)) {
        sumPrimes += num;
    }
}

console.log("Prime numbers sum from 1 to 100:", sumPrimes);





for (let num = 1; num <= 50; num++) {
    if (num === 25) {
        continue;
    }
    if (num % 2 === 0) {
        console.log(num);
    }
}
