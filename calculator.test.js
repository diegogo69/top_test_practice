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

test('Calculator methods expect valid numeric values', () => {
  expect(() => {
    calculator.add('cat', 'dog')
  }).toThrow('Invalid non numeric arguments');
});