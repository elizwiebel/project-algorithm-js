/*
    242. Valid Anagram
    https://leetcode.com/problems/valid-anagram/
    Easy
    15 mins
    String
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    if (s === t) return true;

    return false;
};

console.log(isAnagram("anagram", "nagaram"));
