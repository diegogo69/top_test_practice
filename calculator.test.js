import calculator from "./calculator";

test('Object contains basic math operation methods', () => {
  expect(calculator).toHaveProperty('add');
  expect(calculator).toHaveProperty('subtract');
  expect(calculator).toHaveProperty('divide');
  expect(calculator).toHaveProperty('multiply');
});

test('Calculator add 2 values correctly', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(2, 3)).toBe(5);
});

test('Calculator subtracts 2 values correctly', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test('Calculator multiply 2 values correctly', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('Calculator divide 2 values correctly', () => {
  expect(calculator.divide(2, 2)).toBeCloseTo(1);
  expect(calculator.divide(2, 3)).toBeCloseTo(0.66, 1);
});

test('Calculator methods expect valid numeric values', () => {
  expect(() => {
    calculator.add('cat', 'dog')
  }).toThrow('Invalid non numeric arguments');

  expect(() => {
    calculator.subtract('cat', 'dog')
  }).toThrow('Invalid non numeric arguments');

  expect(() => {
    calculator.multiply('cat', 'dog')
  }).toThrow('Invalid non numeric arguments');
});