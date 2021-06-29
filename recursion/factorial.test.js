const factorial = require("./factorial");

test("Factorial of 0", () => {
  expect(factorial(0)).toBe(1);
});

test("Factorial of 1", () => {
  expect(factorial(1)).toBe(1);
});

test("Factorial of 5", () => {
  expect(factorial(5)).toBe(120);
});

test("Factorial of __", () => {
  expect(factorial()).toBeUndefined();
});

test("Factorial of '10'", () => {
  expect(factorial("10")).toBeUndefined();
});

test("Factorial of 55", () => {
  expect(factorial(55)).toBeCloseTo(1.2696403353658276e73, 5);
});
