var shuffle = function (nums, n) {
  let left = 0;
  let right = n;
  let res = [];
  let len = nums.length;
  while (left < right && right < len) {
    res.push(nums[left], nums[right]);
    left++;
    right++;
  }

  return res;
};
let nums = [1, 2, 3, 4, 4, 3, 2, 1];
let n = 4;
console.log(shuffle(nums, n));
