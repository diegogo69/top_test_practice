import analyzeArray from "./analyzeArray";
// analyzeArray function takes an array of numbers 
// returns an object with the following properties: average, min, max, and length.

test('Return object with appropiate properties', () => {
  expect(analyzeArray([1,2,3])).toHaveProperty('average');
  expect(analyzeArray([1,2,3])).toHaveProperty('min');
  expect(analyzeArray([1,2,3])).toHaveProperty('max');
  expect(analyzeArray([1,2,3])).toHaveProperty('length');
});

test('Return correct property values', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('average', 4);
  expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('length', 6);
  expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('min', 1);
  expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('max', 8);
});

test('Reject non-array arguments', () => {
  expect(() => {
    analyzeArray(123)
  }).toThrow('Invalid argument given. An array is expected');

  expect(() => {
    analyzeArray('123')
  }).toThrow('Invalid argument given. An array is expected');
})

test('Handle empty arrays', () => {
  expect(analyzeArray([])).toEqual([]);
});

test('Handle non numeric arrays', () => {
  expect(() => {
    analyzeArray(['1'])
  }).toThrow('Invalid array. Expected an array of numbers only');

  expect(() => {
    analyzeArray([1, 2, '3'])
  }).toThrow('Invalid array. Expected an array of numbers only');

  expect(() => {
    analyzeArray([[1], [2], [3]])
  }).toThrow('Invalid array. Expected an array of numbers only');

  expect(() => {
    analyzeArray([null, 2, 3])
  }).toThrow('Invalid array. Expected an array of numbers only');

  expect(() => {
    analyzeArray([1, false, 3])
  }).toThrow('Invalid array. Expected an array of numbers only');
})
