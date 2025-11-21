const convertToCelsius = function(fahrenheit) {
  return parseFloat(((fahrenheit - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  return parseFloat(((celsius * 1.8) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
