'use strict'

/*
INSTRUCTIONS

    You are given an array prices where prices[i] is the price of a given stock on the ith day.

    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

NOTES

    INPUT
        const prices = [7, 1, 5, 3, 6, 4]

    OUTPUT
        5
*/

const bestTimeToBuy = (prices) => {
    let minFirstPrice = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        const currentDayPrice = prices[i]
        console.log('currentDayPrice', currentDayPrice)

        const currentDayProfit = currentDayPrice - minFirstPrice
        console.log('currentDayProfit', currentDayProfit)

        if (currentDayProfit > maxProfit) {
            maxProfit = currentDayProfit
        }

        if (currentDayPrice < minFirstPrice) {
            minFirstPrice = currentDayPrice
        }

        console.log('minFirstPrice', minFirstPrice)
        console.log('maxProfit', maxProfit)
    }

    return console.log(maxProfit)
}

const prices = [7, 1, 5, 3, 6, 4]

bestTimeToBuy(prices)