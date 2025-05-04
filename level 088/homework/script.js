function factorial(N) {
    let result = 1;
    for (let i = 2; i <= N; i++) {
        result *= i;
    }
    console.log(result);
}

let number = 5; 
console.log(`ფაქტორიალი ${number} არის ${factorial(number)}`);










function countdown() {
    for (let i = 100; i >= 0; i--) {
        console.log(`დარჩენილია ${i} წამი`);
    }
}

console.log(countdown());












