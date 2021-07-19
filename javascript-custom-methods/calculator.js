/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  }
};

calculator.sumAll = numbers => {
  return numbers.reduce((acc, num) => { return acc + num; });
};

calculator.getAverage = numbers => {
  return numbers.reduce((acc, num) => { return acc + num; }) / numbers.length;
};
