const caesar = (s, shift = 1) => {
  let ciphertext = '';
  const sLower = s.toLowerCase();
  const reLower = /[a-z]/;
  const reUpper = /[A-Z]/;
  if (typeof s !== 'string') return '';

  const ifLowerCase = (s) => String.fromCharCode(((s.charCodeAt(0) - 97 + shift) % 26) + 97);

  for (let i = 0; i < s.length; i += 1) {
    if (reLower.test(s.charAt(i))) {
      ciphertext += ifLowerCase(sLower.charAt(i));
    } else if (reUpper.test(s.charAt(i))) {
      ciphertext += ifLowerCase(sLower.charAt(i)).toUpperCase();
    } else ciphertext += s.charAt(i);
  }
  return ciphertext;
};
module.exports = caesar;
