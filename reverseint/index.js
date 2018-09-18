// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return parseInt(reverseString(n.toString())) * Math.sign(n);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

module.exports = reverseInt;
