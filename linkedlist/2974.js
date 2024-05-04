var numberGame = function (nums) {
  let left = nums.sort((a, b) => a - b);
  //   let right = n;
  let res = [];
  let len = nums.length / 2;
  while ( len < ) {
    res.push(nums[left], nums[right]);
    left++;
    right++;
  }

  return res;
};
nums = [5, 4, 2, 3];
console.log(numberGame(nums));
