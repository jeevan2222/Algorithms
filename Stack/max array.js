a = [
  {
    name: "jeevan",
    age: 23,
    job: "software",
  },
  {
    name: "mounika",
    age: 26,
    job: "software",
  },
  {
    name: "pk",
    age: 23,
    job: "hero",
  },
  {
    name: "mdurga",
    age: 21,
    job: "h",
  },
];

let filterData = a.map((ele) => {
  if (ele.age < 25) {
    return {
      Name: ele.name,
      Age: ele.age,
      Job: ele.job,
    };
  }
});
console.log(filterData);
