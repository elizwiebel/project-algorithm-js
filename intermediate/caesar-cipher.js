'use strict'

/*
INSTRUCTIONS

    Each letter of a given text is replaced by a letter some fixed number of positions down the alphabet.

NOTES

    INPUT
        const str = 'zyxabc'
        const num = 4

    OUTPUT
        'dcbefg'
*/

const caesarCipher = (str, num) => {
    const lowerCaseStr = str.toLowerCase()
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let newString = ''
    num = num % 26

    for (let i = 0; i < lowerCaseStr.length; i++) {
        const currentChar = lowerCaseStr[i]
        const currentCharIndex = alphabet.indexOf(currentChar)
        let newCharIndex = currentCharIndex + num

        if (currentCharIndex === -1) {
            newString += currentChar

            console.log(i, currentChar, currentCharIndex, num, newCharIndex, alphabet[newCharIndex])
            continue
        }

        if (newCharIndex > 25) {
            newCharIndex = newCharIndex - 26
        }

        if (str[i] === lowerCaseStr[i].toUpperCase()) {
            newString += alphabet[newCharIndex].toUpperCase()
        } else {
            newString += alphabet[newCharIndex]
        }

        console.log(i, currentChar, currentCharIndex, num, newCharIndex, alphabet[newCharIndex])
    }

    return newString
}

const str = 'Zoo Keeper'
const num = 2

console.log(caesarCipher(str, num))