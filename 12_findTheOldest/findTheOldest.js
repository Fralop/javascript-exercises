const findTheOldest = function(arr) {
    arr.forEach(element => {
        if (element.yearOfDeath === undefined) {
            const today = new Date();
            const year = today.getFullYear();
            element.yearOfDeath = year; 
        }
    });
    arr.sort((a,b) => {
        return (b.yearOfDeath - b.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth); 
    })
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
