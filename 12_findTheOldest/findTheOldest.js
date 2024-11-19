const findTheOldest = function(arr) {
    arr.forEach(element => {
        if (element.yearOfDeath === undefined) {
            const year = new Date().getFullYear();
            element.yearOfDeath = year; 
        }
    });
    arr.sort((a,b) => {
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth); 
    })
    let result = arr[0];
    return result;
};


// Do not edit below this line
module.exports = findTheOldest;
