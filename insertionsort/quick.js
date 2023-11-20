function quick(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  console.log("left", left, "right", right);

  return [...quick(left), pivot, ...quick(right)];
}

const a = [55, 87, 94, 12];
console.log(quick(a));
