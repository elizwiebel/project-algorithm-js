'use strict'

/*
INSTRUCTIONS

    Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

    Complete the 'timeConversion' function below.

NOTES

    INPUT DATA

        Input is a string

        EXAMPLE INPUT DATA
            '7:00:00PM'

    RETURN DATA

        Output is a string

        EXAMPLE RETURN DATA
            '19:00:00'
*/

const timeConversion = (input) => {
    const timePeriod = input.includes('AM') ? 'AM' : 'PM'
    const time = input.slice(0, 8)
    const timeArray = time.split(':')
    let hour = Number(timeArray[0])

    if (timePeriod === 'AM') {
        hour = hour === 12 ? '0' + (hour - 12) : hour === 10 || hour === 11 ? hour : '0' + hour
    }

    if (timePeriod === 'PM') {
        hour = hour === 12 ? hour : hour + 12
    }

    timeArray[0] = hour
    const output = timeArray.join(':')

    return console.log(output)
}

const input = '05:00:00PM'

timeConversion(input)