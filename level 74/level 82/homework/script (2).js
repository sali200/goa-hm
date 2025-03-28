let number1 = prompt("შეიყვანეთ პირველი რიცხვი:");
let number2 = prompt("შეიყვანეთ მეორე რიცხვი:");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

console.log("პირველი რიცხვი მეტია მეორე რიცხვზე?", number1 > number2);
console.log("პირველი რიცხვი მეორე რიცხვს ტოლია?", number1 === number2);



let string = "hello world";

let upperCaseString = string.toUpperCase();
let lowerCaseString = string.toLowerCase();

console.log("დიდი ასოებით:", upperCaseString);
console.log("პატარა ასოებით:", lowerCaseString);





const currentYear = 2024;
let age = prompt("შეიყვანეთ თქვენი ასაკი:");

age = parseInt(age);

let birthYear = currentYear - age;

console.log("თქვენ დაიბადეთ წელს:", birthYear);




let num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
let num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));
let num3 = parseFloat(prompt("შეიყვანეთ მესამე რიცხვი:"));

let sum = num1 + num2 + num3;
let average = sum / 3;

console.log("ჯამი:", sum);
console.log("საშუალო:", average);

alert("ჯამი: " + sum);
alert("საშუალო: " + average);
