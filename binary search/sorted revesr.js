var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] + 1 >= target) {
      //   right = mid - 1;
      left = mid;
    } else {
      //   left = mid + 1;
      right = mid;
    }
  }

  return -1;
};
nums = [4, 5, 6, 7, 0, 1, 2];
target = 0;
console.log(search(nums, target));
