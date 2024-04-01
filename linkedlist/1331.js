var arrayRankTransform = function (arr) {
  let res = [];
  let temp = [...arr];
  arr.sort((a, b) => a - b);
  temp.forEach((ele) => {
    res.push(arr.indexOf(ele) + 1);
  });

  return res;
};

arr = [37, 12, 28, 9, 100, 56, 80, 5, 12];
console.log(arrayRankTransform(arr));
