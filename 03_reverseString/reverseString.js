const reverseString = function(string) {
    let stringArray = string.split("");
    let newArray = [];
    for (let i = (stringArray.lenght - 1) ; i >= 0 ; i--) {
        newArray.unshift (stringArray[i]); 
    } 
    return newArray;
};

// Do not edit below this line
module.exports = reverseString;
