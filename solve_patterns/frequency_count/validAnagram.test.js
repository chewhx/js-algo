const validAnagram = require("./validAnagram");

const seq1 = [
  ["abc", "bac", true],
  ["foobar", "foobar", true],
  ["", "", true],
  ["aaz", "azz", false],
  ["rat", "atr", true],
  ["apsdpafsf", "aosdpjfsd", false],
];

seq1.forEach((each) => {
  test(`Are ${each[0]} and ${each[1]} anagrams of each other? - ${each[2]}`, () => {
    expect(validAnagram(each[0], each[1])).toBe(each[2]);
  });
});

const seq2 = [
  [231, 123, undefined],
  [null, undefined, undefined],
  [{ a: "num" }, ["ak", "ka"], undefined],
];

seq2.forEach((each) => {
  test(`Are ${each[0]} and ${each[1]} anagrams of each other? - ${each[2]}`, () => {
    expect(() => validAnagram(each[0], each[1])).toThrow();
  });
});
