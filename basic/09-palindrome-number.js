'use strict'

/*
INSTRUCTIONS

    Given an integer x, return true if x is a palindrome, and false otherwise.

NOTES

    INPUT DATA

        Input is an integer

    EXAMPLE INPUT DATA
        const input = -121

    RETURN DATA

        Return true or false

    EXAMPLE RETURN DATA
        return truw

*/

const isPalindrome = (input) => {
    console.log('input', input)
    if (input < 0) return console.log('false')

    const reversedInput = input.toString().split('').reverse().join('')
    console.log('reversedInput', reversedInput)

    if (input == reversedInput) return true

    return false
}

const input = 121

isPalindrome(input)