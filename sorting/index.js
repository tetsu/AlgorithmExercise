// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const array = [123, -3, 8, -400, 2, 2000, -200121, 1, 0];

function bubbleSort(arr) {
  for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length; j++){
      if( arr[i] > arr[j] ){
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
console.time('a');
console.log(bubbleSort(array));
console.timeEnd('a');

function selectionSort(arr) {
  for(let i=0; i<arr.length; i++){
    let min = arr[i];
    let min_index = i;
    for(let j=i+1; j<arr.length; j++){
      if(min > arr[j]){
        min = arr[j];
        min_index = j;
      }
    }
    arr[min_index] = arr[i];
    arr[i] = min;
  }
  return arr;
}
console.time('b');
console.log(selectionSort(array));
console.timeEnd('b');

function mergeSort(arr) {
  if(arr.length < 2) return arr;
  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = [];
  while(left.length > 0 || right.length > 0){
    if(left[0] < right[0] || right.length === 0){
      result.push(left.shift());
    } else if(left[0] > right[0] || left.length === 0) {
      result.push(right.shift());
    } else if(left[0] === right[0]){
      result.push(left.shift());
      result.push(right.shift());
    }
  }
  return result;
}

console.time('c');
console.log(mergeSort(array));
console.timeEnd('c');

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
