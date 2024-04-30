var containsDuplicate = function (nums) {
  let len = nums.length;
  let arr = [...new Set(nums)];
  if (len == arr.length) {
    return false;
  } else {
    return true;
  }
};

let nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));
