
const products = [
    { name: "Book", price: 89 },
    { name: "notebook", price: 237 },
    { name: "pen", price: 82 },
    { name: "paper", price: 984 }
  ];
  
  const productNames = products.map(product => product.name);
  console.log("Product Names:", productNames);
  
  const affordableProducts = products.filter(product => product.price < 100);
  console.log("Affordable Products:", affordableProducts);
  

  const totalPrice = products.reduce((accumulator, product) => accumulator + product.price, 0);
  console.log("Total Price:", totalPrice);
  

  const productNamesReversed = products.reduceRight((accumulator, product) => accumulator + (accumulator ? " - " : "") + product.name, "");
  console.log("Product Names Reversed:", productNamesReversed);