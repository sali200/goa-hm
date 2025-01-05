function simple_calculator(num1, num2, operation) {
    if (operation === "დამატება") {
        return num1 + num2;
    } else if (operation === "გამოკლება") {
        return num1 - num2;
    } else if (operation === "გამრავლება") {
        return num1 * num2;
    } else if (operation === "გაყოფა") {
        if (num2 === 0) {
            return "შეცდომა: ნულზე გაყოფა შეუძლებელია";
        } else {
            return num1 / num2;
        }
    } else {
        return "არასწორი ოპერაცია";
    }
}

// ფუნქციის გამოძახება და შედეგების ბეჭდვა
console.log(simple_calculator(10, 5, "დამატება"));  // 15
console.log(simple_calculator(10, 5, "გამოკლება"));  // 5
console.log(simple_calculator(10, 5, "გამრავლება"));  // 50
console.log(simple_calculator(10, 5, "გაყოფა"));  // 2
console.log(simple_calculator(10, 0, "გაყოფა"));  // შეცდომა: ნულზე გაყოფა შეუძლებელია























function checkEvenNumber(num) {
    if (num % 2 === 0) {
        return "ეს რიცხვი არის ლუწი";
    } else {
        return "ეს რიცხვი არის კენტი";
    }
}

// ფუნქციის გამოძახება
console.log(checkEvenNumber(4));  // ეს რიცხვი არის ლუწი
console.log(checkEvenNumber(7));  // ეს რიცხვი არის კენტი


































function calculateSquare(num) {
    return num * num;
}

// ფუნქციის გამოძახება
console.log(calculateSquare(4));  // 16
console.log(calculateSquare(7));  // 49









































function checkNumber(num) {
    if (num > 0) {
        return "ეს რიცხვი არის დადებითი";
    } else if (num < 0) {
        return "ეს რიცხვი არის უარყოფითი";
    } else {
        return "ეს რიცხვი არის ნულის ტოლი";
    }
}

// ფუნქციის გამოძახება
console.log(checkNumber(4));  // ეს რიცხვი არის დადებითი
console.log(checkNumber(-7));  // ეს რიცხვი არის უარყოფითი
console.log(checkNumber(0));  // ეს რიცხვი არის ნულის ტოლი
