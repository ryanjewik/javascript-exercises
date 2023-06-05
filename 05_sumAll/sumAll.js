const sumAll = function(numOne, numTwo) {
    if (numTwo < numOne){ //swaps if numOne is greater
        let tempNum = numTwo;
        numTwo = numOne;
        numOne = tempNum;
    }
    let sumOutput = 0;
    if (numOne > 0 && numTwo > 0 && typeof numOne === "number" && typeof numTwo ==="number"){
        for (i = numOne; i <= numTwo; i++){
            sumOutput = sumOutput + i;
        }
        return sumOutput;
    }
    else{
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;
