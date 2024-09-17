var maxRepeating = function (sequence, word) {
  let i = 0;
  let j = 0;
  let len = sequence.length;
  let count = 0;
  let s = "";
  while (i < len) {
    if (sequence[i] == word[j]) {
      s = s + word[j];
      if (s == word) {
        count += count;
        j = 0;
        i++;
        s = "";
      }
      j++;
      i++;
    } else {
      i++;
      j = 0;
    }
  }
};

let sequence = "ababc";
let word = "ab";
console.log(maxRepeating(sequence, word));
// Example 1:
// Input: sequence = "ababc", word = "ab"
// Output: 2
// Explanation: "abab" is a substring in "ababc".
// Example 2:
// Input: sequence = "ababc", word = "ba"
// Output: 1
// Explanation: "ba" is a substring in "ababc". "baba" is not a substring in "ababc".
// Example 3:
// Input: sequence = "ababc", word = "ac"
// Output: 0
// Explanation: "ac" is not a substring in "ababc".
