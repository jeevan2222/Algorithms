let res = [1,1,1,1,1,2,2,2,3,3,3,3,2,2,2];
let result = 0;
let count = 1;
let len = res.length;

for (let i = 1; i < len; i++) {
    if (res[i] === res[i - 1]) {
        count++;  // Increment count if the current element matches the previous
    } else {
        result = Math.max(result, count);  // Update the result with the max count
        count = 1;  // Reset count for the new sequence
    }
}

// Final check for the last sequence
result = Math.max(result, count);

console.log(result);  // Output: 5
