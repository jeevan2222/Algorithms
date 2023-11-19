function movesZero(nums) {
  const len = nums.length;
  console.log(len);
  const sortedArray = nums
    .sort((a, b) => a - b)
    .filter((a) => {
      return a > 0;
    });
  //   const sortedArray1 = nums;
  const len1 = sortedArray.length;
  console.log(len1);

  for (let i = len1; i < len; i++) {
    sortedArray[i] = 0;
  }

  return sortedArray;
}

const array = [0, 1, 0, 3, 12];
console.log(movesZero(array));
