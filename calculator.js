import isNumeric from './isNumeric';

const calculator = {
  add(a, b) {
    if (!isNumeric(a) || !isNumeric(b)) throw 'Invalid non numeric arguments';

    return a + b;
  },
  subtract(a, b) {
    if (!isNumeric(a) || !isNumeric(b)) throw 'Invalid non numeric arguments';

    return a - b;
  },

  divide(a, b) {
    if (!isNumeric(a) || !isNumeric(b)) throw 'Invalid non numeric arguments';
    if (b === 0) throw 'Invalid division by 0';

    return Number((a / b).toFixed(2));
  },
  
  multiply(a, b) {
    if (!isNumeric(a) || !isNumeric(b)) throw 'Invalid non numeric arguments';

    return a * b;
  },
};

export default calculator;
