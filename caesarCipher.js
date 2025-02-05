import shiftLetter from "./caesarCipherHelpers";

const caesarCipher = function(str, shift) {
  if (typeof str !== 'string') throw 'Invalid argument (a string is expected)';
  
  return str.split('')
    .map((letter) => shiftLetter(letter, shift = 3))
    .join('');
}

export default caesarCipher;