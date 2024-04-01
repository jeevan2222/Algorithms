function largestSum(nums, m) {
  let largeSum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count = count + nums[i];
    if (i >= m - 1) {
      largeSum = Math.max(largeSum, count);
      count = count - nums[i - (m - 1)];
    }
  }
  return largeSum;
}
let nums = [1, 4, 4];
let k = 3;

console.log(largestSum(nums, k));
