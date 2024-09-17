function unique(nums) {
  let i = 0;
  let j = 0;
  while (nums.length > j) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }
  return i;
}
console.log(unique([1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 6]));
