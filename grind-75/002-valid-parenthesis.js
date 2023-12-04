/*
    20. Valid Parentheses
    https://leetcode.com/problems/valid-parentheses/
    Easy
    20 mins
    Stack
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // TODO: Add guard clauses

    const bracketsMap = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        console.log("i:", i);

        if (bracketsMap[s[i]] !== undefined) {
            stack.push(s[i]);
        }

        if (bracketsMap[s[i]] === undefined) {
            const leftChar = stack.pop();

            if (s[i] !== bracketsMap[leftChar]) {
                return false;
            }
        }

        console.log("   stack:", stack);
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isValid("([]){}"));
