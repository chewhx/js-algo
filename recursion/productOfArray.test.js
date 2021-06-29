const productOfArray = require("./productOfArray");

test("Product of Array [1,2,3]", () => {
  expect(productOfArray([1, 2, 3])).toBe(6);
});

test("Product of Array [1,2,3,10]", () => {
  expect(productOfArray([1, 2, 3, 10])).toBe(60);
});

test("Product of Array [9,1,1,2]", () => {
  expect(productOfArray([9, 1, 1, 2])).toBe(18);
});

test("Product of Array undefined", () => {
  expect(productOfArray()).toBeUndefined();
});

test("Product of Array []", () => {
  expect(productOfArray([])).toBeUndefined();
});

test("Product of Array 'sf' ", () => {
  expect(productOfArray("sf")).toBeUndefined();
});

test("Product of Array 99 ", () => {
  expect(productOfArray(99)).toBeUndefined();
});
