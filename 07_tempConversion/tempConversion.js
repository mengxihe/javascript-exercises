const ftoc = function(temp) {
    celsius = ((temp-32))*(5/9);
    let rounded = Math.round(celsius * 10)/10;
    return rounded;
};

const ctof = function(temp) {
    fahrenheit = (temp*(9/5))+32;
    let rounded = Math.round(fahrenheit * 10) / 10;
    return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
