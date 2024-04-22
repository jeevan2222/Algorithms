var first = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if ((mid === 0 || nums[mid - 1] < target) && nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // If target is not found
};

var last = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (
      (mid === nums.length - 1 || nums[mid + 1] > target) &&
      nums[mid] === target
    ) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1; // If target is not found
};

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(first(nums, target)); // Output: 3
console.log(last(nums, target)); // Output: 4
