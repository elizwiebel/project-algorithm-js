'use strict'

/*
INSTRUCTIONS

    Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

    Complete the 'miniMaxSum' function below.

NOTES

    INPUT DATA

        Input is an array of integers

        EXAMPLE INPUT DATA
            [1, 3, 5, 7, 9]

    RETURN DATA

        Return two space-separated integers on one line: the minimum sum and the maximum sum of of elements.

        EXAMPLE RETURN DATA
            16 24

    LOGIC

        1. Sort array in ascending order.
        2. Create two shallow array copies using the "slice" method, one for min which uses the first 4 integers, and one for max which uses the last 4 integers
        3. Sum the min and max arrays using the "reduce" method
        4. Concatenate min and max sum with a space in between and log output
*/

const miniMax = (input) => {
    const sortedInput = input.sort((a, b) => a - b)
    const sortedMinFour = sortedInput.slice(0, 4).reduce((a, b) => a + b, 0)
    const sortedMaxFour = sortedInput.slice(-4).reduce((a, b) => a + b, 0)
    const output = sortedMinFour + ' ' + sortedMaxFour

    return console.log(output)
}

const input = [1, 3, 5, 7, 9]

miniMax(input)