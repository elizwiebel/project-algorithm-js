'use strict'

/*
INSTRUCTIONS

    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.

NOTES

    INPUT

        Input is a string

        EXAMPLE INPUT DATA
            s = "A man, a plan, a canal: Panama"

    OUTPUT

        Output is a boolean

        EXAMPLE RETURN DATA
            true
*/

const isPalindrome = (s) => {
    // Remove all non-word chars and set chars lower case
    s = s.replace(/[\W_]/g, '').toLowerCase()
    console.log('s', s)

    // Left pointer begins the start of the string array
    let left = 0;
    // Right pointer begins at the end of string array (subtract 1 from length property because arrays are 0 indexed)
    let right = s.length - 1;

    // Loop through the string as an array until the pointers meet in the middle
    while (left < right) {
        // Check if the left pointer character is the same as the right pointer character
        if (s[left] !== s[right]) {
            // If character is not the same then it is not a palidrome so return false
            return console.log(false);
        }

        // If the chracter is the same then move the left pointer forward and the right pointer backward
        left++;
        right--;
    }

    // If we reach this line then the while loop is finished successfully so return true
    return console.log(true);
}

const input = 'A man, a_plan, a canal: Panama'

isPalindrome(input)