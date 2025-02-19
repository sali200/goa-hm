let nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];


let flatArray = nestedArray.flat(1);
console.log(flatArray);


let fullyFlatArray = nestedArray.flat(Infinity);
console.log(fullyFlatArray);


function checkElement(array, value) {
    return array.includes(value);
}


console.log(checkElement(fullyFlatArray, 49)); 
console.log(checkElement(fullyFlatArray, 4)); 


function findIndexOfElement(array, value) {
    return array.indexOf(value);
}


console.log(findIndexOfElement(fullyFlatArray, 49)); 
console.log(findIndexOfElement(fullyFlatArray, 4)); 



function findLastIndexOfElement(array, value) {
    return array.lastIndexOf(value);
}


console.log(findLastIndexOfElement(fullyFlatArray, 49));
console.log(findLastIndexOfElement(fullyFlatArray, 4)); 
