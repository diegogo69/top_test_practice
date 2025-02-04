import capitalize from './capitalize.js';

test('First letter is upper case', () =>  {
  expect(capitalize('hola')).toBe('Hola');
  expect(capitalize('hasta luego')).toBe('Hasta luego');
});

test('Returns null if no arguments given', () => {
  expect(capitalize()).toBeNull();
});

test('Return null for non String arguments', () => {
  expect(capitalize(123)).toBeNull();
  expect(capitalize(true)).toBeNull();
  expect(capitalize([])).toBeNull();
  expect(capitalize({})).toBeNull();
});

test('Return empty string for empty string argumentjs', () => {
  expect(capitalize('')).toBe('');
})