var leftRightDifference = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue;
      count += nums[j];
    }
    res.push(count);
  }
  return res;
};

let nums = [10, 4, 8, 3];

console.log(leftRightDifference(nums));
