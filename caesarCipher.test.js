import caesarCipher from "./caesarCipher";

test('Shift of 3 for a given lower case letter of the english alphabet', () => {
  expect(caesarCipher('a', 3)).toBe('d');
  expect(caesarCipher('b', 3)).toBe('e');
  expect(caesarCipher('z', 3)).toBe('c');
});

test('Shift of 3 for a given UPPER case letter of the english alphabet', () => {
  expect(caesarCipher('A', 3)).toBe('D');
  expect(caesarCipher('B', 3)).toBe('E');
  expect(caesarCipher('Z', 3)).toBe('C');
});

test('Shift of 3 for a given lower case word', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
  expect(caesarCipher('world', 3)).toBe('zruog');
});

test('Shift of 3 for a given UPPER case word', () => {
  expect(caesarCipher('HELLO', 3)).toBe('KHOOR');
  expect(caesarCipher('WORLD', 3)).toBe('ZRUOG');
});