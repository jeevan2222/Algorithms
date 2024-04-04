var targetIndices = function (nums, target) {
  let istrue;
  do {
    istrue = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i + 1] < nums[i]) {
        temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        istrue = true;
      }
    }
  } while (istrue);

  return binarySearch(nums, target);
};

function binarySearch(arr, x) {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  let res = [];
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) {
      res.push(mid);
    }

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) r = mid - 1;
    // Else the element can only be present
    // in right subarray
    else l = mid + 1;
  }

  // We reach here when element is not
  // present in array
  return -1;
}

nums = [4, 7, 3, 1, 3, 9];
target = 3;
console.log(targetIndices(nums, target));
