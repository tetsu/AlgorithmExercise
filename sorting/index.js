// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const array = [123, -3, 8, -400, 2, 2000, -200121, 1, 0];

function bubbleSort(arr) {
  for(let i=1; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
      if( arr[i-1] > arr[j] ){
        let temp = arr[j];
        arr[j] = arr[i-1];
        arr[i-1] = temp;
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

  const left = arr.slice(0, Math.ceil(arr.length / 2));
  const right = arr.slice(Math.ceil(arr.length / 2));
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = [];
  while(left.length > 0 || right.length > 0){
    if(left[0] < right[0] || right[0] === undefined){
      result.push(left[0]);
      left.shift();
    } else if(left[0] > right[0] || left[0] === undefined) {
      result.push(right[0]);
      right.shift();
    } else if(left[0] === right[0]){
      result.push(left[0]);
      left.shift();
      result.push(right[0]);
      right.shift();
    }
  }
  return result;
}

console.time('c');
console.log(mergeSort(array));
console.timeEnd('c');

module.exports = { bubbleSort, selectionSort, mergeSort };
