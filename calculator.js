import isNumeric from "./isNumeric";

const isString = (val) => typeof val === 'string';
const isNumber = (val) => typeof val === 'number';

const calculator = {
  add(a, b) {
    if (!isNumeric(a) || !isNumeric(b)) throw "Invalid non numeric arguments";

    return a + b;
  },
  subtract(a, b) {
    if (!isNumeric(a) || !isNumeric(b)) throw "Invalid non numeric arguments";

    return a - b;
  },

  divide() {},
  multiply(a, b) {
    if (!isNumeric(a) || !isNumeric(b)) throw "Invalid non numeric arguments";

    return a * b;
  },
};

export default calculator;
