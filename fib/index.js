// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/* Solution 4: Recursive with generic memorize function */
/* exponential runtime: O(2^n)  */
function memorize(fn){
  let cache = {};
  return function(...args){
    if(cache[args]) return cache[args];
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}
function recursiveFib(n) {
  if(n < 2) return n;
  else return fib(n-2) + fib(n-1);
}
const fib = memorize(recursiveFib);

/* Solution 3: Recursive with memorizing results */
/* exponential runtime: O(2^n)  */
// let cache = [0, 1];
// function fib(n) {
//   if(n < 2) return n;
//   if (cache[n-2] === undefined) cache[n-2] = fib(n-2);
//   if (cache[n-1] === undefined) cache[n-1] = fib(n-1);
//   return cache[n-2] + cache[n-1];
// }

/* Solution 2: Recursive */
/* exponential runtime: O(2^n)  */
// function fib(n) {
//   if(n < 2) return n;
//   else return fib(n-2) + fib(n-1);
// }

/* Solution 1: For-Loop */
/* Liner Runtime: O(n)  */
// function fib(n) {
//   if(n < 2) return n;
//   let prepre = 0;
//   let pre = 1;
//   let current = 1;
//   for (let i = 2; i<=n; i++){
//     current = prepre + pre;
//     prepre = pre;
//     pre = current;
//   }
//   return current;
// }

module.exports = fib;
