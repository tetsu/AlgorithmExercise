// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = sortString(cleanString(stringA));
  stringB = sortString(cleanString(stringB));
  return stringA === stringB;
}

function cleanString(str){
  return str.replace(/[^\w\s!?]/g, '').toLowerCase();
}

function sortString(str){
  return str.split('').sort().join('');
}

module.exports = anagrams;
