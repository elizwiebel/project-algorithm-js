'use strict'

/*
INSTRUCTIONS

    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

NOTES

    INPUT
        const s = 'anagram'
        const t = 'nagaram'

    OUTPUT
        boolean
*/

const template = (s, t) => {
    if (s.length !== t.length) return false

    const sArray = s.split('').sort().join('')
    const tArray = t.split('').sort().join('')

    console.log('sArray', sArray)
    console.log('tArray', tArray)

    return sArray === tArray
}

const s = 'anagram'
const t = 'nagaram'

console.log(template(s, t))