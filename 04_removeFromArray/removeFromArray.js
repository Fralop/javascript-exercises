const removeFromArray = function() {
    const args = [...arguments];
    removeFromArray = args[0];
    const finalArray = [];
    for (let i = 1; i < (args.length - 1); i++) {
       for (let j = 0; j < removeFromArray.length; j++) {
        if (args[i] === removeFromArray[j]) {
            delete removeFromArray[j]; 
        }
        }
    }
    for (let h = 1; h < removeFromArray.length; h++ ) {
        if (removeFromArray[h] !== undefined) {
            finalArray.unshift(removeFromArray[h]);
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
