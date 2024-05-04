var getSumAbsoluteDifferences = function (nums) {
  let array = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      count = Math.abs(nums[i] - nums[j]);
    }
    array[i] = count;
  }
  return array;
};
nums = [2, 3, 5];
console.log(getSumAbsoluteDifferences(nums));
