// function arrange(nums) {
//   let maxValues = Math.max(...nums);
//   for (let i = 0; i < maxValues; i++) {
//     if (!nums.includes(i)) {
//       nums.push(-1);
//     }
//   }
//   return nums;
// }

// let nums = [2, 3, 4, 5, 6, 9];
// console.log(arrange(nums));
const months = ["Jan", "March", "April", "June"];
console.log(months.splice(0, 2, "JEEVAN"));
