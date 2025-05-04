let sum = 0;
for (let number = 1; number <= 10; number++) {
    sum += number;
}

console.log(`საბოლოო რიცხვების ჯამი არის ${sum}`);





for (let x = 1; x <= 10; x++) {
    console.log(`${x} - ის კვადრატი არის ${x * x}`);
}



let str = "გამარჯობა";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}






for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}






