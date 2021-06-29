const counter = require("./counter");

const seq1 = [
  [[1, 2, 2, 3, 3, 3, 4, 4, 4, 4], { 1: 1, 2: 2, 3: 3, 4: 4 }],
  [
    ["t", "h", "i", "s", "i", "s", "c", "r", "a", "z", "y", "s", "h", "i", "t"],
    { a: 1, c: 1, h: 2, i: 3, r: 1, s: 3, t: 2, y: 1, z: 1 },
  ],
];

seq1.forEach((each) => {
  test(`Count frequency in ${each[0]}`, () => {
    expect(counter(each[0])).toEqual(each[1]);
  });
});
