const sumAll = function(firstInt, secondInt) {
    if (Number.isInteger(firstInt) && firstInt > 0 && Number.isInteger(secondInt) && secondInt > 0){
        let dif = secondInt - firstInt;
        let sum = 0;
        switch (true) {
            case (dif>0):
                for (let i = firstInt; i<= secondInt; i++ ){
                    sum += i; 
                }
                break;
            case (dif<0):
                for (let i = secondInt; i<= secondInt; i-- ){
                    sum += i; 
                }
                break;
            }
    return sum;
    } else {
        return "ERROR";
    } 
};
sumAll(5, 10);
// Do not edit below this line
module.exports = sumAll;
