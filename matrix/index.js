// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// /* 3. Recursive Solution */
// function matrix(
//   n,
//   i       = 1,
//   row     = 0,
//   row_dir = 0,
//   col     = 0,
//   col_dir = 1,
//   m       = JSON.parse(JSON.stringify((new Array(n)).fill((new Array(n)).fill(0))))
// ){
//   if(i > n*n || m[row][col] !== 0) return m;
//   else m[row][col] = i;
//
//   if(
//     m[row+row_dir] === undefined ||
//     m[row+row_dir][col+col_dir] === undefined ||
//     m[row+row_dir][col+col_dir] !== 0
//   ){
//     let row_dir_prev = row_dir;
//     row_dir = col_dir;
//     col_dir = Math.abs(row_dir) > 0 ? 0 : row_dir_prev*(-1);
//   }
//   return matrix(n, i+1, row+row_dir, row_dir, col+col_dir, col_dir, m);
// }

/* 2. Non-Recursive Solution */
function matrix(n) {
  let m = JSON.parse(JSON.stringify((new Array(n)).fill((new Array(n)).fill(0))));
  let col = 0;
  let row = 0;
  let row_dir = 0;
  let col_dir = 1;
  for(let i=1; i<=n*n; i++){
    if(m[row][col] !== 0) return m;
    else m[row][col] = i;

    if(
      m[row+row_dir] === undefined ||
      m[row+row_dir][col+col_dir] === undefined ||
      m[row+row_dir][col+col_dir] > 0
    ){
      row_dir_prev = row_dir;
      row_dir = col_dir;
      col_dir = Math.abs(row_dir) > 0 ? 0 : row_dir_prev*(-1);
    }
    row += row_dir;
    col += col_dir;
  }
  return m;
}

// /* 1. Using multi-level if statement Solution */
// function matrix(n) {
//   let m = JSON.parse(JSON.stringify((new Array(n)).fill((new Array(n)).fill(0))));
//   debugger;
//   let x = 0;
//   let y = 0;
//   let direction = 0;  // 0: right, 1: down, 2: left, 3: up
//   for(let i=1; i<=n*n; i++){
//     m[x][y] = i;
//     if (direction === 0){
//       if ( y+1<n && m[x][y+1] === 0 ) y++;
//       else {
//         x++;
//         direction++;
//       }
//     } else if (direction === 1){
//       if ( x+1<n && m[x+1][y] === 0) x++;
//       else {
//         y--;
//         direction++;
//       }
//     } else if (direction === 2){
//       if ( y-1>=0 && m[x][y-1] === 0 ) y--;
//       else {
//         x--;
//         direction++;
//       }
//     } else if (direction === 3 ){
//       if ( x-1 >= 0 && m[x-1][y] === 0 ) x--;
//       else {
//         y++;
//         direction = 0;
//       }
//     }
//   }
//   return m;
// }

matrix(3);

module.exports = matrix;
