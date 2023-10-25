'use strict'

/*
INSTRUCTIONS

    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

NOTES

    INPUT
        const input = [1, 2, 3, 1]

    OUTPUT
        boolean
*/

const containsDuplicate = (numbers) => {
    const visitedNumbers = {}

    for (const number of numbers) {
        if (visitedNumbers[number] !== undefined) return true

        visitedNumbers[number] = 1
    }

    return false
}

const input = [1, 2, 3, 1]

console.log(containsDuplicate(input))