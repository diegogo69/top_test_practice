// analyzeArray function takes an array of numbers 
// returns an object with the following properties: average, min, max, and length.
const getAverage = function(arr) {
  return (
    arr.reduce((prev, cur) => prev += cur, 0) / arr.length
  )
};

const getMinMax = function(arr) {
  let min = arr[0];
  let max = arr[0];

  arr.forEach(el => {
    if (el < min) min = el;
    if (el > max) max = el;
  });

  return { min, max };
}

const analyzeArray = function(arr) {
  const { min, max } = getMinMax(arr);

  return {
    min,
    max,
    average: getAverage(arr),
    length: arr.length,
  }
};

export default analyzeArray;