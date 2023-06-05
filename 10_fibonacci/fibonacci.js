const fibonacci = function(fiboNum) {
    fiboNum = Number(fiboNum);
    if (fiboNum < 0){
        return "OOPS";
    }else if(fiboNum <=2){
        return 1;
    }
    
    firstNum = 1;
    secondNum = 1;
    for (i = 3; i < fiboNum; i++){
        if (i % 2=== 0){
            firstNum = firstNum + secondNum;
        }else if (i % 2=== 1){
            secondNum = firstNum + secondNum;
        }
        outputNum = firstNum + secondNum;
    }
    return outputNum;
};

// Do not edit below this line
module.exports = fibonacci;
