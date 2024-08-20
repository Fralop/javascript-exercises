const removeFromArray = function() {
    const args = [...arguments];
    const FromArray = args[0];
    const finalArray = [];
    for (let i = 1; i < args.length - 1; i++) {
       for (let j = 0; j < FromArray.length; j++) {
        if (args[i] === FromArray[j]) {
            delete FromArray[j]; 
        }
        }
    }
    for (let h = 1; h < FromArray.length; h++ ) {
        if (FromArray[h] !== undefined) {
            finalArray.unshift(FromArray[h]);
        }
    }
return finalArray;
};
// Do not edit below this line
module.exports = removeFromArray;
