let numsArray = [1, 2, 3, 4, 5];
let strArray = ['a', 'b', 'c', 'd', 'e'];

let combinedArray = numsArray.concat(strArray);

combinedArray.copyWithin(4, 0, 3);


combinedArray.fill("filled", 2, 4);

combinedArray.pop();

combinedArray.shift();


combinedArray.unshift(100, 200);


function modifyArray(inputArray) {
    let numsArray = [1, 2, 3, 4, 5];
    let strArray = ['a', 'b', 'c', 'd', 'e'];
    
    // Step 1: Concatenate numsArray and strArray
    let combinedArray = numsArray.concat(strArray);
    
    // Step 2: Copy the first three elements of combinedArray to the positions starting from index 4
    combinedArray.copyWithin(4, 0, 3);
    
    // Step 3: Replace the elements from index 2 to index 4 with the string "filled"
    combinedArray.fill("filled", 2, 4);
    
    // Step 4: Remove the last element
    combinedArray.pop();
    
    // Step 5: Remove the first element
    combinedArray.shift();
    
    // Step 6: Add the elements 100 and 200 to the beginning of combinedArray
    combinedArray.unshift(100, 200);
    
    return combinedArray;
}

// Example usage
let inputArray = [/* any array here */];
console.log(modifyArray(inputArray));







let people = [{name: 'Alice'}, {name: 'Bob'}];
let places = [{city: 'London'}, {city: 'Paris'}];




let mergedArray = people.concat(places);



mergedArray.copyWithin(2, 0, 2);



mergedArray.fill({city: 'New York'}, -2);



mergedArray.pop();


mergedArray.shift();


mergedArray.unshift({name: 'Charlie'}, {name: 'David'});


function modifyArrayOfObjects() {
    let people = [{name: 'Alice'}, {name: 'Bob'}];
    let places = [{city: 'London'}, {city: 'Paris'}];
    
    // Step 1: Concatenate people and places into mergedArray
    let mergedArray = people.concat(places);
    
    // Step 2: Copy the first two elements of mergedArray to the positions starting from index 2
    mergedArray.copyWithin(2, 0, 2);
    
    // Step 3: Replace the last two elements with the object {city: 'New York'}
    mergedArray.fill({city: 'New York'}, -2);
    
    // Step 4: Remove the last element
    mergedArray.pop();
    
    // Step 5: Remove the first element
    mergedArray.shift();
    
    // Step 6: Add the objects {name: 'Charlie'} and {name: 'David'} to the beginning of mergedArray
    mergedArray.unshift({name: 'Charlie'}, {name: 'David'});
    
    return mergedArray;
}

// Example usage
console.log(modifyArrayOfObjects());






let mixedArray = [1, 'two', 3, 'four', 5];


let extendedArray = mixedArray.concat([true, false]);



extendedArray.copyWithin(0, 2, 4);


extendedArray.fill(0, 4, 7);


extendedArray.pop();


extendedArray.shift();



extendedArray.unshift(null, undefined);




function modifyMixedArray() {
    let mixedArray = [1, 'two', 3, 'four', 5];
    
    // Step 1: Concatenate mixedArray with [true, false]
    let extendedArray = mixedArray.concat([true, false]);
    
    // Step 2: Copy the elements 3 and 'four' to the start of extendedArray
    extendedArray.copyWithin(0, 2, 4);
    
    // Step 3: Replace the elements 5, true, and false with the number 0
    extendedArray.fill(0, 4, 7);
    
    // Step 4: Remove the last element
    extendedArray.pop();
    
    // Step 5: Remove the first element
    extendedArray.shift();
    
    // Step 6: Add the elements null and undefined to the beginning of extendedArray
    extendedArray.unshift(null, undefined);
    
    return extendedArray;
}

// Example usage
console.log(modifyMixedArray());







