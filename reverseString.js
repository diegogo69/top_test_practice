const reverseString = function(str) {
  if (typeof str !== 'string') return null

  if (!str) return '';
  
  return str.split('').reverse().join('');
}

export default reverseString;