/*
INSTRUCTIONS

    Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

INPUT

    const input = [1, 3, 5, 7, 9]

OUTPUT

    16 24
*/

function miniMax(arr) {
    const sortedInput = arr.sort((a, b) => a - b);
    const sortedMinFour = sortedInput.slice(0, 4).reduce((a, b) => a + b, 0);
    const sortedMaxFour = sortedInput.slice(-4).reduce((a, b) => a + b, 0);
    const output = sortedMinFour + " " + sortedMaxFour;

    return output;
}

const input = [1, 3, 5, 7, 9];

console.log(miniMax(input));
