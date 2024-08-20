const removeFromArray = function() {
    const args = [...arguments];
    const FromArray = args[0];
    const tempArray = FromArray;
    const finalArray = [];
    for (let i = 1; i < args.length; i++) {
       for (let j = 0; j < tempArray.length; j++) {
        if (args[i] === tempArray[j]) {
            delete tempArray[j]; 
        }
        }
    }
   for (let h = 0; h < tempArray.length; h++ ) {
        if (tempArray[h] !== undefined) {
            finalArray.unshift(tempArray[h]);
        }
   }
console.log(args);
console.log(FromArray);
console.log(tempArray);
console.log(finalArray);
return finalArray;
};
// Do not edit below this line
module.exports = removeFromArray;
