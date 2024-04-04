function subarray(nums, target) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    count = count + nums[i];
    if (target <= count) {
      for (let end = 0; end < i - 1; end++) {
        if (nums[end] >= target) {
          return end;
        }
      }
      return i;
    }
    return "Not Possible";
  }
}

nums = [1, 2, 4];
target = 10;
let find = subarray(nums, target);

console.log(find);
