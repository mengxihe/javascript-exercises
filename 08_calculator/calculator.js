const add = function(a, b) {
  return (a+b);
};

const subtract = function(a, b) {
	return (a-b);
};

const sum = function(numbers) {
	return (numbers.reduce((a, b) => a+b, 0));
};

const multiply = function(array) {
  return (array.reduce((a, b) => a*b));
};

const power = function(a, b) {
	return (Math.pow(a, b));
};

const factorial = function(x) {
	return (x>1) ? x * factorial(x-1) : 1;
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
