function filterAndSum(threshold, ...numbers) {
    const filteredNumbers = numbers.filter(number => number > threshold);
    return filteredNumbers.reduce((sum, num) => sum + num, 0);
}




const product = {
    id: 101,
    name: "Laptop",
    price: 1200,
    brand: "TechCorp",
    color: "Silver",
    weight: "2kg"
};

const { id, name, ...details } = product;


console.log("ID:", id);
console.log("Name:", name);
console.log("Details:", details);



function combineArrays(initialString, ...arrays) {
    const combinedArray = [initialString];
        arrays.forEach(array => {
        combinedArray.push(...array);
    });
    return combinedArray;
}



