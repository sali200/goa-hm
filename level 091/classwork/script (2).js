let num = 1;

for (let i = 1; i <= 100; i++) {
    num *= i;

    if (num > 10000) {
        break;
    }
}

console.log(num);




function welcome() {
    let name = prompt();
    console.log(`Welcome, ${name}`);
}


welcome();




let foot = parseInt(readLine(), 10);
let inches = foot * 12;
console.log(inches);
