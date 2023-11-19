'use strict'

/*
INSTRUCTIONS

    You are climbing a staircase. It takes n steps to reach the top.

    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

NOTES

    INPUT
        const input = 3

    OUTPUT
        3

    EXPLANATION
        There are three ways to climb to the top.
        1. 1 step + 1 step + 1 step
        2. 1 step + 2 steps
        3. 2 steps + 1 step

        There are two ways to get to the next step. Take 1 step from the previous step, or skip a step and climb from 2 steps below.
        f(n) = f(n - 1) + f(n - 2)
*/

const climbStairs = (n) => {
    const numOfWays = [1, 2]

    for (let i = 2; i < n; i++) {
        numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2]

        console.log('numOfWays:', numOfWays)
    }

    return numOfWays[n - 1]
}

const input = 5

console.log(climbStairs(input))