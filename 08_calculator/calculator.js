const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, number) => total += number, 0);
};

const multiply = function(array) {
  return array.reduce((total, number) => total *= number);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(start) {
	if (start == 0) { return 1; }
  if (start == 1) { return 1; }
  let sum = 1;
  for (let i = start; i > 0; i--) {
    sum *= i;
  }
  return sum;
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
