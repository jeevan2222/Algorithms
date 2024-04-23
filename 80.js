var removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return nums.length; // No duplicates to remove
  }

  let count = 1; // Count of the current element
  let j = 1; // Index to place the next unique element

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      // Increment count if the current element is a duplicate
      count++;
    } else {
      // Reset count to 1 if the current element is different
      count = 1;
    }

    if (count <= 2) {
      // Place the current element at index j if count is less than or equal to 2
      nums[j] = nums[i];
      j++;
    }
  }

  return j; // Return the length of the resulting array
};

// Test case
let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let expectedNums = [0, 0, 1, 1, 2, 3, 3];
let k = removeDuplicates(nums);
console.log(k); // Output: 7
console.log(nums.slice(0, k)); // Output: [0, 0, 1, 1, 2, 3, 3]
