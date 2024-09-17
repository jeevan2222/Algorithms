var prefixCount = function (words, pref) {
  let len = pref.split("").length;
  let count = 0;
  for (let word of words) {
    let splitArray = word.slice(0, len);
    if (splitArray == pref) {
      count += 1;
    }
  }
  return count;
};

words = ["pay", "attention", "practice", "attend"];
pref = "at";
console.log(prefixCount(words, pref));
