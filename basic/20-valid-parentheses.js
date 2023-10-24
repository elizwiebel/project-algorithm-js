'use strict'

/*
INSTRUCTIONS

    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:
        1. Open brackets must be closed by the same type of brackets.
        2. Open brackets must be closed in the correct order.
        3. Every close bracket has a corresponding open bracket of the same type.

NOTES

    INPUT DATA

        Input is a string

    EXAMPLE INPUT DATA
        const s = "()[]{}"

    RETURN DATA

        Return true or false

    EXAMPLE RETURN DATA
        return true

    LOGIC

        1. Create valid bracket character lookup map

        2. Create empty array for stack

        3. Loop over the input string

        4. Check if the character is a left bracket using the lookup map and if it is then push to the stack

        5. If the character is a right bracket then pop off the last char from the stack and compare if they are pairs using the lookup map

        6. If the chars don't match then return false

        7. If loop finishes then the stack will be empty and return true

*/

const isValid = (input) => {
    const pairsMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const stack = []

    for (let i = 0; i < input.length; i++) {
        const rightBracket = pairsMap[input[i]]
        console.log('rightBracket', rightBracket)

        // If the right bracket doesn't exist then it must be a left bracket, then add to stack
        if (rightBracket !== undefined) {
            stack.push(input[i])
        } else {
            // Remove the last left bracket from the stack
            const lastLeftBracket = stack.pop()

            // Compare the current right bracket's pair with the last left bracket on top of the stack using the lookup map
            if (input[i] !== pairsMap[lastLeftBracket]) return false
        }

        console.log('stack', stack)
    }

    if (stack.length === 0) {
        return console.log(true)
    }
    return console.log(false)
}

const input = '([{}])'

isValid(input)