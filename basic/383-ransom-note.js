'use strict'

/*
INSTRUCTIONS

    Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

    Each letter in magazine can only be used once in ransomNote.

NOTES

    Example 1:

        Input: ransomNote = "a", magazine = "b"
        Output: false

    Example 2:

        Input: ransomNote = "aa", magazine = "ab"
        Output: false

    Example 3:

        Input: ransomNote = "aa", magazine = "aab"
        Output: true
*/

const canConstruct = (ransomNote, magazine) => {
    if (magazine.length < ransomNote.length) return false

    const hashMap = {}

    for (const char of magazine) {
        if (hashMap[char]) {
            hashMap[char]++
        } else {
            hashMap[char] = 1
        }
    }

    console.log(hashMap)

    for (const char of ransomNote) {
        if (hashMap[char] === undefined || hashMap[char] === 0) {
            return false
        }

        hashMap[char]--
    }

    console.log(hashMap)

    return true
}

const ransomNote = 'aa'
const magazine = 'aab'

console.log(canConstruct(ransomNote, magazine))