const fibonacci = function(input) {
    let n = Number(input);
    if (n>=0) {
    let fiboArr = [0, 1];
    for (let i=2; i<=n; i++) {
        fiboArr[i] = fiboArr[i-1] + fiboArr[i-2];
        }
    return fiboArr[n];
    } else return "OOPS";
};

let result = fibonacci (6);

// Do not edit below this line
module.exports = fibonacci;
