var findMaxK = function (nums) {
  let obj = {};
  let large = 0;
  for (let i = 0; i < nums.length; i++) {
    let char = Math.abs(nums[i]);
    obj[char] = (obj[char] || 0) + 1;
  }
  for (key of Object.keys(obj)) {
    if (obj[key] > large) {
      large = key;
    }
  }
  return large;
};

let nums = [-1, 10, 6, 7, -7, 1];

console.log(findMaxK(nums));
