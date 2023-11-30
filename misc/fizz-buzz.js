/*
INSTRUCTIONS

    Print out the numbers from 1 - 20.
    For numbers divisible by 3, print out “Fizz”.
    For numbers divisible by 5, print out “Buzz”.
    For numbers divisible by both 3 and 5, print out “FizzBuzz” in the console.
    Otherwise, just print out the number.

INPUT

    const input = 100

OUTPUT

    1
    2
    'Fizz'
    4
    'Buzz'
    'Fizz'
    7
    8
    'Fizz'
    'Buzz'
    11
    'Fizz'
    13
    14
    'FizzBuzz'
*/

function fizzBuzz(n) {
    for (let i = 1; i < n + 1; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

const input = 20;

console.log(fizzBuzz(input));
