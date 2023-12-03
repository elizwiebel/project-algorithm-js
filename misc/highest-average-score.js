/*
INSTRUCTIONS

    Given a 2-D String array of student-marks find the student with the highest average and output his average score. If the average is in decimals, floor it down to the nearest integer.

INPUT

    const input = [{ "Bob": "87" }, { "Mike": "35" }, { "Bob": "52" }, { "Jason": "35" }, { "Mike": "55" }, { "Jessica": "99" }]

OUTPUT

    99
*/

function highestAverage(arr) {
    const studentHashTable = {};
    let highestAverage = 0;
    let bestStudent = "";

    for (let i = 0; i < arr.length; i++) {
        const [name, score] = Object.entries(arr[i])[0];
        const scoreNum = parseInt(score);
        console.log("i:", i);
        console.log("   name:", name);
        console.log("   score:", scoreNum);

        if (studentHashTable[name]) {
            studentHashTable[name].scores.push(scoreNum);
        } else {
            studentHashTable[name] = { scores: [scoreNum] };
        }

        const sum = studentHashTable[name].scores.reduce((currentSum, currentScore) => {
            return currentSum + currentScore;
        }, 0);

        const average = sum / studentHashTable[name].scores.length;

        studentHashTable[name].average = average;

        if (average > highestAverage) {
            highestAverage = average;
            bestStudent = name;
        }

        console.log("   average:", average);
    }

    console.log("studentHashTable:", studentHashTable);
    console.log("highestAverage:", highestAverage);
    console.log("bestStudent:", bestStudent);

    return { [bestStudent]: highestAverage };
}

const input = [{ Bob: "87" }, { Mike: "35" }, { Bob: "52" }, { Jason: "35" }, { Mike: "55" }, { Jessica: "99" }];

console.log(highestAverage(input));
