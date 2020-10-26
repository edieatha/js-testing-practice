const reverseString = (s) => {
  if (typeof s !== 'string') return '';
  return s.split('').reverse().join('');
};
module.exports = reverseString;