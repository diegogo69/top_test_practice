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
