class Exams {
    static average(score1, score2, score3) {
        return Math.round((score1 + score2 + score3) / 3);
    }
}

let score1 = 74;
let score2 = 80;
let score3 = 68;


console.log(Exams.average(score1, score2, score3)); 