/*
INSTRUCTIONS

    Given a number N return the Fibonacci sequence up to that length.

INPUT

    const input = 7

OUTPUT

    1, 1, 2, 3, 5, 8, 13
*/

function fibonacci(n) {
    const sequence = [1, 1];

    for (i = 2; i < n; i++) {
        console.log("i:", i);
        sequence.push(sequence[i - 2] + sequence[i - 1]);
    }

    return sequence;
}

const input = 7;

console.log(fibonacci(input));
