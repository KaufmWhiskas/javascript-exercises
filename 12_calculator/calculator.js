const add = function(n1, n2) {
	return n1 + n2
};

const subtract = function(n1, n2) {
	return (n1 - n2)
};

const sum = function(arr) {
  return arr.reduce((sum, number) => {
    return sum + number
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((result, number) => {
    return result * number
  });
};

const power = function(base, exponent) {
	return (base ** exponent)
};

const factorial = function(number) {
  let result = 1;
	for(let i = 1; i <= number; i++){
    result = result * i
  };
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
