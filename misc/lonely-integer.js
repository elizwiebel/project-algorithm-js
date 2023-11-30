/*
INSTRUCTIONS

    Given an array of integers, where all elements but one occur twice, find the unique element.

INPUT

    const input = [1, 2, 3, 4, 3, 2, 1]

OUTPUT

    4
*/

function lonelyinteger(arr) {
    const numberCountHashMap = {};

    for (const number of arr) {
        !numberCountHashMap[number] ? (numberCountHashMap[number] = 1) : numberCountHashMap[number]++;
    }

    const output = parseInt(Object.keys(numberCountHashMap).filter((key) => numberCountHashMap[key] === 1));

    return output;
}

const input = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyinteger(input));
