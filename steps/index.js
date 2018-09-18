// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n, max = n) {
//   if(n===0) return;
//   let output = '';
//   for(let i=1; i<=max; i++){
//     if(i<=max-n+1) output += '#';
//     else output += ' ';
//   }
//   console.log(output);
//   steps(n-1, max);
// }

function steps(n, row = 1) {
  if(n < row) return;
  let output = '';
  for(let i=1; i<=n; i++){
    if(i<=row) output += '#';
    else output += ' ';
  }
  console.log(output);
  steps(n, row+1);
}

module.exports = steps;
