const removeFromArray = function() {
    /*
    if (typeof removedItems === "string"){
        return removedItems;
    }
    */
   if (arguments.length > 2){
        for (i = 1; i <= arguments.length -1; i++){

            let removeIndex = arguments[0].indexOf(arguments[i])
            if (removeIndex != -1){
                if(typeof arguments[0][removeIndex] === typeof arguments[i]){
                    arguments[0].splice(removeIndex, 1);
                }
            }
            //console.log(i + " test" + '\n');
        }
        
    }
    else{
        let removeIndex = arguments[0].indexOf(arguments[1])
        if (removeIndex != -1){
            if(typeof arguments[0][removeIndex] === typeof arguments[1]){
                arguments[0].splice(removeIndex, 1);
            }
        }
    }
    //console.log(arguments[0]);
    return arguments[0];
    
    //return arguments.length;

};

// Do not edit below this line
module.exports = removeFromArray;
