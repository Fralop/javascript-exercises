const reverseString = function(string) {
    const stringArray = string.split("");
    const newArray = [];
    for (let i = (stringArray.length - 1) ; i >= 0 ; i--) {
        newArray.push (stringArray[i]); 
    } 
    let newString = newArray.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
