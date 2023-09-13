'use strict'

/*
INSTRUCTIONS

    Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.

    Complete the 'plusMinus' function below.

NOTES

    INPUT DATA

        Input is an array of integers

        EXAMPLE INPUT DATA
            [1, 1, 0, -1, -1]

    RETURN DATA

        Return a calculation of the ratios of positive, negative, and zero integers in the input array.
        Return format should have 3 separate calculations that are separated by a newline and rounded to six decimal places.
        Order of the return ratios is important. Positive ratio first, then negative, then zero.
        Return must be console logged.

        EXAMPLE RETURN DATA
            0.400000
            0.400000
            0.200000

    FORMULAS

        RATIO CALC
            count of integer type / total number of integers in array

        ROUNDING METHOD (to 6 decimal places)
            num.toFixed(6)

        NEWLINE CHAR
            '\n'
*/

const plusMinus = (input) => {
    const newLineChar = '\n'
    const totalCount = input.length
    const positiveRatio = input.filter(integer => integer > 0).length / totalCount
    const negativeRatio = input.filter(integer => integer < 0).length / totalCount
    const zeroRatio = input.filter(integer => integer === 0).length / totalCount

    const output = positiveRatio + newLineChar + negativeRatio + newLineChar + zeroRatio

    return console.log(output)
}

const input = [1, 1, 0, -1, -1]

plusMinus(input)