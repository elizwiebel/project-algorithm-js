/*
    125. Valid Palindrome
    https://leetcode.com/problems/valid-palindrome/
    Easy
    15 mins
    String
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const santizedStr = s.replace(/[\W_]/g, "").toLowerCase();
    const reversedSanitizedStr = santizedStr.split("").reverse().join("");

    return santizedStr === reversedSanitizedStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
