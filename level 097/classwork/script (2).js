
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    color: "წითელი",
    weight: 1500,
    displayInfo: function() {
        return "ამ მანქანის ბრენდია ${this.brand}, კონკრეტული მოდელია ${this.model}, წლის გამოშვება ${this.year}, ფერი ${this.color}, წონა ${this.weight} კგ";
    }
};


console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.color);
console.log(car.weight);

car.brand = "land cruiser prado";
car.model = "prado";
car.year = 2023;
car.color = "შავი";
car.weight = 2000;


car.mode = "Sport";


delete car.mode;


if (car.brand === "Land cruiser pardo") {
    console.log("იგივე მანქანის ბრენდი გვყოლია ძმობილო");
} else {
    console.log("სხვადასხვა მანქანის ბრენდია, ჩემი მოუგებს");
}

console.log(car.displayInfo());
