'use strict'

/*
INSTRUCTIONS

    Given an array of integers, where all elements but one occur twice, find the unique element.

    Complete the 'lonelyinteger' function below.

NOTES

    INPUT DATA

        Input is an array of integers

        EXAMPLE INPUT DATA
            [1, 2, 3, 4, 3, 2, 1]

    RETURN DATA

        A single integer

        EXAMPLE RETURN DATA
            4
*/

const lonelyinteger = (input) => {
  const numberCountHashMap = {}

  for (const number of input) {
    !numberCountHashMap[number] ? numberCountHashMap[number] = 1 : numberCountHashMap[number]++
  }

  const output = parseInt(Object.keys(numberCountHashMap).filter(key => numberCountHashMap[key] === 1))

  return console.log(output)
}

const input = [1, 2, 3, 4, 3, 2, 1]

lonelyinteger(input)