function maxElement(nums, k) {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i >= k) {
      i = i - start;
      console.log("i", i);

      start++;
      console.log("start", start);
    }
  }
}

let nums = [2, 6, 4, -7, 8, 5, 10, 11, 37, 22];
let k = 3;
maxElement(nums, k);
