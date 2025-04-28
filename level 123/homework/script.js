
const numbersArray = [2, 4, 6, 8, 10]; 
const allEven = numbersArray.every(num => num % 2 === 0);
console.log(allEven); 

const stringsArray = ["hello", "world", "JavaScript", "programming"]; 
const hasLongString = stringsArray.some(str => str.length > 5);
console.log(hasLongString); 


const originalNumbers = [1, 2, 3, 4, 5]; 
const doubledNumbers = [];
originalNumbers.forEach(num => doubledNumbers.push(num * 2));
console.log(doubledNumbers);


const usersArray = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 18 }
]; 
const allAdults = usersArray.every(user => user.age >= 18);
console.log(allAdults);

const productsArray = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 50 }
];
const hasAffordableProduct = productsArray.some(product => product.price < 20);
console.log(hasAffordableProduct); 