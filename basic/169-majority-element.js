'use strict'

/*
INSTRUCTIONS

    Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

NOTES

    Example 1:

    Input: nums = [3,2,3]
    Output: 3

    Example 2:

    Input: nums = [2,2,1,1,1,2,2]
    Output: 2
*/

const majorityElement = (nums) => {
    const hashMap = {}
    let maxCount = 0
    let maxValue

    for (const num of nums) {
        console.log('num', num)

        if (hashMap[num] === undefined) {
            hashMap[num] = 1
        } else {
            hashMap[num]++
        }

        if (hashMap[num] > maxCount) {
            maxCount = hashMap[num]
            maxValue = num
        }
    }

    console.log('hashMap:', hashMap)

    return maxValue
}

const input = [2, 2, 1, 1, 1, 2, 2]

console.log(majorityElement(input))