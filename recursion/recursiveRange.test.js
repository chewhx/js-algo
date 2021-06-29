const recursiveRange = require("./recursiveRange");

test("Sum of numbers up to 6", () => {
  expect(recursiveRange(6)).toBe(21);
});

test("Sum of numbers up to 10", () => {
  expect(recursiveRange(10)).toBe(55);
});

test("Sum of numbers up to __", () => {
  expect(recursiveRange()).toBeUndefined();
});

test("Sum of numbers up to '11'", () => {
  expect(recursiveRange("11")).toBeUndefined();
});
