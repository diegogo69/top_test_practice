import caesarCipher from "./caesarCipher";

test('Shift of 3 for a given letter of the english alphabet', () => {
  expect(caesarCipher('a', 3)).toBe('d');
  expect(caesarCipher('b', 3)).toBe('e');
  expect(caesarCipher('z', 3)).toBe('c');
});