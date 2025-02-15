const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, item) => prod * item, 1);
};

const power = function(a, n) {
	return a**n;
};

const factorial = function(a) {
  let result = 1;
  if (a === 0) {
    return result;
  } else {
    for (let i = 1; i <= a; i++) {
      result *= i;
    } 
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
