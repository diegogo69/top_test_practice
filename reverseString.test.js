import reverseString from "./reverseString";

test('Returns reverse string', () => {
  expect(reverseString('hola')).toBe('aloh');
  expect(reverseString('hasta luego')).toBe('ogeul atsah');
});

test('Returns null if no arguments given', () => {
  expect(reverseString()).toBeNull();
});

test('Return null for non String arguments', () => {
  expect(reverseString(123)).toBeNull();
  expect(reverseString(true)).toBeNull();
  expect(reverseString([])).toBeNull();
  expect(reverseString({})).toBeNull();
});

test('Return empty string for empty string argumentjs', () => {
  expect(reverseString('')).toBe('');
})