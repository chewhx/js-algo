const power = require("./power");

test("2 to the power of 0", () => {
  expect(power(2, 0)).toBe(1);
});

test("12 to the power of 1", () => {
  expect(power(12, 1)).toBe(12);
});

test("6 to the power of 7", () => {
  expect(power(6, 7)).toBe(279936);
});

test("7 to the power of 7", () => {
  expect(power(7, 7)).toBe(823543);
});

test("2 to the power of 9", () => {
  expect(power(2, 9)).toBe(512);
});

test("'2' to the power of 9", () => {
  expect(power("2", 9)).toBeUndefined();
});

test("__ to the power of __", () => {
  expect(power()).toBeUndefined();
});
