const convertToCelsius = function(valueFahrenheit) {
  let valueCelsius = ((valueFahrenheit - 32) * (5/9));
  let rounded = Math.round(valueCelsius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(valueCelsius) {
  const valueFahrenheit = ((valueCelsius * (9/5)) + 32);
  let rounded = Math.round(valueFahrenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
