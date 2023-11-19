function recursiveBinary(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, left, right) {
  if (left > right) {
    // target not found
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return search(array, target, left, mid - 1);
  } else if (array[mid] < target) {
    return search(array, target, mid + 1, right);
  }
}

const array = [-2, 6, 8, 21, 44, 62, 200];
const target = 62;
console.log(recursiveBinary(array, target));
/// Time complexity for this algaritham Big  O(logn)-->reducing half array in every iteration
