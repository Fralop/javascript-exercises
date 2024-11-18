const palindromes = function (str) {
    let arr =str.split('');
    let newArr = [];
    arr.forEach((item, index) => {
        if (/[a-zA-Z0-9]/.test(item)) {
            newArr.push(item.toLowerCase());
        }
    });
    let reversedArr = newArr.slice().reverse();
    let final = newArr.every((item, index) => item == reversedArr[index]);
    return final;
};

let result = palindromes("ZZZZ car, a man, a maracaz.");
console

// Do not edit below this line
module.exports = palindromes;

