const grades = [90, 55, 83, 68, 100, 93, 77, 59];
console.log(`There are ${grades.length} grades in the class`)
console.log("Grades:");

function between(grade, min, max) {
    return grade >= min && grade <= max
}

let sumOfGrades = 0;

for (let i = 0; i < grades.length; i++) {
    const grade = grades[i]
    sumOfGrades += grade;

    if (grades[i] >= 90) {
        console.log(`${grades[i]}: A`)
    } else if (between(grades[i], 80, 89)) {
        console.log(`${grades[i]}: B`)
    } else if (between(grades[i], 70, 79)) {
        console.log(`${grades[i]}: C`)
    } else if (between(grades[i], 60, 69)) {
        console.log(`${grades[i]}: D`)
    } else {
        console.log(`${grades[i]}: F`)
    }
}

const averageOfSum = sumOfGrades / grades.length;

if (averageOfSum >= 90) {
    console.log("Overall Class performance: Excellent");
} else if (between(averageOfSum, 80, 89)) {
    console.log("Overall Class performance: Good");
} else if (between(averageOfSum, 70, 79)) {
    console.log("Overall Class performance: Satisfactory");
} else {
    console.log(" Overall Class performance: Needs Improvement");
}
