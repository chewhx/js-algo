const someRecursive = require("./someRecursive");

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const seq1 = [
  [[1, 2, 3, 4], isOdd, true],
  [[4, 6, 8, 9], isOdd, true],
  [[4, 6, 8], isOdd, false],
  [[4, 6, 8], (val) => val > 10, false],
];

seq1.forEach((each) => {
  test(`Any of ${each[0]} satisfies ${each[1]}? — ans: ${each[2]}`, () => {
    expect(someRecursive(each[0], each[1])).toBe(each[2]);
  });
});

const seq2 = [
  [[], isOdd, undefined],
  [undefined, isOdd, undefined],
  [[], undefined, undefined],
  [undefined, undefined, undefined],
];

seq2.forEach((each) => {
  test(`Any of ${each[0]} satisfies ${each[1]}? — ans: ${each[2]}`, () => {
    expect(someRecursive(each[0], each[1])).toBeUndefined();
  });
});
