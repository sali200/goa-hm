function checkCase(char1, char2) {
    if (!char1.match(/[a-zA-Z]/) || !char2.match(/[a-zA-Z]/)) {
        return -1;
    }

    // Check if both characters are the same case
    if (
        (char1 === char1.toLowerCase() && char2 === char2.toLowerCase()) ||
        (char1 === char1.toUpperCase() && char2 === char2.toUpperCase())
    ) {
        return 1;
    }


    return 0;
}

// Examples
console.log(checkCase('a', 'b')); 
console.log(checkCase('A', 'b')); 
console.log(checkCase('a', '1')); 




function countPositivesSumNegatives(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }

    let positiveCount = 0;
    let negativeSum = 0;

    for (let num of arr) {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeSum += num;
        }
    }

    return [positiveCount, negativeSum];
}

