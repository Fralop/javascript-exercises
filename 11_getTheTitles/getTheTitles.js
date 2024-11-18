const getTheTitles = function(arr) {
    let titlesArr = [];
    arr.forEach((element, index) => {
        titlesArr.push(arr[index].title);    
    });
    return titlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
