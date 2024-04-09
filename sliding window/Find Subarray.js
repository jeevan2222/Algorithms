function FindSubArray(nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];

    if (sum == target) {
      console.log("Hey im Here", i);
    } else {
      for (let j = i + 1; j < nums.length; j++) {
        sum = sum + nums[j];

        if (target == sum) {
          console.log("Sum found between indexes " + i + " and " + j);
          return;
        }
      }
    }
  }
}

nums = [15, 2, 4, 8, 9, 5, 10, 23];
target = 23;
console.log(FindSubArray(nums, target));
