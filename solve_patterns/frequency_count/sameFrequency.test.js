const sameFrequency = require("./sameFrequency");

const seq1 = [
  [182, 128, true],
  [13, 34, false],
  [358976, 986735, true],
  [22, 222, false],
  [9786, 1234, false],
  [1029384756, 123789456000, false],
];

seq1.forEach((each) => {
  test(`Do ${each[0]} and ${each[1]} have the same frequency? - ${each[2]}`, () => {
    expect(sameFrequency(each[0], each[1])).toBe(each[2]);
  });
});

const seq2 = [
  [["182", 128], "error"],
  [[[], {}], "error"],
  [["acsd", "cdsa"], "error"],
  [[[22], 222], "error"],
];

seq2.forEach((each) => {
  test(`Do ${each[0]} and ${each[1]} have the same frequency? - ${each[2]}`, () => {
    expect(() => sameFrequency(each[0], each[1])).toThrow();
  });
});
