function twoPointer(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] == target) {
      return [left, right];
    } else if (nums[left] + nums[right] > target) {
      right--;
    } else {
      left++;
    }
  }
}

nums = [1, 2, 4, 6, 8, 9, 14, 15];
target = 13;
console.log(twoPointer(nums, target));
