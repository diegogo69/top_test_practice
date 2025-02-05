// analyzeArray function takes an array of numbers 
// returns an object with the following properties: average, min, max, and length.
const analyzeArray = function(arr) {
  if (!Array.isArray(arr)) throw 'Invalid argument given. An array is expected';

  if (arr[0] === undefined) return [];

  let min = arr[0];
  let max = arr[0];
  let total = 0;
  
  arr.forEach(el => {
    if (typeof el !== 'number') throw 'Invalid array. Expected an array of numbers only';

    if (el < min) min = el;
    if (el > max) max = el;

    total += el;
  });
  
  let length = arr.length;
  let average = total / length;

  return { min, max, average, length }
};

export default analyzeArray;