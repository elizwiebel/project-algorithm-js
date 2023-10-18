'use strict'

/*
INSTRUCTIONS

    A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

    Complete the 'pangrams' function below.

NOTES

    INPUT DATA

        Input is a string

        EXAMPLE INPUT DATA
            'the quick brown fox jumps over the lazy dog'

    RETURN DATA

        Return a string

        EXAMPLE RETURN DATA
            'panagram'
*/

const pangrams = (input) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const inputArray = input.toLowerCase().split('')

    // Loop through alphabet array checking if each char is present in input array
    for (const char of alphabet) {
        if (!inputArray.includes(char)) {
            return 'not pangram'
        }
    }

    return 'pangram'
}

const input = 'the quick brown fox jumps over the lazy dog'

console.log(pangrams(input))