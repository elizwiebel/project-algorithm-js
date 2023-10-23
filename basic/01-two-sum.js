'use strict'

/*
INSTRUCTIONS

    Given an array of integers, return an array of indices of the two numbers
    that add up to the target.

    You may assume that each input would have exactly one solution, and
    you may not use the same element twice.

NOTES

    INPUT DATA

        Input is an array of integers and a single integer

    EXAMPLE INPUT DATA
        const inputArray = [2, 7, 11, 15]
        const inputTarget = 9

    RETURN DATA

        Return an array of two integers which all up to the target integer

    EXAMPLE RETURN DATA
        return [0, 1]

*/

const twoSum = (array, target) => {
    // Hash map of the index of previously iterated numbers
    const visitedNumbers = {}

    // Loop through input array
    for (let i = 0; i < array.length; i++) {
        // Calculate the target complement number
        const complementNumber = target - inputArray[i]

        // Look to see if number has already been iterated over and added to the visited numbers
        if (visitedNumbers[complementNumber] !== undefined) {
            // If number is found in hash map then return the index of that number and the current number
            console.log([visitedNumbers[complementNumber], i])
            return
        }

        // Add current number to visited numbers hash map
        visitedNumbers[inputArray[i]] = i
    }
}

const inputArray = [2, 7, 11, 15]
const inputTarget = 9

twoSum(inputArray, inputTarget)