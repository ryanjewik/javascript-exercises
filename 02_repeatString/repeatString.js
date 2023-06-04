const repeatString = function(stringInput, numRepeats) {
    let stringOutput = stringInput;
    for (i = 0; i < numRepeats -1; i++){
        stringOutput = stringOutput + stringInput;
    }
    return stringOutput;
};

// Do not edit below this line
module.exports = repeatString;
