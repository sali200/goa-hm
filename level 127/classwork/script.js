let numbers = [4, 2, 28, 17, 100];
console.log("რიცხვები:");
numbers.forEach(number => console.log(number));


let texts = ["გოა", "პროგრამირება", "გოა არის საუკეთესო"];
console.log("ტექსი:");
texts.forEach(text => console.log(text))

const booleans = [true, false, true, true];
console.log("boolean:");
booleans.forEach(bool => console.log(bool));





let aboutMe = {
    name: "სალომე",
    lastName: 'მოსეშვილი'
};


let car = {
    brand: "Toyota",
    model: "land-cruiser prado",
    year: 2021,
    color: "შავი"
};


let { name, lastName } = aboutMe;
console.log(`სახელი: ${name}, გვარი: ${lastName}`);

let { brand, model, year } = car;
console.log(`მანქანა: ${brand} ${model}, გამოშვების წელი: ${year}`);


