const convertToCelsius = function(fahrenheit) {
  //let celsius = 0;
  celsius = ((fahrenheit -32) / (9/5));
  if (celsius % 1 === 0){
    celsius = celsius.toFixed();
  }
  else{
    celsius = celsius.toFixed(1);
  }
  return Number(celsius);
};

const convertToFahrenheit = function(celsius) {
  //let fahrenheit = 0;
  fahrenheit = ((celsius * (9/5)) + 32);
  if (fahrenheit % 1 === 0){
    fahrenheit = fahrenheit.toFixed();
  }
  else{
    fahrenheit = fahrenheit.toFixed(1);
  }
  return Number(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
