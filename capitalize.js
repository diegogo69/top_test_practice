capitalize = function(str) {
  if (typeof str !== 'string') return null

  if (!str) return '';

  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export default capitalize;