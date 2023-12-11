var countNegatives = function (grid) {
  let countNegative = 0;
  for (let i = 0; i < grid.length; i++) {
    let word = grid[i];
    // console.log(word);
    word.map((ele) => {
      if (ele < 0) {
        countNegative = countNegative + 1;
      }
    });
  }
  return countNegative;
};

grid = [
  [3, 2],
  [1, 0],
];
// grid = [
//   [4, 3, 2, -1],
//   [3, 2, 1, -1],
//   [1, 1, -1, -2],
//   [-1, -1, -2, -3],
// ];
console.log(countNegatives(grid));
