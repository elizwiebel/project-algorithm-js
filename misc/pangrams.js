/*
INSTRUCTIONS

    A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

INPUT

    const input = 'the quick brown fox jumps over the lazy dog'

OUTPUT

    'pangram'
*/

function pangrams(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = str.toLowerCase().split("");

    for (const char of alphabet) {
        if (!inputArray.includes(char)) {
            return "not pangram";
        }
    }

    return "pangram";
}

const input = "the quick brown fox jumps over the lazy dog";

console.log(pangrams(input));
