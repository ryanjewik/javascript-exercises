const reverseString = function(inputString) {
    let reversedString = "";
    for (i = 0; i < inputString.length; i++){
        reversedString += inputString.charAt(inputString.length - i - 1);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
