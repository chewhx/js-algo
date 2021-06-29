const countUniqueValues = require("./countUniqueValues");

const seq1 = [
  [[1, 1, 1, 1, 1, 2], 2],
  [[1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13], 7],
  [[], 0],
  [[-2, -1, -1, 0, 1], 4],
  [[-2, -1], 2],
  [[3], 1],
];

seq1.forEach((each) => {
  test(`Count uniques in [${each[0]}] - ${each[1]}`, () => {
    expect(countUniqueValues(each[0])).toEqual(each[1]);
  });
});
