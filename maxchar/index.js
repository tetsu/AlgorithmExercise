// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var charMap = {};
  var max = '';
  for (let char of str){
    charMap[char] = charMap[char] + 1 || 1;
    if( max === '' || charMap[char] > charMap[max]) max = char;
  }
  return max;
}

module.exports = maxChar;
