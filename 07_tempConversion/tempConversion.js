const convertToCelsius = function(tempF) {
  let convertedTempC = (tempF - 32) * 5 / 9;
  let roundedTempC = Math.round(convertedTempC*10)/10;
  return roundedTempC;
};

const convertToFahrenheit = function(tempC) {
  let convertedTempF = (tempC * 9 / 5)+ 32;
  let roundedTempF = Math.round(convertedTempF*10)/10;
  return roundedTempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
