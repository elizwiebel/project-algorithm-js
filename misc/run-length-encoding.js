/*
INSTRUCTIONS

    Given a string, Your task is to complete the function encode that returns the run length encoded string for the given string. eg if the input string is “wwwwaaadexxxxxx”, then the function should return “w4a3d1e1x6″. You are required to complete the function encode that takes only one argument the string which is to be encoded and returns the encoded string.

INPUT

    const input = 'aaaabbbccc'

OUTPUT

    'a4b3c3'
*/

function encodeString(str) {
    let result = "";
    let count = 0;
    let currentChar = str[0];

    for (let i = 0; i < str.length + 1; i++) {
        console.log(i);
        console.log("    char:", str[i]);

        if (currentChar !== str[i]) {
            result += currentChar + count;

            currentChar = str[i];
            count = 1;
        } else {
            count++;
        }

        console.log("    count:", count);
        console.log("    currentChar:", currentChar);
        console.log("    result:", result);
    }
}

const input = "aaaabbbccc";

console.log(encodeString(input));
