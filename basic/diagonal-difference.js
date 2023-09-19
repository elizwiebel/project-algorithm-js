'use strict'

/*
INSTRUCTIONS

    Given a square matrix, calculate the absolute difference between the sums of its diagonals.

    Complete the 'diagonalDifference' function below.

NOTES

    DATA

        EXAMPLE INPUT DATA
            const array = [
                [11, 2, 4],
                [4, 5, 6],
                [10, 8, -12]
            ]

        EXAMPLE RETURN DATA
            15

    FORMULAS

        PRIMARY DIAGONAL SUM
            input[0][0] + input[1][1] + input[2][2]

        SECONDARY DIAGONAL SUM
            input[2][0] + input[1][1] + input[0][2]

        ABSOLUTE DIFFERENCE METHOD
            Math.abs(a - b)
*/

const diagonalDifference = (input) => {
    const inputLength = input.length

    let primaryDiagonalSum = 0
    let secondaryDiagonalSum = 0

    let primaryDiagonalRow = 0
    let primaryDiagonalCol = 0

    let secondaryDiagonalRow = inputLength - 1
    let secondaryDiagonalCol = 0

    for (let i = 0; i < inputLength; i++) {
        primaryDiagonalSum = primaryDiagonalSum + input[primaryDiagonalRow][primaryDiagonalCol]
        secondaryDiagonalSum = secondaryDiagonalSum + input[secondaryDiagonalRow][secondaryDiagonalCol]

        primaryDiagonalRow++
        primaryDiagonalCol++

        secondaryDiagonalRow--
        secondaryDiagonalCol++
    }

    const output = Math.abs(primaryDiagonalSum - secondaryDiagonalSum)

    return console.log(output)
}

const input = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

diagonalDifference(input)