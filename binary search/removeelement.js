var removeElement = function (nums, val) {
  let numsLength = nums.length;
  let uniqueArray1 = [];
  let uniqueArray2 = nums.map((ele) => {
    if (ele !== val) {
      uniqueArray1.push(ele);
    }
  });
  let l = uniqueArray1.length;
  for (let i = l; i < numsLength; i++) {
    uniqueArray1[i] = "_";
  }
  return uniqueArray1;
};

var nums = [3, 2, 2, 3];
var val = 3;
removeElement(nums, val);
