
const students = [
    { name: 'irakli', grade: 37 },
    { name: 'maria', grade: 100 },
    { name: 'maxo', grade: 93 },
    { name: 'ramzo', grade: 56 }
];

const allPassing = students.every(student => student.grade >= 70);

const hasFailing = students.some(student => student.grade < 65);


students.forEach(student => {
    console.log(`Student: ${student.name}`);
});


const honorRoll = [];
students.forEach(student => {
    if (student.grade >= 90) {
        honorRoll.push(student.name);
    }
});


console.log('All Passing:', allPassing);
console.log('Has Failing:', hasFailing);
console.log('Honor Roll:', honorRoll);


