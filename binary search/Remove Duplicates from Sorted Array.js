function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let uniqueCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  console.log("unique", uniqueCount);

  // Fill the remaining slots with "
  for (let i = uniqueCount; i < nums.length; i++) {
    nums[i] = "_";
  }

  return uniqueCount;
}

// Example 1
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(k1); // Output: 2
console.log(nums1); // Output: [1, 2, "_"]

// Example 2
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log(k2); // Output: 5
console.log(nums2); // Output: [0, 1, 2, 3, 4, "_", "_", "_", "_", "_"]
