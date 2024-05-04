var reversePrefix = function (word, ch) {
  if (!word.includes(ch)) return word;
  let postFix = word.slice(word.indexOf(ch) + 1);
  let preFix = word
    .slice(0, word.indexOf(ch) + 1)
    .split("")
    .reverse()
    .join("");
  return preFix + postFix;
};
let word = "abcdefd";
let ch = "d";
console.log(reversePrefix(word, ch));
