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
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Shift of 3 for a given UPPER case word', () => {
  expect(caesarCipher('HELLO', 3)).toBe('KHOOR');
  expect(caesarCipher('WORLD', 3)).toBe('ZRUOG');
});

test('Shift of 3 for a given miXEd case word', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Shift of 3 for a given phrase', () => {
  expect(caesarCipher('marcus brutus', 3)).toBe('pdufxv euxwxv');
});

test('Non alphabetical character remain unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Reject non-string argument to be shifted', () => {
  expect(() => {
    caesarCipher(123, 3)
  }).toThrow('Invalid argument (a string is expected)');

  expect(() => {
    caesarCipher([], 3)
  }).toThrow('Invalid argument (a string is expected)');

  expect(() => {
    caesarCipher(null, 3)
  }).toThrow('Invalid argument (a string is expected)');
})