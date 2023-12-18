var numberOfEmployeesWhoMetTarget = function (hours, target) {
  const num = hours.filter((ele) => ele >= target).length;
  return num;
};

const Input = (hours = [5, 1, 4, 2, 2]);
const target = 6;
console.log(numberOfEmployeesWhoMetTarget(Input, target));
