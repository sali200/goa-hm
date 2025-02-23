// Step 1: Create three arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let nestedArray = [ [1, 2], [3, 4], [5, [6, 7]] ];

// Step 2: Concatenate arr1 and arr2 into combinedArray
let combinedArray = arr1.concat(arr2);

// Step 3: Copy the first three elements of combinedArray to the positions starting from index 5
combinedArray.copyWithin(5, 0, 3);

// Step 4: Replace elements from index 6 to the end with the number 0
combinedArray.fill(0, 6);

// Step 5: Remove the last element from combinedArray using the pop method
combinedArray.pop();

// Step 6: Remove the first element from combinedArray using the shift method
combinedArray.shift();

// Step 7: Add the elements 100 and 200 to the beginning of combinedArray using the unshift method
combinedArray.unshift(100, 200);

// Step 8: Use the splice method to remove the elements at indices 2 and 3, and replace them with the elements [x, y, z]
combinedArray.splice(2, 2, 'x', 'y', 'z');

// Step 9: Use the slice method to create a new array slicedArray that contains the last five elements of combinedArray
let slicedArray = combinedArray.slice(-5);

// Step 10: Use the join method to create a string from slicedArray, with elements separated by a comma
let joinedString = slicedArray.join(',');

// Step 11: Use the flat method to flatten nestedArray into a single-level array and store it in flatArray
let flatArray = nestedArray.flat(2);

// Step 12: Check if the element 8 is included in flatArray using the includes method
let includesEight = flatArray.includes(8);

// Step 13: Find the index of the element 9 in flatArray using the indexOf method
let indexOfNine = flatArray.indexOf(9);

// Step 14: Find the last index of the element 7 in flatArray using the lastIndexOf method
let lastIndexOfSeven = flatArray.lastIndexOf(7);

console.log('Combined Array:', combinedArray);
console.log('Sliced Array:', slicedArray);
console.log('Joined String:', joinedString);
console.log('Flat Array:', flatArray);
console.log('Includes 8:', includesEight);
console.log('Index of 9:', indexOfNine);
console.log('Last Index of 7:', lastIndexOfSeven);







