'use strict'

/*
INSTRUCTIONS

    There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

    Complete the 'matchingStrings' function below.

NOTES

    CONSTRAINTS

        The query must match the entire string. Partial strings do not count.

    INPUT DATA

        Input two arrays of strings

        EXAMPLE INPUT DATA
            const strings = ['ab', 'ab', 'abc']
            const queries = ['ab', 'abc', 'bc']

    RETURN DATA

        Return an array of integers where each number is the count of how many times the corresponding query element (by index) appears in the strings array.

        EXAMPLE RETURN DATA
            [ 2, 1, 0 ]

    LOGIC

        VERSION 1
            1. Initialize result count array
            2. Loop through each query string
            3. Inside the the loop, initialize a count of the current query string at 0
            4. Loop through each each test string and compare the current query string
            5. If the query string matches the test string then iterate the current success count by one
            6. After each query string loops through the test strings then add that count to the end of result count array
            7. After query strings finishes looping then return the result count array

        VERSION 2
            1. Create a results array using the map method
            2. Map each query string to an array of successful tests between test string and query string using the filter method
            3. Convert each successful return array to a count by using the length method on each filter result
            4. Return newly mapped array
*/

const matchingStrings = (tests, queries) => {
    // VERSION 1
    // const resultsArray = []

    // for (const queryString of queries) {
    //     let count = 0

    //     for (const testString of tests) {
    //         if (queryString === testString) {
    //             count++
    //         }
    //     }

    //     resultsArray.push(count)
    // }

    // const output = resultsArray

    // VERSION 2
    const output = queries.map(queryString => tests.filter(testString => testString === queryString).length)

    return console.log(output)
}

const strings = ['ab', 'ab', 'abc']
const queries = ['ab', 'abc', 'bc']

matchingStrings(strings, queries)