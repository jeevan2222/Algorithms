var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid; // Fix: Update right to mid
    }
  }

  // After the while loop, 'left' or 'right' will point to the peak index.
  return left; // or return right; both will give the peak index
};
console.log(peakIndexInMountainArray([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5]));
