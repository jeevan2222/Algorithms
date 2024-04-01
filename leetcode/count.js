function sort(nums) {
  return nums.sort((a, b) => {
    return a - b;
  });
}

arr = [0, 2, 5, 0, 3, 4, 4, 5, 0];
console.log(sort(arr));
