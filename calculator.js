import isNumeric from "./isNumeric";

const isString = (val) => typeof val === 'string';
const isNumber = (val) => typeof val === 'number';

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract() {},
  divide() {},
  multiply() {},
};

export default calculator;
