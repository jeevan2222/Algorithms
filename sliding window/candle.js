var kidsWithCandies = function (candies, extraCandies) {
  let MaxVal = Math.max(...candies);
  let output = [];
  candies.forEach((ele) => {
    if (ele + extraCandies >= MaxVal) {
      output.push("true");
    } else {
      output.push("false");
    }
  });

  return output;
};
candies = [2, 3, 5, 1, 3];
extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
