const palindromes = function (word) {
    var punctuation = /[\.,?!]/g;
    word = word.replace(punctuation, "");
    word = word.replace(/\s+/g, "");
    word = word.toLowerCase();
    
    let reversedWord ="";
    for (i = 0; i < word.length; i++){
        reversedWord = reversedWord + word[word.length - 1 - i];
    }
    //console.log(reversedWord);
    if(word === reversedWord){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
