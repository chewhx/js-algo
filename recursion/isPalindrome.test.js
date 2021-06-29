const isPalindrome = require("./isPalindrome");

const seq1 = [
  ["awesome", false],
  ["foobar", false],
  ["tacocat", true],
  ["amanaplanacanalpanama", true],
  ["amanaplanacanalpandemonium", false],
];

seq1.forEach((each) => {
  test(`Is ${each[0]} (${typeof each[0]}) a palindrome? — ${each[1]}`, () => {
    expect(isPalindrome(each[0])).toBe(each[1]);
  });
});

const seq2 = [
  [234, undefined],
  [["12", "43", 3], undefined],
  [{ ob: "f" }, undefined],
];

seq2.forEach((each) => {
  test(`Is ${each[0]} (${typeof each[0]}) a palindrome? — ${each[1]}`, () => {
    expect(isPalindrome(each[0])).toBeUndefined();
  });
});
