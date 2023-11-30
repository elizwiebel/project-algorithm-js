/*
INSTRUCTIONS

    Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.

INPUT

    const input = [1, 1, 0, -1, -1]

OUTPUT

    0.400000
    0.400000
    0.200000
*/

function plusMinus(arr) {
    const newLineChar = "\n";
    const totalCount = arr.length;
    const positiveRatio = arr.filter((integer) => integer > 0).length / totalCount;
    const negativeRatio = arr.filter((integer) => integer < 0).length / totalCount;
    const zeroRatio = arr.filter((integer) => integer === 0).length / totalCount;

    const output = positiveRatio + newLineChar + negativeRatio + newLineChar + zeroRatio;

    return output;
}

const input = [1, 1, 0, -1, -1];

console.log(plusMinus(input));
