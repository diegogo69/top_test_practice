const lettersArr = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];

const lettersObj = {
    a: { isUpper: false, index: 0 },
    b: { isUpper: false, index: 1 },
    c: { isUpper: false, index: 2 },
    d: { isUpper: false, index: 3 },
    e: { isUpper: false, index: 4 },
    f: { isUpper: false, index: 5 },
    g: { isUpper: false, index: 6 },
    h: { isUpper: false, index: 7 },
    i: { isUpper: false, index: 8 },
    j: { isUpper: false, index: 9 },
    k: { isUpper: false, index: 10 },
    l: { isUpper: false, index: 11 },
    m: { isUpper: false, index: 12 },
    n: { isUpper: false, index: 13 },
    o: { isUpper: false, index: 14 },
    p: { isUpper: false, index: 15 },
    q: { isUpper: false, index: 16 },
    r: { isUpper: false, index: 17 },
    s: { isUpper: false, index: 18 },
    t: { isUpper: false, index: 19 },
    u: { isUpper: false, index: 20 },
    v: { isUpper: false, index: 21 },
    w: { isUpper: false, index: 22 },
    x: { isUpper: false, index: 23 },
    y: { isUpper: false, index: 24 },
    z: { isUpper: false, index: 25 },

    A: { isUpper: true, index: 0 },
    B: { isUpper: true, index: 1 },
    C: { isUpper: true, index: 2 },
    D: { isUpper: true, index: 3 },
    E: { isUpper: true, index: 4 },
    F: { isUpper: true, index: 5 },
    G: { isUpper: true, index: 6 },
    H: { isUpper: true, index: 7 },
    I: { isUpper: true, index: 8 },
    J: { isUpper: true, index: 9 },
    K: { isUpper: true, index: 10 },
    L: { isUpper: true, index: 11 },
    M: { isUpper: true, index: 12 },
    N: { isUpper: true, index: 13 },
    O: { isUpper: true, index: 14 },
    P: { isUpper: true, index: 15 },
    Q: { isUpper: true, index: 16 },
    R: { isUpper: true, index: 17 },
    S: { isUpper: true, index: 18 },
    T: { isUpper: true, index: 19 },
    U: { isUpper: true, index: 20 },
    V: { isUpper: true, index: 21 },
    W: { isUpper: true, index: 22 },
    X: { isUpper: true, index: 23 },
    Y: { isUpper: true, index: 24 },
    Z: { isUpper: true, index: 25 },
  }

const shiftLetter = function(letter, shift = 3) {
  const shiftedLetter = (lettersObj[letter].index + shift) % 26;

  if (lettersObj[letter].isUpper) return lettersArr[shiftedLetter].toUpperCase();

  return lettersArr[shiftedLetter];
}

const caesarCipher = function(str, shift) {
  return str.split('')
    .map((letter) => shiftLetter(letter, shift))
    .join('');
}

export default caesarCipher;