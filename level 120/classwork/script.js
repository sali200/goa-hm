 let car = {
    brand: 'toyota',
    model: 'land cruiser prado',
    color: 'black',
}


  
  
  console.log("თვისებების დასახელება:");
  for (let key in car) {
    console.log(key);
  }
  
  
  console.log("თვისებების მნიშვნელობები:");
  for (let key in car) {
    console.log(car[key]);
  }
  
  console.log(`ეს არის ${car.brand} ბრენდი, კონკრეტულად ${car.model} მოდელი, ფერით ${car.color}.`);





let fruits = ['ვაშლი', "მსხალი", 'ბანანი', 'კივი','მანდარინი'];

for (let A in fruits) {
  console.log(fruits[A])
  console.log(`ეს არის ${fruits[A]} მნიშვნელობა და ეს არის მისი ინდექსი ${A}`);
}




let nums = [1,2,3,4,5,6,7,8,9,10];

for (let B of nums) {
    console.log(B);
}
