// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   for(let row=1; row<=n; row++){
//     let output = '';
//     while(output.length < row*2-1) output += '#';
//     while(output.length < n*2-1) output = ' ' + output + ' ';
//     console.log(output);
//   }
// }

function pyramid(n, row=1) {
  if(n < row) return;
  let output = '';
  while(output.length < row*2-1) output += '#';
  while(output.length < n*2-1) output = ' ' + output + ' ';
  console.log(output);
  pyramid(n, row+1);
}

module.exports = pyramid;
