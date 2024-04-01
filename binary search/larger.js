function larger(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      let num = nums[j].toString();
      let num1 = nums[j + 1].toString();
      let cob = `${num}${num1}`;
      let cob1 = `${num1}${num}`;

      if (cob < cob1) {
        // Swap nums[j] and nums[j + 1]
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  // Join the sorted numbers to form the largest number
  let result = nums.join("");

  // Remove leading zeros if any
  result = result.replace(/^0+/, "");

  // If the result is an empty string (all numbers were zeros), return "0"
  return result || "0";
}

let nums = [3, 30, 34, 5, 9];
console.log(larger(nums));
// Output: "9534330"
