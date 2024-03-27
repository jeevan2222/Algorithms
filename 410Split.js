function largestSum(nums, m) {
  for (let i = 0; i < nums.length; i = i + m) {
    subArray = nums.slice(i, m);

    console.log(subArray);
  }
}
let nums = [7, 2, 5, 10, 8];
let k = 2;
largestSum(nums, k);
