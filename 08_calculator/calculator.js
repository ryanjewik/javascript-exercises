const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function() {
  let sumValue = 0;
	if (arguments[0].length > 0){
    for (i = 0; i < arguments[0].length; i++){
      sumValue = sumValue + arguments[0][i];
    }
  }
  return sumValue;
};

const multiply = function() {
  let multValue = arguments[0][0];
	if (arguments[0].length > 0){
    for (i = 1; i < arguments[0].length; i++){
      multValue = multValue * arguments[0][i];
    }
  }
  return multValue;
};

const power = function(numOne, numTwo) {
	return Math.pow(numOne, numTwo);
};

const factorial = function(factNum) {
  outputNum = 1;
	if (factNum != 0){
    for (i = 1; i <= factNum; i++){
      outputNum  = outputNum * i;
    }
  }
  return outputNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
