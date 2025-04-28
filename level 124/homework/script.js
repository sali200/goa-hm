



students.forEach(student => {
    const averageGrades = {};
    Object.keys(student.grades).forEach(subject => {
        const scores = student.grades[subject];
        const average = scores.reduce((a, b) => a + b, 0) / scores.length;
        averageGrades[subject] = average.toFixed(2);
    });
    console.log(`Student: ${student.name}, Average Grades: `, averageGrades);
});


students.forEach(student => {
    const attendanceRate = (student.attendance.filter(present => present).length / student.attendance.length) * 100;
    console.log(`Student: ${student.name}, Attendance Rate: ${attendanceRate.toFixed(2)}%`);
});


const topPerformers = subject => {
    let bestStudent = "";
    let highestAverage = 0;
    students.forEach(student => {
        const scores = student.grades[subject];
        const average = scores.reduce((a, b) => a + b, 0) / scores.length;
        if (average > highestAverage) {
            highestAverage = average;
            bestStudent = student.name;
        }
    });
    return { subject, bestStudent, highestAverage: highestAverage.toFixed(2) };
};

console.log(topPerformers("Math")); // Example for Math


const extracurricularRanking = [...students].sort((a, b) => b.extracurricular.length - a.extracurricular.length);
console.log('Extracurricular Rankings:', extracurricularRanking.map(s => ({ name: s.name, activities: s.extracurricular.length })));



