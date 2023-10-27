'use strict'

/*
INSTRUCTIONS

    Given a string s, find the length of the longest substring without repeating characters.

NOTES

    INPUT
        const input = 'ABCDDE'

    OUTPUT
        3
*/

const lengthOfLongestSubstring = (s) => {
    let windowCharsMap = {}
    let windowStart = 0
    let maxWindowLength = 0

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i]
        const currentCharLastIndex = windowCharsMap[currentChar]

        if (currentCharLastIndex >= windowStart) {
            // Move windowStart to next char
            windowStart = currentCharLastIndex + 1
        }

        // Update chars map with current character and its current index
        windowCharsMap[currentChar] = i

        // Current window is the current index subracted from the window start index + 1
        const currentWindowLength = i - windowStart + 1

        if (currentWindowLength > maxWindowLength) {
            maxWindowLength = currentWindowLength
        }

    }

    return maxWindowLength
}

const input = 'anviaj'

console.log(lengthOfLongestSubstring(input))