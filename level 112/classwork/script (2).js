function checkSameCase(char1, char2) {
    // Check if both characters are letters
    if (!(/[a-zA-Z]/.test(char1)) || !(/[a-zA-Z]/.test(char2))) {
        return -1;
    }
    // Check if both are uppercase or both are lowercase
    if ((char1 === char1.toUpperCase() && char2 === char2.toUpperCase()) ||
        (char1 === char1.toLowerCase() && char2 === char2.toLowerCase())) {
        return 1;
    }
    // If they are letters but not the same case
    return 0;
}

// Examples:
console.log(checkSameCase('a', 'b')); // Output: 1
console.log(checkSameCase('A', 'B')); // Output: 1
console.log(checkSameCase('a', 'B')); // Output: 0
console.log(checkSameCase('a', '1')); // Output: -1












