const areThereDupes = require("./areThereDupes");

test(`Are there duplicates in (1,2,3)? - false`, () => {
  expect(areThereDupes(1, 2, 3)).toBe(false);
});

test(`Are there duplicates in (1,2,2)? - true`, () => {
  expect(areThereDupes(1, 2, 2)).toBe(true);
});

test(`Are there duplicates in (1,2,2,3,3,3,5,6,7,7)? - true`, () => {
  expect(areThereDupes(1, 2, 2, 3, 3, 3, 5, 6, 7, 7)).toBe(true);
});

test(`Are there duplicates in (a,b,c,a)? - true`, () => {
  expect(areThereDupes("a", "b", "c", "a")).toBe(true);
});
