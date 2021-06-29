const reverse = require("./reverse");

const seq1 = [
  (["awesome", "emosewa"], ["rithmschool", "loohcsmhtir"], ["09876", "67890"]),
];

seq1.forEach((each) => {
  test(`Reverse string - ${each[0]}`, () => {
    expect(reverse(each[0])).toBe(each[1]);
  });
});

const seq2 = [
  [undefined, undefined],
  [9091, undefined],
];

seq2.forEach((each) => {
  test(`Reverse string - ${each[0]}`, () => {
    expect(reverse(each[0])).toBeUndefined();
  });
});
