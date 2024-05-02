var runningSum = function (nums) {
  let re = [];
  for (let i = 0; i < nums.length; i++) {
    let c = 0;
    for (let j = 0; j < i + 1; j++) {
      c += nums[j];
    }
    re.push(c);
  }
  return re;
};
let nums = [1, 2, 3, 4];
console.log(runningSum(nums));
