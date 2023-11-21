function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor((arr.length - 1) / 2);
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i <= mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

const nums = [23, 22, 55, 33, 55];
console.log(mergeSort(nums));
