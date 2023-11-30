/*
INSTRUCTIONS

    Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

INPUT

    const input = '7:00:00PM'

OUTPUT

    '19:00:00'
*/

function timeConversion(dateTime) {
    const timePeriod = dateTime.includes("AM") ? "AM" : "PM";
    const time = dateTime.slice(0, 8);
    const timeArray = time.split(":");
    let hour = Number(timeArray[0]);

    if (timePeriod === "AM") {
        hour = hour === 12 ? "0" + (hour - 12) : hour === 10 || hour === 11 ? hour : "0" + hour;
    }

    if (timePeriod === "PM") {
        hour = hour === 12 ? hour : hour + 12;
    }

    timeArray[0] = hour;
    const output = timeArray.join(":");

    return output;
}

const input = "05:00:00PM";

console.log(timeConversion(input));
