var twoSum = function (numbers, target) {
  for (let i = 1; i < numbers.length; i++) {
    let num = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([1, 2, 3, 4, 6, 7], 9));
