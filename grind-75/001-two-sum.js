/*
    1. Two Sum
    https://leetcode.com/problems/two-sum/
    Easy
    15 mins
    Array
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        console.log("i", i);
        const targetDifference = target - nums[i];

        console.log("   num:", nums[i]);
        console.log("   targetDifference:", targetDifference);

        if (hashTable[targetDifference] !== undefined) {
            return [hashTable[targetDifference], i];
        }

        hashTable[nums[i]] = i;
    }

    console.log("hashTable:", hashTable);
};

console.log(twoSum([3, 2, 4], 6));
