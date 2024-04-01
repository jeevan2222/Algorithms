var countElements = function (nums) {
  return nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
};

var nums = [4, 1, 2, 1, 2];

console.log(Object.entries(countElements(nums)).flat());
