const num1 = prompt("შეიყვანეთ პირველი რიცხვი:");
const num2 = prompt("შეიყვანეთ მეორე რიცხვი:");

if (num1 > num2) {
  console.log("რიცხვი 1 მეტია რიცხვი 2-ზე.");
} else if (num1 == num2) {
  console.log("რიცხვი 1 და რიცხვი 2 თანაბარია.");
} else {
  console.log("რიცხვი 1 ნაკლებია რიცხვი 2-ზე.");
}



// სტრინგი რომელიც ინახება ცვლადში
const myString = "გამარჯობა, როგორი ხარ?";

// სტრინგის დიდი ასოებით გადაკეთება
const upperCaseString = myString.toUpperCase();

// სტრინგის პატარა ასოებით გადაკეთება
const lowerCaseString = myString.toLowerCase();

// შედეგების console.log()-ით გამოსახვა
console.log("დიდი ასოებით: " + upperCaseString);
console.log("პატარა ასოებით: " + lowerCaseString);




// ამჟამინდელი წელი
const currentYear = 2025;

// მომხმარებლის ასაკის შეყვანა
const age = prompt("შეიყვანეთ თქვენი ასაკი:");

// დაბადების წლის გამოთვლა
const birthYear = currentYear - age;

// შედეგების console.log()-ით გამოსახვა
console.log("თქვენი დაბადების წელი არის: " + birthYear);


