var singleNumber = function (nums) {
  let obj = {};
  for (let ele of nums) {
    obj[ele] = obj[ele] + 1 || 1;
  }

  for (let ele of Object.keys(obj)) {
    if (obj[ele] == 1) {
      return ele;
    }
  }
};
let nums = [4, 1, 2, 1, 2, 7, 4, 8];
console.log(singleNumber(nums));
