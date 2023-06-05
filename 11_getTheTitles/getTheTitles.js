const getTheTitles = function(catalogArr) {
    var newArr = [];
    for (i = 0; i < catalogArr.length; i++){
        newArr[i] = catalogArr[i]['title'];
    }
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
