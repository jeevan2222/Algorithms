var strStr = function (haystack, needle) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < haystack.length) {
    while (haystack[k] == needle[j]) {
      j++;
      k++;
      if (j == needle.length) return i;
      if (i == haystack.length) return -1;
    }
    if (haystack[k] != needle[j]) {
      i++;
      j = 0;
    }
  }
};

let haystack = "sahdbutsad";
let needle = "sad";
console.log(strStr(haystack, needle));
