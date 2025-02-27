function setAlarm(employed, vacation) {
    return employed && !vacation;
}

// Examples:
console.log(setAlarm(true, true));  // false
console.log(setAlarm(true, false)); // true
console.log(setAlarm(false, true)); // false
console.log(setAlarm(false, false)); // false






function updateLight(current) {
    switch (current.toLowerCase()) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        case 'red':
            return 'green';
        default:
            throw new Error('Invalid input');
    }
}

// Example usage:
console.log(updateLight('green'));  // yellow
console.log(updateLight('yellow')); // red
console.log(updateLight('red'));    // green




