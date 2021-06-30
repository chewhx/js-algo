const isSubsequence = require("./isSubsequence");

const seq1 = [
  ["hello", "hello world", true],
  ["sing", "sting", true],
  ["abc", "abracadabra", true],
  ["abc", "acb", false],
  ["pica", "pikachu", false],
];

seq1.forEach((each) => {
  test(`Is ${each[0]} in ${each[1]} — ${each[2]}`, () => {
    expect(isSubsequence(each[0], each[1])).toBe(each[2]);
  });
});

