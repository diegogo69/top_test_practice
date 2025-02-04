import reverseString from "./reverseString";

test('Returns reverse string', () => {
  expect(reverseString('hola')).toBe('aloh');
  expect(reverseString('hasta luego')).toBe('ogeul atsah');
});
