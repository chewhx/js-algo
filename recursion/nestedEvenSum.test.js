const nestedEvenSum = require("./nestedEvenSum");

const seq1 = [
  [
    {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    },
    6,
  ],
  [
    {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 2 }, ee: "car" },
    },
    10,
  ],
  [{ a: 3, gre: { p: 3, f: 1, h: [6, "ko"] }, l: [5, [2, 1]] }, 8],
];

seq1.forEach((each) => {
  test(`Sum all nested even numbers - ${each[1]}`, () => {
    expect(nestedEvenSum(each[0])).toBe(each[1]);
  });
});
