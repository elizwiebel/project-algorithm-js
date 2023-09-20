'use strict'

/*
INSTRUCTIONS

    Create a counting sort function from scratch.

    Complete the 'countingSort' function below.

NOTES

    INPUT DATA

        Input is an array of integers

        EXAMPLE INPUT DATA
            [1, 1, 3, 2, 1]

    OUTPUT DATA

        Output is an ascending sorted array of integers

        EXAMPLE OUTPUT DATA
            [1, 1, 1, 2, 3]
*/

const countingSort = (inputArray) => {
    console.log("inputArray", inputArray)

    // Get max value in input array
    // VERSION 1
    // let maxValue = 0

    // for (const element of inputArray) {
    //     // If current element is greater than max value then update max value otherwise return the current max value
    //     maxValue = element > maxValue ? element : maxValue
    // }

    // VERSION 2
    const maxValue = Math.max(...inputArray)
    console.log("maxValue", maxValue)

    // Initialize count array with 0s using the max value for the length and adding one for 0
    // TODO: Create exception for arrays that contain 0 as max value
    const countArray = new Array(maxValue + 1).fill(0)
    console.log("initial countArray", countArray)

    for (const element of inputArray) {
        // Increment current element count in count array
        countArray[element]++
    }

    console.log("completed countArray", countArray)

    // Skip first index of 0, then loop through countArray
    for (let i = 1; i < countArray.length; i++) {
        // Set current element to the sum of the previous element and the current element
        countArray[i] = countArray[i - 1] + countArray[i]
    }

    console.log("added countArray", countArray)

    const outputArray = new Array(inputArray.length).fill(0)
    console.log('initial outputArray', outputArray)

    for (let i = 0; i < inputArray.length; i++) {
        // The added count array needs to be shifted to the right and start at 0

        // Original added count array
        // 0 1 2 3
        // 1 4 4 6
        // Array values shifted to the right
        // 0 1 2 3
        // 0 1 4 4
        const sortedIndexPosition = countArray[inputArray[i] - 1] ?? 0

        // Insert inputArray value into the correct sorted position in the output array
        outputArray[sortedIndexPosition] = inputArray[i]

        // Increment index position in count array so it moves to the next available index
        countArray[inputArray[i] - 1]++
    }

    console.log('sorted outputArray', outputArray)

    return outputArray
}

const input = [1, 0, 3, 1, 3, 1]

countingSort(input)