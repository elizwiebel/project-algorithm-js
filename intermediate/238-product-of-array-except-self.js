'use strict'

/*
INSTRUCTIONS

    Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

    You must write an algorithm that runs in O(n) time and without using the division operation.

NOTES

    INPUT
        const input = [1, 2, 3, 4]

    OUTPUT
        [24, 12, 8, 6]

    LOGIC

    Implement a prefix and suffix strategy. For each index or i, if the product of all elements before i and after i is known, then multiply together to get the answer.

    Input array               =  [1,  2,  3, 4]
    Product before index      =  [1,  1,  2, 6]
    Product after index       =  [24, 12, 4, 1]
    Solution                  =  [24, 12, 8, 6]
*/

const productOfArrayExceptSelf = (inputArray) => {
    const productBeforeIndexArray = []

    // Optimal solution

    // Start product at 1 because no values before first number
    let beforeProduct = 1

    // Building product before index array
    for (let i = 0; i < inputArray.length; i++) {
        const currentValue = inputArray[i]

        console.log(`i${i}:`, currentValue)
        console.log(`  Input array:`, inputArray)
        console.log(`  Current before product array:`, beforeProduct)
        console.log('  Update before index array')

        // Set previous product into array
        productBeforeIndexArray[i] = beforeProduct

        console.log(`  Product before index array:`, productBeforeIndexArray)

        // Calculate next product value for next index using the current index
        console.log(`  Calc and update before product value for next iteration: ${beforeProduct} * ${currentValue}`)
        beforeProduct *= currentValue
    }

    const outputArray = [...productBeforeIndexArray]

    // Reset product because looping in reverse direction and no values after last number
    let afterProduct = 1

    for (let j = inputArray.length - 1; j >= 0; j--) {
        console.log(`j${j}:`, inputArray[j])
        console.log(`  Input array:`, inputArray)
        console.log(`  Product before index array:`, productBeforeIndexArray)
        console.log(`  Before product value: ${outputArray[j]}`)
        console.log(`  After product value: ${afterProduct}`)
        console.log(`  Calc current index output array final value (before product x after product): ${outputArray[j]} * ${afterProduct}`)
        console.log('  Update output array')
        outputArray[j] *= afterProduct
        console.log(`  Current output array:`, outputArray)

        afterProduct *= inputArray[j]
        console.log(`  Calc and update after product for next interation (after product x current number): ${afterProduct} * ${inputArray[j]}`)
    }

    // Brute force solution
    // for (let i = 0; i < inputArray.length; i++) {
    //     console.log(`i${i}:`, inputArray[i])

    //     let currentProduct = 1

    //     for (let j = 0; j < inputArray.length; j++) {
    //         console.log(`  j${j}:`, inputArray[j])

    //         // Skip multiplication when on the current "self" value
    //         if (i === j) continue

    //         currentProduct = inputArray[j] * currentProduct
    //     }

    //     outputArray.push(currentProduct)
    // }

    return outputArray
}

const input = [1, 2, 3, 4]

console.log('Solution:', productOfArrayExceptSelf(input))